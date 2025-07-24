import * as yup from 'yup';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'], weight: ['400'] });
export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email('Vui lòng nhập email hợp lệ')
      .required('Bắt buộc phải nhập email')
      .matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, 'Vui lòng nhập email hợp lệ'),
    password: yup
      .string()
      .required('Bắt buộc phải nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  })
  .required();
