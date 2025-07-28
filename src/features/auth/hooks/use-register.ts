import type { UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { AxiosError } from 'axios';
import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { registerUser } from '@/services/auth.service';
import type { ErrorResponse } from '@/types/response.types';
import type { RegisterResponse } from '@/types/services/auth.types';
import { useMutation } from '@tanstack/react-query';

import type { RegisterFormData } from '../schema/register-schema';

export const useRegister = ({ setError }: { setError: UseFormSetError<RegisterFormData> }) => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, AxiosError<ErrorResponse>, RegisterFormData>({
    mutationFn: registerUser,
    onSuccess: () => {
      void navigate(ROUTES.AUTH.LOGIN, { replace: true });
    },
    onError: error => {
      setError('root', {
        message: error.message || 'Something went wrong. Please try again later.',
      });
      toast.error(`Registration failed: ${error.message}`);
    },
  });
};
