# Authentication HOC Implementation

This project now includes a Higher-Order Component (HOC) for authentication that protects routes and ensures only authenticated users can access certain pages.

## Files Created/Modified

### 1. Constants Files
- `src/constants/localStorage.js` - LocalStorage key constants including AUTH_TOKEN
- `src/constants/apiEndpoint.js` - API endpoint constants for authentication

### 2. Authentication HOC
- `src/components/common/withAuth.jsx` - The main HOC component with useAuth hook

### 3. Layout and Pages
- `src/app/(authenticated)/layout.js` - Authenticated layout wrapped with HOC
- `src/app/(authenticated)/dashboard/page.jsx` - Example protected page
- `src/app/login/page.jsx` - Login page for testing
- `src/app/page.jsx` - Updated home page with authentication status

## How It Works

### Authentication HOC (`withAuth`)

The HOC wraps components that require authentication:

```jsx
import withAuth from '@/components/common/withAuth';

const MyProtectedComponent = () => {
  return <div>This is a protected component</div>;
};

export default withAuth(MyProtectedComponent, {
  redirectTo: '/login',
  requireAuth: true,
});
```

### useAuth Hook

Provides authentication state and utilities:

```jsx
import { useAuth } from '@/components/common/withAuth';

const MyComponent = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};
```

### Authentication Flow

1. **Token Check**: The HOC checks for `AUTH_TOKEN` in localStorage
2. **Redirect**: If no token found and authentication is required, redirects to `/login`
3. **Loading State**: Shows loading spinner while checking authentication
4. **Render**: Only renders the wrapped component if authenticated

## Testing the Implementation

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test Authentication Flow**:
   - Visit `/` - See authentication status
   - Try to access `/dashboard` without login - Should redirect to `/login`
   - Login with any email/password (demo mode) - Should redirect to `/dashboard`
   - Access `/dashboard` - Should work when authenticated
   - Logout - Should clear token and redirect to home

## Key Features

- ✅ **Token-based Authentication**: Uses localStorage AUTH_TOKEN
- ✅ **Automatic Redirects**: Redirects unauthenticated users to login
- ✅ **Loading States**: Shows loading spinner during auth check
- ✅ **Flexible Configuration**: Customizable redirect paths and requirements
- ✅ **Hook Support**: Provides useAuth hook for components
- ✅ **SSR Compatible**: Handles server-side rendering properly
- ✅ **Error Handling**: Graceful error handling for auth failures

## Integration with Existing Code

The HOC integrates seamlessly with existing project utilities:
- Uses `getAuthToken()` from `@/lib/client`
- Uses `AUTH_TOKEN` constant from `@/constants/localStorage`
- Compatible with existing API client and error handling
- Works with Ant Design components and styling

## Customization

You can customize the HOC behavior by passing options:

```jsx
withAuth(Component, {
  redirectTo: '/custom-login',  // Custom redirect path
  requireAuth: false,          // Make authentication optional
  loadingComponent: MyLoader,  // Custom loading component
});
```
