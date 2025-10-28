// Validation utilities
export const validators = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Minimum length is ${min} characters`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `Maximum length is ${max} characters`;
    }
    return null;
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },

  phone: (value) => {
    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
    if (value && !phoneRegex.test(value)) {
      return 'Please enter a valid phone number';
    }
    return null;
  },

  numeric: (value) => {
    if (value && isNaN(value)) {
      return 'Please enter a valid number';
    }
    return null;
  },

  min: (min) => (value) => {
    if (value && parseFloat(value) < min) {
      return `Value must be at least ${min}`;
    }
    return null;
  },

  max: (max) => (value) => {
    if (value && parseFloat(value) > max) {
      return `Value must be at most ${max}`;
    }
    return null;
  },
};

// Validate form data
export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field];
    const value = data[field];
    
    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
