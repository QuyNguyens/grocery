import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const baseApiUrl = process.env.NEXT_PUBLIC_API as string;

const axiosRaw = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('access_token');
}

function setAccessToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', token);
  }
}

function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refresh_token');
}

function setRefreshToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('refresh_token', token);
  }
}

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function subscribeTokenRefresh(cb: (token: string) => void) {
  refreshSubscribers.push(cb);
}

function onRefreshed(token: string) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await axiosRaw.post('/api/users/refresh-token', { rfToken: refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data?.data;

    if (accessToken) {
      setAccessToken(accessToken);
      if (newRefreshToken) {
        setRefreshToken(newRefreshToken);
      }
      return accessToken;
    }

    return null;
  } catch (err) {
    console.error('Refresh token failed:', err);
    return null;
  }
}

axiosRaw.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const requiresAuth =
    config.headers?.requiresAuth === true || config.headers?.requiresAuth === 'true';

  if (requiresAuth) {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  delete config.headers.requiresAuth;
  return config;
});

axiosRaw.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      typeof window !== 'undefined'
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token: string) => {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`,
            };
            resolve(axiosRaw(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const newToken = await refreshAccessToken();
        if (newToken) {
          onRefreshed(newToken);
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newToken}`,
          };
          return axiosRaw(originalRequest);
        } else {
          window.location.href = '/login';
        }
      } catch (err) {
        window.location.href = '/login';
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

function combineUrl(prefix: string, endpoint: string): string {
  return `${prefix.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

const axiosInstance = {
  get: (prefix: string, endpoint: string, config?: AxiosRequestConfig) =>
    axiosRaw.get(combineUrl(prefix, endpoint), config),

  post: (prefix: string, endpoint: string, data?: any, config?: AxiosRequestConfig) =>
    axiosRaw.post(combineUrl(prefix, endpoint), data, config),

  put: (prefix: string, endpoint: string, data?: any, config?: AxiosRequestConfig) =>
    axiosRaw.put(combineUrl(prefix, endpoint), data, config),

  delete: (prefix: string, endpoint: string, config?: AxiosRequestConfig) =>
    axiosRaw.delete(combineUrl(prefix, endpoint), config),
};

export default axiosInstance;
