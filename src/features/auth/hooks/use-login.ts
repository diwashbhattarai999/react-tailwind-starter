import type { UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { AxiosError } from 'axios';
import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';
import { loginUser } from '@/services/auth.service';
import type { ErrorResponse } from '@/types/response.types';
import type { LoginResponse } from '@/types/services/auth.types';
import { useMutation } from '@tanstack/react-query';

import type { LoginFormData } from '../schema/login-schema';

export const useLogin = ({ setError }: { setError: UseFormSetError<LoginFormData> }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginFormData>({
    mutationFn: loginUser,
    onSuccess: data => {
      if (data.data?.accessToken && data.data?.user) {
        login(data.data.user, data.data.accessToken);
        void navigate(ROUTES.DASHBOARD.BASE, { replace: true });
      } else {
        throw new Error('Login failed: Invalid response data');
      }
    },
    onError: error => {
      setError('root', {
        message: error.response?.data.message || 'Something went wrong. Please try again later.',
      });
      toast.error(`Login error: ${error.message}`);
    },
  });
};
