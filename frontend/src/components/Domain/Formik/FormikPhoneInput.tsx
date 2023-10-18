import { PhoneInput, type PhoneInputProps } from '@/UI/Form/Input'
import { useField } from 'formik'
import React, { useCallback } from 'react'

export type FormikPhoneInputProps = Omit<PhoneInputProps, 'onChange'> & {
  name: string
}

const FormikPhoneInput: React.FC<FormikPhoneInputProps> = ({ name, ...rest }): JSX.Element => {
  const [, meta, helpers] = useField(name)

  const errorMessage = (meta.touched && meta.error) || undefined

  const handleChange = useCallback(
    (value: string) => {
      helpers.setValue(value)
    },
    [helpers],
  )

  if (errorMessage) {
    // TODO: WIP
  }

  return <PhoneInput value={meta.value as string} onChange={handleChange} {...rest} />
}

export default FormikPhoneInput
