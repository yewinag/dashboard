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
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { usePathname } from 'next/navigation';
import UnauthenticatedLayout from '@/components/UnAuthenticatedLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <InnerLayout>{children}</InnerLayout>
    </AuthProvider>
  );
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          {isAuthPage ? (
            <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
          ) : (
            <ProtectedRoute>
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
            </ProtectedRoute>
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
`;
