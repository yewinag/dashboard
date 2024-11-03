import * as Yup from 'yup';

export const YupLogin = () => {
  return {
    email: Yup.string().email().required('validation.required'),
    password: Yup.string().required('validation.required').min(3, 'Too Short!'),
  };
};
