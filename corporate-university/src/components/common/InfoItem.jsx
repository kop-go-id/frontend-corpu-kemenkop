import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({ icon, label, value, className = '' }) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex-shrink-0 text-white/90">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white/70 text-xs font-normal">{label}</span>
        <span className="text-white text-sm font-medium">{value}</span>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export default InfoItem;

