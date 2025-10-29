'use client';

import withAuth from '@/components/hoc/withAuth';
import Sidebar from '@/components/layout/Sidebar';

/**
 * Authenticated Layout Component
 * This layout will be wrapped with authentication HOC
 * to ensure only authenticated users can access pages under /(authenticated)
 */
const AuthenticatedLayout = ({ children }) => {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
};

// Wrap the layout with authentication HOC
// This ensures that any page under /(authenticated) requires authentication
export default withAuth(AuthenticatedLayout, {
  redirectTo: '/login', // Redirect to login page if not authenticated
  requireAuth: true, // Authentication is required
});
