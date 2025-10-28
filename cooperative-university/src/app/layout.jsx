import { Plus_Jakarta_Sans } from 'next/font/google';
import 'antd/dist/reset.css';
import './globals.css';
import AntdRegistry from '@/lib/antd-registry';
import { ANTD_THEME } from '@/config/antd';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Cooperative University',
  description: 'Cooperative University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <AntdRegistry theme={ANTD_THEME}>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
