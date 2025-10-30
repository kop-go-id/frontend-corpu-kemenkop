'use client';

import React from 'react';

const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 0.1s linear infinite;
  }
`;

const LoadingAnimation = ({ message = "Memuat..." }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <style>{styles}</style>
            <div className="text-center">
                {/* Spinning loader */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="w-16 h-16 border-4 border-gray-200 border-t-dark-primary rounded-full animate-spin"></div>
                    {/* Inner spinning circle */}
                    <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-alt-secondary rounded-full animate-spin-slow"></div>
                </div>
                
                {/* Loading text */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-700">{message}</h3>
                    <p className="text-sm text-gray-500">Mohon tunggu sebentar...</p>
                </div>
                
                {/* Animated dots */}
                <div className="flex justify-center mt-4 space-x-1">
                    <div className="w-2 h-2 bg-dark-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-dark-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-dark-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
