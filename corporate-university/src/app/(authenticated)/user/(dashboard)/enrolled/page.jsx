"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Empty, Spin } from 'antd';
import { SearchBar, Pagination } from '@/components/common';
import EnrolledCourseCard from '@/components/modules/enrolled-courses/EnrolledCourseCard';

const MOCK_ENROLLED_COURSES = [
  {
    id: 1,
    title: 'Dasar dan Pengembangan Kelembagaan Koperasi',
    description: 'Pelatihan ini membahas prinsip dasar, tata kelola, dan pengembangan kelembagaan koperasi di Indonesia.',
    duration: '8 Minggu',
    modules: 3,
    totalModules: 4,
    category: 'Kepemimpinan',
    level: 'Mahir',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 2,
    title: 'Digital Transformation untuk Koperasi',
    description: 'Program pembelajaran tentang transformasi digital dan strategi inovasi dalam bisnis koperasi modern.',
    duration: '6 Minggu',
    modules: 5,
    totalModules: 10,
    category: 'Digital',
    level: 'Menengah',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 3,
    title: 'Manajemen Operasional Koperasi',
    description: 'Fokus pada manajemen operasional, proses bisnis, dan efisiensi organisasi koperasi.',
    duration: '5 Minggu',
    modules: 8,
    totalModules: 12,
    category: 'Manajemen',
    level: 'Pemula',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 4,
    title: 'Kepemimpinan Efektif untuk Manajer',
    description: 'Program pengembangan kepemimpinan dengan fokus pada gaya kepemimpinan dan motivasi tim.',
    duration: '7 Minggu',
    modules: 6,
    totalModules: 8,
    category: 'Kepemimpinan',
    level: 'Mahir',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 5,
    title: 'Strategi Pemasaran Digital',
    description: 'Pembelajaran tentang strategi pemasaran digital, media sosial, dan customer engagement.',
    duration: '6 Minggu',
    modules: 4,
    totalModules: 9,
    category: 'Digital',
    level: 'Menengah',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 6,
    title: 'Keuangan Koperasi',
    description: 'Pemahaman mendalam tentang pengelolaan keuangan, laporan keuangan, dan audit koperasi.',
    duration: '8 Minggu',
    modules: 7,
    totalModules: 12,
    category: 'Manajemen',
    level: 'Mahir',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 7,
    title: 'Digital Marketing Basics',
    description: 'Dasar-dasar pemasaran digital untuk pemula yang ingin memulai karir di bidang digital.',
    duration: '4 Minggu',
    modules: 2,
    totalModules: 6,
    category: 'Digital',
    level: 'Pemula',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 8,
    title: 'Customer Service Excellence',
    description: 'Pengembangan keterampilan layanan pelanggan dan manajemen hubungan pelanggan.',
    duration: '5 Minggu',
    modules: 9,
    totalModules: 11,
    category: 'Manajemen',
    level: 'Menengah',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 9,
    title: 'Leadership & Team Building',
    description: 'Program pengembangan kepemimpinan dengan fokus pada membangun dan mengelola tim yang efektif.',
    duration: '6 Minggu',
    modules: 11,
    totalModules: 12,
    category: 'Kepemimpinan',
    level: 'Menengah',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 10,
    title: 'Leadership & Team Building',
    description: 'Program pengembangan kepemimpinan dengan fokus pada membangun dan mengelola tim yang efektif.',
    duration: '6 Minggu',
    modules: 11,
    totalModules: 12,
    category: 'Kepemimpinan',
    level: 'Menengah',
    type: 'Luring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 11,
    title: 'Leadership & Team Building',
    description: 'Program pengembangan kepemimpinan dengan fokus pada membangun dan mengelola tim yang efektif.',
    duration: '6 Minggu',
    modules: 11,
    totalModules: 12,
    category: 'Kepemimpinan',
    level: 'Menengah',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
];

const CATEGORIES = [
  { value: 'kepemimpinan', label: 'Kepemimpinan' },
  { value: 'manajemen', label: 'Manajemen' },
  { value: 'digital', label: 'Digital' },
];

const LEVELS = [
  { value: 'pemula', label: 'Pemula' },
  { value: 'menengah', label: 'Menengah' },
  { value: 'mahir', label: 'Mahir' },
];

const TYPES = [
  { value: 'daring', label: 'Daring' },
  { value: 'luring', label: 'Luring' },
];

const ITEMS_PER_PAGE = 9;

const EnrolledCoursesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('all');
  const [levelValue, setLevelValue] = useState('all');
  const [typeValue, setTypeValue] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, categoryValue, levelValue, typeValue]);

  const filteredCourses = useMemo(() => {
    return MOCK_ENROLLED_COURSES.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(searchValue.toLowerCase());

      const matchesCategory =
        categoryValue === 'all' ||
        course.category.toLowerCase() === categoryValue.toLowerCase();

      const matchesLevel =
        levelValue === 'all' ||
        course.level.toLowerCase() === levelValue.toLowerCase();

      const matchesType =
        typeValue === 'all' ||
        course.type.toLowerCase() === typeValue.toLowerCase();

      return matchesSearch && matchesCategory && matchesLevel && matchesType;
    });
  }, [searchValue, categoryValue, levelValue, typeValue]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, endIndex);
  }, [filteredCourses, currentPage]);

  const handleReset = useCallback(() => {
    setSearchValue('');
    setCategoryValue('all');
    setLevelValue('all');
    setTypeValue('all');
  }, []);

  
  const handleSearch = useCallback(() => {
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative">
      <SearchBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        categoryValue={categoryValue}
        onCategoryChange={setCategoryValue}
        levelValue={levelValue}
        onLevelChange={setLevelValue}
        typeValue={typeValue}
        onTypeChange={setTypeValue}
        onReset={handleReset}
        onSearch={handleSearch}
        categories={CATEGORIES}
        levels={LEVELS}
        types={TYPES}
        disabled={isLoading}
      />

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedCourses.map((course) => (
                <EnrolledCourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <Empty
              description="Tidak ada kelas yang ditemukan"
              className="py-20"
            />
          )}

          {filteredCourses.length > ITEMS_PER_PAGE && (
            <div className="mt-8">
              <Pagination
                current={currentPage}
                total={filteredCourses.length}
                pageSize={ITEMS_PER_PAGE}
                onChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EnrolledCoursesPage;