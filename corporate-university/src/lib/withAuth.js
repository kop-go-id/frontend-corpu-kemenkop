import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userDetail } from '@/utils/storage';

// Telah login dan hanya dapat diakses sesuai dengan rolenya
const roleRoutes = {
  ADMINISTRATOR: '/administrator',
  'DINAS PEMERINTAHAN PROVINSI': '/dinas-provinsi',
  'DINAS PEMERINTAHAN KABUPATEN KOTA': '/dinas-kabupaten-kota',
  'KOORDINATOR WILAYAH': '/koordinator-wilayah',
  'KEMENTERIAN LEMBAGA': '/kementerian-lembaga',
  'IKATAN NOTARIS INDONESIA': '/ikatan-notaris-indonesia',
  KOPERASI: '/koperasi',
  NPAK: '/npak',
  'RELAWAN PENDAMPING TIK': '/pendamping-desa',
  PANDI: '/pandi',
  BUMN: '/bumn',
  BANK: '/bank'
};

// Telah login dan dapat diakses semua role
const authenticatedPaths = [
  '/profil',
  '/document/[fileUrl]',
];

export default function withAuth(Component) {
  return function Protected(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const user = userDetail();
      const currentPath = router.pathname;

      if (!user) {
        router.replace('/masuk');
        return;
      }

      const role = user?.roles?.[0]?.role?.role?.name;
      const allowedPrefix = roleRoutes[role];

      const requiresAuth = authenticatedPaths.includes(currentPath);

      if (!allowedPrefix) {
        router.replace('/unauthorized');
        return;
      }

      // Redirect to the role's dashboard
      if (!currentPath.startsWith(allowedPrefix) && !requiresAuth) {
        switch (allowedPrefix) {
          case '/ikatan-notaris-indonesia':
            router.replace(`${allowedPrefix}/proses-koperasi/listing`);
            break;
          case '/npak':
          case '/pendamping-desa':
            router.replace(`${allowedPrefix}/koperasi/listing`);
            break;
          case '/koperasi':
            router.replace(`${allowedPrefix}/profil`);
            break;
          default:
            router.replace(`${allowedPrefix}/dashboard`);
        }

        return;
      }

      setAuthorized(true);
    }, []);

    if (!authorized) return null;

    return <Component {...props} />;
  };
}
