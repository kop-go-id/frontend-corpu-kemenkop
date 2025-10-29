import React from 'react';
import PropTypes from 'prop-types';

const CurriculumItem = ({ number, title, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white text-sm font-semibold">{number}</span>
        </div>
      </div>
      <p className="text-gray-700 text-base flex-1">
        {title}
      </p>
    </div>
  );
};

CurriculumItem.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CurriculumItem;

