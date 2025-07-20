import { useForm } from 'react-hook-form';

import { FormErrorMessage } from '@/components/shared/form-message';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

import { type LoginFormData, loginSchema } from '../schema/login-schema';

export const LoginForm = () => {
  const form = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'all',
  });

  const errorMessage = form.formState.errors?.root?.message || '';
  const isPending = form.formState.isSubmitting;

  const onSubmit = (data: LoginFormData) => {
    console.log('Submitting login form:', data);
  };

  return (
    <Form {...form}>
      <form className='w-[50%] space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
        <p className='font-semibold'>Sign In</p>
        {/* Email Address */}
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='bg-background/20 h-10 px-4'
                  error={form.formState.errors.username?.message}
                  placeholder='Username'
                  type='username'
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
              <FormControl>
                <Input
                  error={form.formState.errors.password?.message}
                  placeholder='Password'
                  type='password'
                  {...field}
                  className='bg-background/20 h-10'
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
          className='bg-[var(--green)]'
          isLoading={isPending}
          loadingText='signing in...'
          size={'sm'}
          type='submit'
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};
