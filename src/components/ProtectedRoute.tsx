'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../app/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (!user) {
        router.push('/login');
      }
    }
  }, [isClient, user, router, pathname]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
