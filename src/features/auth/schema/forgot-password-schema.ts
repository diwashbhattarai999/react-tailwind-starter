import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
