'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, Typography, Space, message } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { setAuthToken } from '@/lib/client';

const { Title, Paragraph } = Typography;

/**
 * Login Page
 * Simple login form for testing authentication
 */
const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    
    try {
      // Simulate API call - replace with actual login service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password combination
      // In real implementation, you would call the login service here
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      // Store the token in localStorage
      setAuthToken(mockToken);
      
      message.success('Login successful!');
      
      // Redirect to dashboard
      router.push('/dashboard');
      
    } catch (error) {
      message.error('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <Space direction="vertical" size="large" className="w-full">
            <div className="text-center">
              <UserOutlined className="text-6xl text-blue-500 mb-4" />
              <Title level={2}>Sign In</Title>
              <Paragraph className="text-gray-600">
                Enter your credentials to access the dashboard
              </Paragraph>
            </div>

            <Form
              name="login"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
              size="large"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full"
                  loading={loading}
                  icon={<LoginOutlined />}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <Title level={5} className="text-yellow-800 mb-2">
                🧪 Demo Mode
              </Title>
              <Paragraph className="text-yellow-700 text-sm">
                For testing purposes, you can use any email and password combination 
                (minimum 6 characters for password). The system will generate a mock token.
              </Paragraph>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
