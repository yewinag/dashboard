'use client';

import { ConfigProvider, Layout } from 'antd';
import { theme } from '../theme/themeConfig';
import './globals.css'; // Ensure you import Ant Design CSS
import { Content } from 'antd/es/layout/layout';
import HeaderLayout from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import styled from 'styled-components';
import Placeholder from '@/components/Placeholder';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          {isClient ? (
            <MainLayout>
              <Sidebar />
              <Layout>
                <HeaderLayout />
                <ContentLayout>{children}</ContentLayout>
              </Layout>
            </MainLayout>
          ) : (
            <Placeholder />
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}
const MainLayout = styled(Layout)`
  height: 100vh;
`;
const ContentLayout = styled(Content)`
  padding: 24px;
  margin: 24px 16px;
`;
