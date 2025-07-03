import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
