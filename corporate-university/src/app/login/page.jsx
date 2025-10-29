'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setAuthToken } from '@/lib/client';
import Image from 'next/image';

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
      router.push('/user/courses');
      
    } catch (error) {
      message.error('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-primary">
      <div className="hidden lg:flex items-center justify-end p-12">
        <div className="relative w-full max-w-2xl h-auto">
          <Image
            src="/images/login-page/secure-login.svg"
            alt="Secure Login"
            width={600}
            height={544}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Masuk
              </h1>
            </div>

            <Form
              name="login"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
              size="large"
            >
              <Form.Item
                label={<span className="text-gray-700 font-medium">Email</span>}
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="yourname@example.com"
                  className="h-12 rounded-lg border-gray-300"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700 font-medium">Kata Sandi</span>}
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="••••••••"
                  className="h-12 rounded-lg border-gray-300"
                />
              </Form.Item>

              <div className="flex justify-end mb-6">
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Lupa kata sandi?
                </a>
              </div>

              <Form.Item>
                <Button 
                  htmlType="submit" 
                  className="w-full h-12 rounded-lg font-semibold"
                  loading={loading}
                  style={{
                    backgroundColor: '#E5A80E',
                    borderColor: '#E5A80E',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#D4990D';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#E5A80E';
                  }}
                >
                  Masuk
                </Button>
              </Form.Item>
            </Form>

            {/* Demo Mode Info */}
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-semibold mb-2 text-sm">
                🧪 Demo Mode
              </p>
              <p className="text-yellow-700 text-xs">
                For testing purposes, you can use any email and password combination 
                (minimum 6 characters for password). The system will generate a mock token.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
