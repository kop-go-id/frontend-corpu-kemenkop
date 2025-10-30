import { Plus_Jakarta_Sans } from 'next/font/google';
import 'antd/dist/reset.css';
import './globals.css';
import AntdRegistry from '@/lib/antdRegistry';
import { ANTD_THEME } from '@/config/antd';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Corporate University by Kementerian Koperasi Republik Indonesia',
  description: 'Corporate University by Kementerian Koperasi Republik Indonesia, platform pembelajaran, informasi, dan pengembangan koperasi modern',
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
