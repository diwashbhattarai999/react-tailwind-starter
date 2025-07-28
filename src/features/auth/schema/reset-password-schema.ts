import * as z from 'zod';

export const resetPasswordSchema = z.object({
  token: z.string().min(1, { message: 'Token is required' }),
  newPassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
