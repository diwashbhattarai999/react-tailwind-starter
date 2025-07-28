import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import { UserPlus } from 'lucide-react';

import { FormErrorMessage } from '@/components/shared/form-message';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/configs/routes';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRegister } from '../hooks/use-register';
import { type RegisterFormData, registerSchema } from '../schema/register-schema';

export const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
  });

  const { mutate: registerUser, isPending } = useRegister({ setError: form.setError });

  const errorMessage = form.formState.errors?.root?.message || '';

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data);
  };

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        {/* First Name & Last Name */}
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mb-1'>First Name</FormLabel>
                <FormControl>
                  <Input
                    className='bg-background/20 h-14 rounded-full px-4'
                    error={form.formState.errors.firstName?.message}
                    placeholder='John'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mb-1'>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className='bg-background/20 h-14 rounded-full px-4'
                    error={form.formState.errors.lastName?.message}
                    placeholder='Doe'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email Address */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>Email Address</FormLabel>
              <FormControl>
                <Input
                  className='bg-background/20 h-14 rounded-full px-4'
                  error={form.formState.errors.email?.message}
                  placeholder='e.g. johndoe2025@gmail.com'
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>Password</FormLabel>
              <FormControl>
                <Input
                  error={form.formState.errors.password?.message}
                  placeholder='**********'
                  type='password'
                  {...field}
                  className='bg-background/20 h-14 rounded-full px-4'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  error={form.formState.errors.confirmPassword?.message}
                  placeholder='**********'
                  type='password'
                  {...field}
                  className='bg-background/20 h-14 rounded-full px-4'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error Message */}
        <FormErrorMessage error={errorMessage} />

        {/* Submit Button */}
        <Button
          className='h-14 w-full gap-4 rounded-full'
          isLoading={isPending}
          loadingText='Creating account...'
          type='submit'
        >
          <UserPlus />
          Create Account
        </Button>

        {/* Login Link */}
        <div className='text-center'>
          <p className='text-foreground/70 text-sm'>
            Already have an account?{' '}
            <Link className='text-primary font-semibold hover:underline' to={ROUTES.AUTH.LOGIN}>
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};
