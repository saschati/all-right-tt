import Select, { SelectProps } from '@/UI/Form/Select'
import { useField } from 'formik'
import React, { useCallback } from 'react'

export type FormikSelectProps = Omit<SelectProps, 'onChange'> & {
  name: string
}

const FormikSelect: React.FC<FormikSelectProps> = ({ name, ...rest }): JSX.Element => {
  const [, meta, helpers] = useField(name)

  const errorMessage = (meta.touched && meta.error) || undefined

  const handleChange = useCallback(
    (value: string | number) => {
      helpers.setValue(value)
    },
    [helpers],
  )

  if (errorMessage) {
    // TODO: WIP
  }

  return <Select value={meta.value as string} onChange={handleChange} {...rest} />
}

export default FormikSelect
