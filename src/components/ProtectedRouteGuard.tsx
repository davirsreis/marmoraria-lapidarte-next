import { useEffect, useState } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/router';
import { Slash } from './Slash';

interface ProtectedRouteGuardProps {
  children?: any
}

const ProtectedRouteGuard = (props: ProtectedRouteGuardProps) => {
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          setAuthChecked(true);
        } else {
          router.push('/login');
        }
      }, 2000);
    });

    return () => unsubscribe();
  }, [router]);

  if (!authChecked) {
    return <Slash />;
  }

  return <>{props.children}</>;
};

export default ProtectedRouteGuard;
