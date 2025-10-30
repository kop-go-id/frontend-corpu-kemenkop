import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max = 100, showLabel = true, size = 'md' }) => {
  const percentage = (value / max) * 100;

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div>
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className="bg-gradient-to-r from-secondary to-alt-tertiary rounded-full transition-all duration-300 h-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-600">
            Modul {value} dari {max}
          </span>
          <span className="text-xs font-semibold text-primary">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  showLabel: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default ProgressBar;
