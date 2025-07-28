import { useNavigate } from 'react-router';

import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';
import { loginUser } from '@/services/auth.service';
import type { LoginResponse } from '@/types/services/auth.types';
import { useMutation } from '@tanstack/react-query';

import type { LoginFormData } from '../schema/login-schema';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation<LoginResponse, Error, LoginFormData>({
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
      toast.error(`Login error: ${error.message}`);
    },
  });
};
