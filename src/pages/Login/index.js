import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import background from '../../images/login.png';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const onFinish = (values) => {
    localStorage.setItem('user', 'hello');
    history.replace('/');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login-page'>
      <div className='card'>
        <div className='change-page'>
          <Link to='/register'>
            Create new account? <Button>Register</Button>
          </Link>
        </div>
        <Row gutter={16}>
          <Col md={10} className='background'>
            <img src={background} alt='bg' />
          </Col>
          <Col md={14} className='form'>
            <h1 className='title'> Welcome! </h1>
            <Form
              name='basic'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout='vertical'
            >
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                  {
                    type: 'email',
                    message: 'Invalid email',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ boxShadow: '0px 6px 7px 0px rgba(64, 169, 255, 0.2)' }}
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default LoginPage;
