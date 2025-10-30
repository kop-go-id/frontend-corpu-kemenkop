import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  className = '',
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const hasPrev = current > 1;
  const hasNext = current < totalPages;

  const handlePrev = () => {
    if (hasPrev) onChange(current - 1);
  };

  const handleNext = () => {
    if (hasNext) onChange(current + 1);
  };

  // Generate page numbers with smart pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3; // Show 3 pages
    
    if (totalPages <= maxVisible + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination
      if (current <= maxVisible) {
        // Near the start
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (current >= totalPages - maxVisible + 1) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(1);
        pages.push('...');
        pages.push(current);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex justify-end items-center gap-2 ${className}`}>
      {/* Sebelumnya Button */}
      <button
        onClick={handlePrev}
        disabled={!hasPrev}
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
          hasPrev
            ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 active:bg-gray-100'
            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Sebelumnya</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => (
          page === '...' ? (
            <div
              key={`ellipsis-${index}`}
              className="flex items-center justify-center w-10 h-10 text-gray-500 font-medium"
            >
              ...
            </div>
          ) : (
            <button
              key={page}
              onClick={() => onChange(page)}
              className={`flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-lg transition-colors ${
                current === page
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>

      {/* Selanjutnya Button */}
      <button
        onClick={handleNext}
        disabled={!hasNext}
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
          hasNext
            ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 active:bg-gray-100'
            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
        }`}
      >
        <span>Selanjutnya</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;





