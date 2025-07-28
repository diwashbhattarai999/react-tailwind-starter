import { useNavigate } from 'react-router';

import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { registerUser } from '@/services/auth.service';
import type { RegisterResponse } from '@/types/services/auth.types';
import { useMutation } from '@tanstack/react-query';

import type { RegisterFormData } from '../schema/register-schema';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, RegisterFormData>({
    mutationFn: registerUser,
    onSuccess: () => {
      void navigate(ROUTES.AUTH.LOGIN, { replace: true });
    },
    onError: error => {
      toast.error(`Registration failed: ${error.message}`);
    },
  });
};
