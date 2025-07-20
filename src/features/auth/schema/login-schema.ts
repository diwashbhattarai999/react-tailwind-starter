import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
