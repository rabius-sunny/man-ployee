import { InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'
import { Form } from 'react-bootstrap'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: string
  name: string
  placeholder?: string
  register: any
  errors?: FieldErrors
}

export const Input = ({
  type,
  name,
  label,
  placeholder,
  register,
  errors
}: FormInputProps) => {
  return (
    <>
      <label
        className='block font-medium mb-1'
        htmlFor={name}
      >
        {label}
      </label>
      <Form.Control
        className='w-full px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500'
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        isInvalid={errors && errors[name] ? true : false}
        {...register(name)}
      ></Form.Control>

      {errors && errors[name] ? (
        <Form.Control.Feedback
          type='invalid'
          className='text-red-500 text-sm mt-1'
        >
          {errors[name]?.message as string}
        </Form.Control.Feedback>
      ) : null}
    </>
  )
}
