// hoc/withGuest.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userDetail } from '@/utils/storage';

const roleRoutes = {
  ADMINISTRATOR: '/administrator',
  'DINAS PEMERINTAHAN PROVINSI': '/dinas-provinsi',
  'DINAS PEMERINTAHAN KABUPATEN KOTA': '/dinas-kabupaten-kota',
  'KOORDINATOR WILAYAH': '/koordinator-wilayah',
  'KEMENTERIAN LEMBAGA': '/kementerian-lembaga',
  'IKATAN NOTARIS INDONESIA': '/ikatan-notaris-indonesia',
  KOPERASI: '/koperasi',
  NPAK: '/npak',
};

export default function withGuest(Component) {
  return function GuestOnly(props) {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
      const user = userDetail();

      if (user) {
        const role = user?.roles?.[0]?.role?.role?.name;
        const redirectPath = roleRoutes[role];
        switch (redirectPath) {
          case '/ikatan-notaris-indonesia':
            router.replace(`${redirectPath}/proses-koperasi/listing`);
            break;
          case '/npak':
            router.replace(`${redirectPath}/koperasi/listing`);
            break;
          case '/koperasi':
            router.replace(`${redirectPath}/profil`);
            break;
          default:
            router.replace(`${redirectPath}/dashboard`);
        }
      } else {
        setAllowed(true);
      }
    }, []);

    if (!allowed) return null;

    return <Component {...props} />;
  };
}
