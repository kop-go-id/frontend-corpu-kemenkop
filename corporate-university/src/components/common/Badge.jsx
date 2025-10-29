import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ 
  children, 
  variant = 'solid', 
  color = 'primary',
  size = 'md',
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full whitespace-nowrap';
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  const variantStyles = {
    solid: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      success: 'bg-alt-secondary text-white',
      warning: 'bg-[#E5A80E] text-white',
    },
    outline: {
      primary: 'border-2 border-white text-white bg-transparent',
      secondary: 'border-2 border-secondary text-secondary bg-transparent',
      success: 'border-2 border-alt-secondary text-alt-secondary bg-transparent',
      warning: 'border-2 border-[#E5A80E] text-[#E5A80E] bg-transparent',
    },
    light: {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      success: 'bg-alt-secondary/10 text-alt-secondary',
      warning: 'bg-[#E5A80E]/10 text-[#E5A80E]',
    }
  };

  const computedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant][color]} ${className}`;

  return (
    <span className={computedStyles}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline', 'light']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Badge;

