import React from 'react';
import PropTypes from 'prop-types';

const ChecklistItem = ({ text, className = '' }) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-6 h-6 rounded-full bg-[#a0ba3b] flex items-center justify-center">
          <svg 
            width="14" 
            height="11" 
            viewBox="0 0 14 11" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 5.5L5 9.5L13 1.5" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed flex-1">
        {text}
      </p>
    </div>
  );
};

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ChecklistItem;

