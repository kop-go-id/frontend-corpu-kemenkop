import { GraduationCap, BookOpen } from 'lucide-react';

// Primary navigation items for authenticated user
export const NAV_ITEMS = [
  { label: 'Semua Kelas', href: '/user/courses', Icon: GraduationCap },
  { label: 'Pembelajaran Saya', href: '/user/enrolled', Icon: BookOpen },
];

export default NAV_ITEMS;


