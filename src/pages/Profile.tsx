import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TProfileSchema, profileSchema } from '../constants/schema'
import { Input } from '../components/shared/Input'

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema)
  })

  return (
    <div className='mx-auto max-w-2xl px-4 py-10 bg-white rounded-lg shadow-xl'>
      <form
        className='grid gap-8'
        onSubmit={handleSubmit((data) => console.log('data', data))}
      >
        <div>
          <Input
            label='Your name'
            name='name'
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            label='Your Email'
            name='email'
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            label='Password'
            name='password'
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            label='Your Signature'
            name='signature'
            type='file'
            register={register}
            errors={errors}
          />
        </div>
        <input
          className='py-2 rounded-lg bg-indigo-500 shadow-lg text-white cursor-pointer'
          type='submit'
          value='Update data'
        />
      </form>
    </div>
  )
}
