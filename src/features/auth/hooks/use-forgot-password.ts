import type { UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { AxiosError } from 'axios';
import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { forgotPassword } from '@/services/auth.service';
import type { ErrorResponse } from '@/types/response.types';
import type { ForgotPasswordResponse } from '@/types/services/auth.types';
import { useMutation } from '@tanstack/react-query';

import type { ForgotPasswordFormData } from '../schema/forgot-password-schema';

export const useForgotPassword = ({
  setError,
}: {
  setError: UseFormSetError<ForgotPasswordFormData>;
}) => {
  const navigate = useNavigate();

  return useMutation<ForgotPasswordResponse, AxiosError<ErrorResponse>, ForgotPasswordFormData>({
    mutationFn: forgotPassword,
    onSuccess: () => {
      void navigate(ROUTES.AUTH.LOGIN, { replace: true });
    },
    onError: error => {
      setError('root', {
        message: error.message || 'Something went wrong. Please try again later.',
      });
      toast.error(`Forgot password error: ${error.message}`);
    },
  });
};
