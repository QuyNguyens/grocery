import GoogleIcon from '../../public/icons/google.png';
import FacebookIcon from '../../public/icons/facebook.png';

const oauthUrl = process.env.NEXT_PUBLIC_API as string;

export const LOGIN_WITH = [
  {
    icon: GoogleIcon,
    description: 'Login with Google',
    url: `${oauthUrl}/api/auth/google`,
  },
  {
    icon: FacebookIcon,
    description: 'Login with Facebook',
    url: `${oauthUrl}/api/auth/facebook`,
  },
];
