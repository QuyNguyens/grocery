import * as yup from 'yup';

export const schemaSignUp = yup
  .object({
    name: yup.string().required('Bắt buộc phải nhập tên').max(300),
    email: yup
      .string()
      .email('Vui lòng nhập email hợp lệ')
      .required('Bắt buộc phải nhập email')
      .matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, 'Vui lòng nhập email hợp lệ'),
    password: yup
      .string()
      .required('Bắt buộc phải nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Vui lòng nhập mật khẩu hợp lệ',
      ),
    passwordConfirm: yup
      .string()
      .required('Bắt buộc phải nhập mật khẩu xác thực')
      .oneOf([yup.ref('password'), ''], 'Mật khẩu phải khớp'),
  })
  .required();
