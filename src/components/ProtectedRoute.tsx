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
    if (isClient && !user) {
      router.push('/login');
    }
  }, [user, router, pathname]);

  if (!user) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedRoute;
