"use client";

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Clock, BookOpen, Loader2 } from 'lucide-react';
import Badge from '@/components/common/Badge';
import ProgressBar from '@/components/common/ProgressBar';

const EnrolledCourseCard = memo(({
  id,
  title,
  description,
  duration,
  modules,
  totalModules,
  category,
  level,
  image,
  href,
}) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsNavigating(true);
    const targetHref = href || `/user/learn/${id}`;
    router.push(targetHref);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
    >
      {isNavigating && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <Image
          src={image || '/images/landing-page/coder.svg'}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {category && (
            <Badge variant="solid" color="warning" size="sm">
              {category}
            </Badge>
          )}
          {level && (
            <Badge variant="solid" color="primary" size="sm">
              {level}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary/80 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          )}
          {totalModules && (
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>{totalModules} Modul</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <ProgressBar
          value={modules}
          max={totalModules}
          showLabel={true}
          size="md"
        />
      </div>
    </div>
  );
});

EnrolledCourseCard.displayName = 'EnrolledCourseCard';

EnrolledCourseCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string,
  modules: PropTypes.number.isRequired,
  totalModules: PropTypes.number.isRequired,
  category: PropTypes.string,
  level: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
};

export default EnrolledCourseCard;
