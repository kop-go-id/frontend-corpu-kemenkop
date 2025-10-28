import { AUTH_TOKEN } from "@/constants/localStorage";
import { getAuthToken } from "@/lib/client";
import { useEffect, useState } from "react";

/**
 * Hook for checking authentication status
 * @returns {Object} Authentication state and utilities
 */
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            try {
                if (typeof window === 'undefined') {
                    setIsLoading(false);
                    return;
                }

                const token = getAuthToken();
                setIsAuthenticated(!!(token && token.trim() !== ''));
            } catch (error) {
                console.error('Auth check error:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const logout = () => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(AUTH_TOKEN);
                setIsAuthenticated(false);
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return {
        isAuthenticated,
        isLoading,
        logout,
    };
};