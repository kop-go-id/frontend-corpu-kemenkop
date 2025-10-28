'use client';

import { Button, Card, Typography, Space, Row, Col } from 'antd';
import { LoginOutlined, DashboardOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '@/components/hoc/withAuth';

const { Title, Paragraph } = Typography;

export default function Home() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <Space direction="vertical" size="large" className="w-full">
            <div className="text-center">
              <Title level={1}>Cooperative University</Title>
              <Paragraph className="text-lg text-gray-600">
                Learning Website by Kementerian Koperasi Republik Indonesia
              </Paragraph>
            </div>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card className="h-full">
                  <Space direction="vertical" size="middle" className="w-full">
                    <div className="text-center">
                      <DashboardOutlined className="text-4xl text-blue-500 mb-2" />
                      <Title level={3}>Protected Dashboard</Title>
                      <Paragraph>
                        Access the authenticated dashboard that requires login.
                      </Paragraph>
                    </div>
                    
                    {isAuthenticated ? (
                      <div className="text-center">
                        <Link href="/user/dashboard">
                          <Button type="primary" size="large" className="w-full">
                            Go to Dashboard
                          </Button>
                        </Link>
                        <Button 
                          type="default" 
                          onClick={logout}
                          className="w-full mt-2"
                        >
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Link href="/login">
                          <Button type="primary" size="large" className="w-full">
                            Login Required
                          </Button>
                        </Link>
                      </div>
                    )}
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Card className="h-full">
                  <Space direction="vertical" size="middle" className="w-full">
                    <div className="text-center">
                      <InfoCircleOutlined className="text-4xl text-green-500 mb-2" />
                      <Title level={3}>Authentication Status</Title>
                      <Paragraph>
                        Current authentication status and information.
                      </Paragraph>
                    </div>
                    
                    <div className={`p-4 rounded-lg border ${
                      isAuthenticated 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                    }`}>
                      <Paragraph className={`text-center ${
                        isAuthenticated ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {isAuthenticated ? '✅ Authenticated' : '❌ Not Authenticated'}
                      </Paragraph>
                    </div>
                  </Space>
                </Card>
              </Col>
            </Row>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Title level={4} className="text-blue-800 mb-3">
                🔐 Authentication HOC Implementation
              </Title>
              <Paragraph className="text-blue-700">
                This project now includes a Higher-Order Component (HOC) for authentication 
                that protects routes under <code>/user/dashboard</code>. The HOC:
              </Paragraph>
              <ul className="text-blue-700 ml-6">
                <li>Checks for AUTH_TOKEN in localStorage</li>
                <li>Redirects unauthenticated users to /login</li>
                <li>Shows loading state during authentication check</li>
                <li>Provides useAuth hook for authentication state</li>
              </ul>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  );
}