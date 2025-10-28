import { AUTH_TOKEN } from '@/constants/localStorage';
import { decryptResponse } from '@/utils/decrypt';
import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
});

// Request interceptor for adding auth tokens, logging, etc.
apiClient.interceptors.request.use(
  (config) => {
    // Check if this is a public API call (no auth required)
    const isPublic = config.public || config.headers?.public === 'true';

    // Add auth token only if not public and token is available
    if (!isPublic) {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem(AUTH_TOKEN) : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`,
        {
          data: config.data,
          params: config.params,
        }
      );
    }

    return config;
  },
  (error) => {
    // console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses and errors
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `✅ API Response: ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`,
        {
          status: response.status,
          data: response.data,
        }
      );
    }

    return response;
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      // console.error(`❌ API Error ${status}:`, {
      //   url: error.config?.url,
      //   method: error.config?.method?.toUpperCase(),
      //   message: data?.message || error.message,
      //   data: data,
      // });

      // Handle specific status codes
      switch (status) {
        case 401:
          // Unauthorized - clear auth token and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem(AUTH_TOKEN);
            window.location.href = '/login';
          }
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
        default:
          console.error('API Error:', data?.message || error.message);
      }
    } else if (error.request) {
      // Network error
      console.error('❌ Network Error:', error.message);
    } else {
      // Other error
      console.error('❌ Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// API Methods
export const api = {
  // GET request
  get: async (url, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.get(url, restConfig);
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // POST request
  post: async (url, data = {}, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.post(url, data, restConfig);
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      // Handle case where response exists but data might be undefined
      return response.data || {};
    } catch (error) {
      // If it's a server error (500), return empty object to prevent crashes
      if (error.response?.status === 500) {
        console.error('Server error in POST request:', error.message);
      }
      throw error;
    }
  },

  // PUT request
  put: async (url, data = {}, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.put(url, data, restConfig);
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PATCH request
  patch: async (url, data = {}, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.patch(url, data, restConfig);
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // DELETE request
  delete: async (url, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.delete(url, restConfig);
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Upload file
  upload: async (url, formData, config = {}) => {
    try {
      const { withDecrypt, ...restConfig } = config;
      const response = await apiClient.post(url, formData, {
        ...restConfig,
        headers: {
          ...restConfig.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (withDecrypt && response.data?.data) {
        const decryptedData = decryptResponse(response.data.data);
        return {
          ...response.data,
          data: decryptedData,
        };
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Download file
  download: async (url, config = {}) => {
    try {
      const response = await apiClient.get(url, {
        ...config,
        responseType: 'blob',
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

// Utility functions
export const setAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
};

export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_TOKEN);
  }
  return null;
};

// Export the axios instance for direct use if needed
export default apiClient;
