import { memo } from 'react';
import * as Yup from 'yup';
import { Input, Form, Row, Col, Button } from 'antd';
import { useYup } from '@/validations';
import { ILogin } from '@/interfaces';
import { StyledAuth } from '@/styles/Auth';
import { useAuth } from '@/app/context/AuthContext';
import useAxiosClient from '@/hooks/useAxiosClient';
import Link from 'next/link';
const initValue: ILogin = {
  email: '',
  password: '',
};

export const LoginForm = memo(() => {
  const { YupLogin } = useYup();
  const { login } = useAuth();
  const loginSchema = Yup.object().shape(YupLogin);
  const [loginForm] = Form.useForm();
  const axiosClient = useAxiosClient();
  const handleSubmit = async (values: ILogin) => {
    try {
      const response = await axiosClient.post('/admin/login', values);
      const data = response.data;
      if (data.token) {
        login(data);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const yupSync = {
    async validator({ field }: any, value: any) {
      await loginSchema.validateSyncAt(field, { [field]: value });
    },
  };
  return (
    <StyledAuth>
      <header>
        <h4>{'Login'}</h4>
      </header>
      <Form
        form={loginForm}
        name="basic"
        initialValues={initValue}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Row gutter={{ md: 54, lg: 54, sm: 0 }}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item label={'Email'} name="email" rules={[yupSync]}>
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ md: 54, lg: 54, sm: 0 }}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item label={'Password'} name="password" rules={[yupSync]}>
              <Input.Password type="password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ md: 54, lg: 54, sm: 0 }}>
          <Col lg={8} md={8} sm={8} xs={8} />
          <Col lg={8} md={8} sm={8} xs={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="middle">
                {'Login'}
              </Button>
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8} />
        </Row>
        <Row gutter={{ md: 54, lg: 54, sm: 0 }}>
          <Col lg={8} md={8} sm={8} xs={8} />
          <Col lg={8} md={8} sm={8} xs={8}>
            <Form.Item>
              {/* <Link to={'/'}>{'page.forgot_password'}</Link> */}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8} />
        </Row>
      </Form>
    </StyledAuth>
  );
});
