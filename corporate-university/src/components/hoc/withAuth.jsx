'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken } from '@/lib/client';
import EduLoading from '@/components/common/EduLoading';

/**
 * Higher-Order Component for authentication
 * Wraps components that require user authentication
 * 
 * @param {React.Component} WrappedComponent - The component to wrap
 * @param {Object} options - Configuration options
 * @param {string} options.redirectTo - Path to redirect to if not authenticated (default: '/login')
 * @param {React.Component} options.loadingComponent - Custom loading component
 * @param {boolean} options.requireAuth - Whether authentication is required (default: true)
 * @returns {React.Component} Authenticated component
 */
const withAuth = (WrappedComponent, options = {}) => {
  const {
    redirectTo = '/login',
    loadingComponent: LoadingComponent,
    requireAuth = true,
  } = options;

  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuthentication = () => {
        try {
          // Check if we're on the client side
          if (typeof window === 'undefined') {
            setIsLoading(false);
            return;
          }

          // Get the auth token from localStorage
          const token = getAuthToken();
          
          if (requireAuth) {
            // If authentication is required, check if token exists
            if (token && token.trim() !== '') {
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
              // Redirect to login page
              router.push(redirectTo);
            }
          } else {
            // If authentication is not required, just set authenticated to true
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error('Authentication check error:', error);
          if (requireAuth) {
            setIsAuthenticated(false);
            router.push(redirectTo);
          } else {
            setIsAuthenticated(true);
          }
        } finally {
          setIsLoading(false);
        }
      };

      checkAuthentication();
    }, [router, redirectTo, requireAuth]);

    // Show loading state while checking authentication
    if (isLoading) {
      if (LoadingComponent) {
        return <LoadingComponent />;
      }
      
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <EduLoading message="Memuat..." />
          </div>
        </div>
      );
    }

    // If authentication is required but user is not authenticated, don't render
    if (requireAuth && !isAuthenticated) {
      return null;
    }

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };

  // Set display name for debugging
  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default withAuth;
