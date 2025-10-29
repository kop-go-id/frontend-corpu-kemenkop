'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { Skeleton } from 'antd';
import { useAuth } from '@/hooks/auth';
import InfoItem from '@/components/common/InfoItem';
import { ClockCircleOutlined, BookOutlined, UserOutlined, TeamOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const CourseHero = ({ course, onEnroll }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <section className="bg-primary text-white py-6 lg:py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeftOutlined className="text-base" />
          <span className="text-sm font-medium">Kembali</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {course.badges?.map((badge, index) => (
                <Badge 
                  key={index}
                  variant={badge.variant || 'solid'}
                  color={badge.color || 'warning'}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
              {course.title}
            </h1>

            {/* Description */}
            <p className="text-sm lg:text-base text-white/90 leading-relaxed">
              {course.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <InfoItem
                icon={<ClockCircleOutlined className="text-xl" />}
                label="Durasi"
                value={course.duration}
              />
              <InfoItem
                icon={<BookOutlined className="text-xl" />}
                label="Modul"
                value={course.moduleCount}
              />
              <InfoItem
                icon={<UserOutlined className="text-xl" />}
                label="Instruktur"
                value={course.instructor}
              />
              <InfoItem
                icon={<TeamOutlined className="text-xl" />}
                label="Pembelajar"
                value={course.learners?.toLocaleString('id-ID')}
              />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              {isLoading ? (
                <Skeleton.Button
                  active
                  className="!w-28 !h-10 !rounded-md !bg-white/30"
                />
              ) : (
                isAuthenticated ? (
                  <Button 
                    size="md" 
                    onClick={onEnroll}
                    className="shadow-xl hover:shadow-2xl"
                  >
                    Enroll Kelas
                  </Button>
                ) : (
                  <Button
                    size="md"
                    onClick={() => router.push('/login')}
                    className="shadow-xl hover:shadow-2xl"
                  >
                    Bergabung Sekarang!
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CourseHero.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    moduleCount: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    learners: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      variant: PropTypes.string,
      color: PropTypes.string,
    })),
  }).isRequired,
  onEnroll: PropTypes.func,
};

export default CourseHero;

