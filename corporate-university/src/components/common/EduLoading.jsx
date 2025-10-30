'use client';

import React from 'react';

const EduLoading = ({ message = 'Memuat...' }) => {
  return (
    <div className="inline-flex flex-col items-center">
      <div className="relative">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
          role="img"
          aria-label="Loading"
        >
          {/* Mortarboard (uses theme primary via currentColor) */}
          <g className="text-primary" fill="currentColor">
            <path d="M48 14L10 30l38 16 38-16-38-16z" />
          </g>
          {/* Board thickness shade (primary at lower opacity) */}
          <g className="text-primary" fill="currentColor" opacity="0.25">
            <path d="M26 40l22 9 22-9v8L48 56 26 48v-8z" />
          </g>
          {/* Tassel (uses theme secondary) */}
          <g className="text-secondary" stroke="currentColor" fill="currentColor">
            <path d="M58 34c0 10 0 16 10 22" strokeWidth="3" strokeLinecap="round" />
            <circle cx="58" cy="34" r="3" />
            <circle cx="68" cy="56" r="5" className="tassel" />
          </g>
        </svg>
        {/* Soft shadow */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2 w-16 rounded-full bg-slate-300 opacity-60 blur-sm animate-pulse" />
      </div>
      <p className="mt-4 text-slate-600">{message}</p>
      <style jsx>{`
        .tassel { transform-origin: 68px 56px; animation: swing 1.6s ease-in-out infinite; }
        @keyframes swing {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
      `}</style>
    </div>
  );
};

export default EduLoading;


