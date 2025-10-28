import { api } from '@/lib/client';
import {
  LOGIN_PATH,
  LOGOUT_PATH,
  REFRESH_TOKEN_PATH,
} from '@/constants/apiEndpoint';
import { mapPayload } from '@/lib/helper';

/**
 * Handles user login authentication
 * @param {Object} payload - The login credentials
 * @param {string} payload.captcha - The captcha verification code
 * @param {string} payload.email - User's email address
 * @param {string} payload.password - User's password
 * @returns {Promise<Object>} Response data from login API
 * @throws {Error} If login request fails
 */
export const login = async (payload) => {
  const { body } = mapPayload(payload);
  try {
    const response = await api.post(LOGIN_PATH, body, { withDecrypt: true });
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Handles user logout authentication
 * @returns {Promise<Object>} Response data from logout API
 * @throws {Error} If logout request fails
 */
export const logout = async () => {
  try {
    const response = await api.post(LOGOUT_PATH);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Handles user refresh token authentication
 * @returns {Promise<Object>} Response data from refresh API
 * @throws {Error} If refresh request fails
 */
export const refresh = async () => {
  try {
    const response = await api.post(REFRESH_TOKEN_PATH);
    return response;
  } catch (error) {
    throw error;
  }
};
