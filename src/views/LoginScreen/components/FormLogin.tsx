'use client';

import { Button, Form, Image, Input } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { schemaLogin } from '../Constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_WITH } from 'constants/login';
import { redirect, useRouter } from 'next/navigation';
import authServices from 'services/auth.service';
import { useUserContext } from 'context/AuthContext';

export type LoginFormInputs = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const { setUser } = useUserContext();
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(async (data: LoginFormInputs) => {
    try {
      const res = await authServices.login({
        ...data,
        email: data.email.toLowerCase(),
      });

      if (res.data.success) {
        const { data } = res.data;

        localStorage.setItem('access_token', data?.accessToken);
        localStorage.setItem('refresh_token', data?.refreshToken);
        localStorage.setItem('user', JSON.stringify(data?.user));
        setUser(data?.user);

        const backUrl = localStorage.getItem('backUrl');
        if (backUrl) {
          localStorage.removeItem('backUrl');
          router.push(backUrl);
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      setError('Email hoặc mật khẩu không chính xác!!!');
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => {
          reset();
          setError('');
        }}
      >
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          size="lg"
          {...register('email')}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          type="password"
          size="lg"
          {...register('password')}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <div className="flex justify-between items-center w-full">
          {error ? <p className="text-sm text-red-500!">{error}</p> : <p> </p>}
          <p className="text-xs text-gray-500 hover:underline">forgot password?</p>
        </div>
        <div className="flex w-full gap-2">
          <Button
            className="text-white! font-semibold"
            size="lg"
            fullWidth
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button className="font-semibold" size="lg" fullWidth type="reset" variant="flat">
            Reset
          </Button>
        </div>
      </Form>
      <div className="w-full">
        <div className="flex mx-auto items-center justify-center w-4/5 gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-600">Or Login with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {LOGIN_WITH.map((item, index) => (
          <Button
            className="bg-white border border-gray-300 rounded-2xl font-medium"
            onClick={() => redirect(item.url)}
            key={index}
            startContent={<img src={item.icon.src} alt="icon" className="w-6 h-6 object-contain" />}
            size="lg"
            fullWidth
          >
            {item.description}
          </Button>
        ))}
      </div>
      <div className="w-full">
        <p className="text-xs text-center">
          Don't have an account?{' '}
          <span
            onClick={() => router.push('/sign-up')}
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
