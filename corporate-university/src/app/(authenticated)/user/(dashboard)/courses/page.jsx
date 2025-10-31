"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Empty, Spin } from 'antd';
import { CourseCard, SearchBar, Pagination } from '@/components/common';

const MOCK_COURSES = [
  {
    id: 1,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Kepemimpinan',
    level: 'Mahir',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 2,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Manajemen',
    level: 'Menengah',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 3,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 4,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Kepemimpinan',
    level: 'Mahir',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 5,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Manajemen',
    level: 'Menengah',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 6,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 7,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Kepemimpinan',
    level: 'Mahir',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 8,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Manajemen',
    level: 'Menengah',
    type: 'Luring',
    image: '/images/landing-page/rocket.svg',
  },
  {
    id: 9,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 10,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Luring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 11,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Daring',
    image: '/images/landing-page/coder.svg',
  },
  {
    id: 12,
    title: 'Digital Cooperative Leadership Program (DCLP)',
    description: 'Program kepemimpinan digital untuk transformasi koperasi modern',
    duration: '8 Minggu',
    modules: 12,
    category: 'Digital',
    level: 'Pemula',
    type: 'Luring',
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

const CoursesPage = () => {
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
    return MOCK_COURSES.filter((course) => {
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
                <CourseCard key={course.id} {...course} />
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

export default CoursesPage;