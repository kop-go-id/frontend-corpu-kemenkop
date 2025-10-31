// Page metadata configuration derived from pathname

export const DEFAULT_PAGE_META = {
  title: '',
  description: '',
};

const META_RULES = [
  {
    match: (path) => path === '/user/overview',
    meta: {
      title: 'Beranda',
      description: 'Ringaksan aktivitas anda',
    },
  },
  {
    match: (path) => path === '/user/courses',
    meta: {
      title: 'Semua Kelas',
      description: 'Jelajahi dan enroll kelas yang tersedia',
    },
  },
  {
    match: (path) => path === '/user/enrolled',
    meta: {
      title: 'Pembelajaran Saya',
      description: 'Lanjutkan kelas yang sedang Anda ikuti',
    },
  },
  {
    match: (path) => path === '/user/learn',
    meta: {
      title: 'Belajar',
      description: 'Fokus pada materi dan capai kemajuan',
    },
  },
  {
    match: (path) => path === '/user/discussion',
    meta: {
      title: 'Diskusi',
      description: 'Bergabung dan berdiskusi dengan peserta lainnya',
    },
  },
];

export function getPageMetaByPath(pathname) {
  if (!pathname) return DEFAULT_PAGE_META;
  const rule = META_RULES.find((r) => r.match(pathname));
  return rule ? rule.meta : DEFAULT_PAGE_META;
}

export default getPageMetaByPath;


