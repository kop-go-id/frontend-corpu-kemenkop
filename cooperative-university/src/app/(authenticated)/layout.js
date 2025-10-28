'use client';

import withAuth from '@/components/common/withAuth';

/**
 * Authenticated Layout Component
 * This layout will be wrapped with authentication HOC
 * to ensure only authenticated users can access pages under /(authenticated)
 */
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="authenticated-layout">
      {/* You can add common authenticated layout elements here */}
      {/* Such as: Header, Sidebar, Navigation, etc. */}
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

// Wrap the layout with authentication HOC
// This ensures that any page under /(authenticated) requires authentication
export default withAuth(AuthenticatedLayout, {
  redirectTo: '/login', // Redirect to login page if not authenticated
  requireAuth: true, // Authentication is required
});
