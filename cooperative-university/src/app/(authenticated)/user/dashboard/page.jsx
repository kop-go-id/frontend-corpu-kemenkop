'use client';

import { useAuth } from '@/components/hoc/withAuth';
import { Button, Card, Typography, Space } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

/**
 * Dashboard Page - Example authenticated page
 * This page will only be accessible to authenticated users
 */
const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="p-6">
      <Card>
        <Space direction="vertical" size="large" className="w-full">
          <div className="text-center">
            <UserOutlined className="text-6xl text-blue-500 mb-4" />
            <Title level={2}>Welcome to Dashboard</Title>
            <Paragraph className="text-lg">
              This is a protected page that requires authentication.
            </Paragraph>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <Title level={4} className="text-green-800 mb-2">
              ✅ Authentication Status
            </Title>
            <Paragraph className="text-green-700">
              You are successfully authenticated! 
              {isAuthenticated ? ' Your session is active.' : ' Session expired.'}
            </Paragraph>
          </div>

          <div className="text-center">
            <Button 
              type="primary" 
              danger 
              icon={<LogoutOutlined />}
              onClick={logout}
              size="large"
            >
              Logout
            </Button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <Title level={4} className="text-blue-800 mb-2">
              ℹ️ How it works
            </Title>
            <Paragraph className="text-blue-700">
              This page is protected by the authentication HOC. The HOC checks for the 
              AUTH_TOKEN in localStorage and redirects unauthenticated users to the login page.
            </Paragraph>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Dashboard;
