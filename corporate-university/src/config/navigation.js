import { GraduationCap, BookOpen, MessageCircleMore, Grid2x2 } from 'lucide-react';

// Primary navigation items for authenticated user
export const NAV_ITEMS = [
  { label: 'Beranda', href: '/user/overview', Icon: Grid2x2 },
  { label: 'Semua Kelas', href: '/user/courses', Icon: GraduationCap },
  { label: 'Pembelajaran Saya', href: '/user/enrolled', Icon: BookOpen },
  { label: 'Diskusi', href: '/user/discussion', Icon: MessageCircleMore },
];

export default NAV_ITEMS;


