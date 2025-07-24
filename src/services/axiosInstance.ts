import axios, { AxiosRequestConfig } from 'axios';

const baseApiUrl = process.env.NEXT_PUBLIC_API as string;

const axiosRaw = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosRaw.interceptors.request.use((config) => {
  if (config.headers?.requiresAuth) {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  delete config.headers?.requiresAuth;
  return config;
});

function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('access_token');
}

function combineUrl(prefix: string, endpoint: string): string {
  return `${prefix.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

const axiosInstance = {
  get: (prefix: string, endpoint: string, config?: AxiosRequestConfig) => {
    return axiosRaw.get(combineUrl(prefix, endpoint), config);
  },

  post: (prefix: string, endpoint: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosRaw.post(combineUrl(prefix, endpoint), data, config);
  },

  put: (prefix: string, endpoint: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosRaw.put(combineUrl(prefix, endpoint), data, config);
  },

  delete: (prefix: string, endpoint: string, config?: AxiosRequestConfig) => {
    return axiosRaw.delete(combineUrl(prefix, endpoint), config);
  },
};

export default axiosInstance;
