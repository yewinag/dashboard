'use client';

import { ConfigProvider } from 'antd';
import { theme } from '../theme/themeConfig';
import './globals.css'; // Ensure you import Ant Design CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
