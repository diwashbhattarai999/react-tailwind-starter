import type { ForgotPasswordFormData } from '@/features/auth/schema/forgot-password-schema';
import type { LoginFormData } from '@/features/auth/schema/login-schema';
import type { RegisterFormData } from '@/features/auth/schema/register-schema';
import type { ResetPasswordFormData } from '@/features/auth/schema/reset-password-schema';
import { apiClient } from '@/lib/api-client';
import type {
  ForgotPasswordResponse,
  LoginResponse,
  RegisterResponse,
  ResetPasswordResponse,
} from '@/types/services/auth.types';

/**
 * Registers a new user.
 *
 * This function sends a POST request to the `/auth/register` endpoint with the provided payload.
 * It returns a promise that resolves to the response data.
 */
export const registerUser = async (payload: RegisterFormData): Promise<RegisterResponse> => {
  const response = await apiClient.post('/auth/register', payload);
  return response.data;
};

/**
 * Logs in a user.
 *
 * This function sends a POST request to the `/auth/login` endpoint with the provided payload.
 * It returns a promise that resolves to the response data.
 */
export const loginUser = async (payload: LoginFormData): Promise<LoginResponse> => {
  const response = await apiClient.post('/auth/login', payload);
  return response.data;
};

/**
 * Sends a password reset request.
 *
 * This function sends a POST request to the `/auth/forgot-password` endpoint with the provided payload.
 * It returns a promise that resolves to the response data.
 */
export const forgotPassword = async (
  payload: ForgotPasswordFormData
): Promise<ForgotPasswordResponse> => {
  const response = await apiClient.post('/auth/forgot-password', payload);
  return response.data;
};

/**
 * Resets the user's password.
 *
 * This function sends a POST request to the `/auth/reset-password` endpoint with the provided payload.
 * It returns a promise that resolves to the response data.
 */
export const resetPassword = async (
  payload: ResetPasswordFormData
): Promise<ResetPasswordResponse> => {
  const response = await apiClient.post('/auth/reset-password', payload);
  return response.data;
};
