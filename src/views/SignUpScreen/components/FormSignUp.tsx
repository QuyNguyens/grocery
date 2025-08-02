'use client';

import { Button, Form, Input } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { schemaSignUp } from '../Constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import authServices from 'services/auth.service';
import { useUserContext } from 'context/AuthContext';

export type FormSignUpInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const FormSignUp = () => {
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSignUpInputs>({
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(async (data: FormSignUpInputs) => {
    try {
      const res = await authServices.signup({
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
      setError('Email đã tồn tại!!!');
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => {
          reset();
        }}
      >
        <Input
          isRequired
          label="Name"
          labelPlacement="outside"
          placeholder="Enter your name"
          type="text"
          size="lg"
          {...register('name')}
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message}
        />

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
        {error && <p className="text-sm text-red-500!">{error}</p>}
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
        <Input
          isRequired
          label="Password Confirm"
          labelPlacement="outside"
          placeholder="Confirm your password"
          type="password"
          size="lg"
          {...register('passwordConfirm')}
          isInvalid={!!errors.passwordConfirm}
          errorMessage={errors.passwordConfirm?.message}
        />
        <div className="w-full">
          <Button className="text-white!" size="lg" fullWidth color="primary" type="submit">
            SignUp
          </Button>
        </div>
      </Form>
      <div className="w-full">
        <p className="text-xs text-center">
          Already have account?{' '}
          <span
            onClick={() => router.push('/login')}
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormSignUp;
