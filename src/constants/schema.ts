import * as z from 'zod'
import validatePassword from '../utils/validatePassword'

export const profileSchema = z.object({
  name: z.string().min(4, 'Full name is required!'),
  email: z.string().email('Correct email address is required!'),
  password: z
    .string()
    .refine(
      validatePassword,
      'Password must be 6-18 in length with at least 1 special character, number and alphabet'
    ),
  signature: z
    .instanceof(FileList, { message: 'No file selected' })
    .refine((file) => file?.length == 1, 'File is required.')
})

export type TProfileSchema = z.infer<typeof profileSchema>
