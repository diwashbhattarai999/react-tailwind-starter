import { type SubmitHandler, useForm } from 'react-hook-form';

import z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
interface InputFormData {
  name: string;
  email: string;
  password: string;
}
const formSchema = z.object({
  name: z.string().min(5, 'name must be greater that 5 char').max(20, 'name is too long'),
  email: z.string().email('invalid email'),
  password: z.string(),
});
type formDatatype = z.infer<typeof formSchema>;
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDatatype>({ defaultValues: {}, resolver: zodResolver(formSchema) });
  const onSubmit: SubmitHandler<InputFormData> = () => {}; //get data in arrow function
  return (
    <div className='flex items-center justify-center'>
      <form
        className='flex w-fit flex-col items-center justify-center rounded-md border-2 px-5 py-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor='name'>Name</label>
        {errors.name && <div className='text-red-500'>{errors.name.message} </div>}
        <input
          className='border'
          type='text'
          {...register('name', { required: { message: 'email is required', value: true } })}
        />
        <label htmlFor='email'>Email</label>
        {errors.email && <div className='text-red-500'>{errors.email.message} </div>}

        <input className='border' type='text' {...register('email')} />
        <label htmlFor='name'>Password</label>
        {errors.password && <div className='text-red-500'>{errors.password.message} </div>}

        <input className='border' type='password' {...register('password')} />
        <button>submit</button>
      </form>
    </div>
  );
}
