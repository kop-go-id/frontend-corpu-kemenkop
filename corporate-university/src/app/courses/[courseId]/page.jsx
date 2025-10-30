'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import CourseHero from '@/components/modules/course-detail/CourseHero';
import LearningOutcomes from '@/components/modules/course-detail/LearningOutcomes';
import AboutCourse from '@/components/modules/course-detail/AboutCourse';
import Curriculum from '@/components/modules/course-detail/Curriculum';

const COURSE_DATA = {
  id: 'dclp-001',
  title: 'Digital Cooperative Leadership Program (DCLP)',
  description: 'Program kepemimpinan digital untuk transformasi koperasi modern. Program ini dirancang untuk membekali pemimpin koperasi dengan keterampilan digital dan strategi inovatif yang diperlukan untuk menghadapi tantangan era digital.',
  duration: '8 Minggu',
  moduleCount: '12 Modul',
  instructor: 'Dr. Bapak Budi Ada Lima',
  learners: 12345,
  image: '/images/landing-page/coder.svg',
  badges: [
    { label: 'Kepemimpinan', variant: 'solid', color: 'warning' },
    { label: 'Mahir', variant: 'outline', color: 'primary' },
  ],
  learningOutcomes: [
    'Memahami konsep kepemimpinan digital',
    'Menerapkan strategi transformasi digital',
    'Menggunakan data untuk pengambilan keputusan',
    'Memimpin tim dalam lingkungan digital',
    'Mengembangkan strategi pemasaran digital',
  ],
  about: [
    'Program ini dirancang khusus untuk para pemimpin koperasi yang ingin mengembangkan kemampuan digital mereka. Melalui pendekatan teori, studi kasus, dan proyek praktis, peserta akan mendapatkan pemahaman mendalam tentang transformasi digital dan bagaimana menerapkannya dalam konteks koperasi.',
    'Dengan kombinasi teori, studi kasus, dan proyek praktis, course ini akan membekali Anda dengan keterampilan yang diperlukan untuk memimpin organisasi koperasi di era digital.',
  ],
  curriculum: [
    'Pengantar Kepemimpinan Digital',
    'Transformasi Digital Koperasi',
    'Strategi Inovasi',
    'Data-Driven Decision Making',
    'Manajemen Perubahan',
    'Digital Marketing untuk Koperasi',
    'Cybersecurity Awareness',
    'Leading Remote Teams',
    'Sustainable Digital Growth',
    'Case Studies',
    'Capstone Project',
    'Assessment & Certification',
  ],
};

const CourseDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.courseId;

  const handleEnroll = () => {
    router.push(`/user/pretest/${courseId}/welcome`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHero course={COURSE_DATA} onEnroll={handleEnroll} />
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <LearningOutcomes outcomes={COURSE_DATA.learningOutcomes} />
            <AboutCourse about={COURSE_DATA.about} />
          </div>

          <div className="lg:col-span-1">
            <Curriculum items={COURSE_DATA.curriculum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;