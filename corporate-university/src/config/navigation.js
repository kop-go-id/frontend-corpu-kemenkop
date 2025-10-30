import { GraduationCap, BookOpen, MessageCircleMore } from 'lucide-react';

// Primary navigation items for authenticated user
export const NAV_ITEMS = [
  { label: 'Semua Kelas', href: '/user/courses', Icon: GraduationCap },
  { label: 'Pembelajaran Saya', href: '/user/enrolled', Icon: BookOpen },
  { label: 'Diskusi', href: '/user/discussion', Icon: MessageCircleMore },
];

export default NAV_ITEMS;


