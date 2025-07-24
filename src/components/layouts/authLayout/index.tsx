import { Image } from '@heroui/image';
import { ROUTES } from 'constants/routes';
import { usePathname } from 'next/navigation';
import LoginImage from '../../../../public/images/login-image.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname.includes(ROUTES.login);
  const isSignupPage = pathname.includes(ROUTES.signup);
  const isResetPassword =
    pathname.includes(ROUTES.resetPassword) || pathname.includes(ROUTES.forgotPassword);

  return (
    <main className="p-5 md:p-20 xl:p-36 h-[100vh] py-5 md:py-8 xl:py-12 bg-gray-300">
      <div className="flex h-full gap-20 bg-white rounded-2xl shadow-2xl px-5 md:px-10 xl:px-20 py-10">
        <div className="flex-1 hidden lg:block">
          <div
            className="h-[75vh] bg-cover bg-center rounded-4xl"
            style={{ backgroundImage: `url(${LoginImage.src})` }}
          >
            <div className="flex flex-col gap-4 px-5 pt-5">
              <h1 className="text-white! font-bold lg:text-3xl xl:text-5xl lg:leading-8 xl:leading-14">
                Simplify shopping online with our grocery store.
              </h1>
              <span className="text-white! text-sm font-medium">
                Simplify your grocery store management with our user-friendly admin dashboard.
              </span>
            </div>
          </div>
        </div>
        {<div className="flex-1 md:max-w-[551px] my-2">{children}</div>}
      </div>
    </main>
  );
}
