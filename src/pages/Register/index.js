import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import background from '../../images/register.png';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='register-page'>
      <div className='card'>
        <div className='change-page'>
          <Link to='/login'>
            Already have account? <Button>Log in</Button>
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

              <Form.Item
                label='Confirm password'
                name='repassword'
                rules={[
                  { required: true, message: 'Please input your password!' },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  danger
                  type='primary'
                  htmlType='submit'
                  style={{ boxShadow: ' 0px 6px 7px 0px rgba(255, 120, 117, 0.3)' }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default RegisterPage;
