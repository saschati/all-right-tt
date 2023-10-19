import Select, { SelectProps } from '@/UI/Form/Select'
import { useField } from 'formik'
import { DefaultOptionType } from 'rc-select/lib/Select'
import React, { useCallback } from 'react'

export type FormikSelectProps = Omit<SelectProps, 'onChange'> & {
  name: string
  onChange?: SelectProps['onChange']
}

const FormikSelect: React.FC<FormikSelectProps> = ({ name, onChange, ...rest }): JSX.Element => {
  const [, meta, helpers] = useField(name)

  const errorMessage = (meta.touched && meta.error) || undefined

  const handleChange = useCallback(
    (value: string | number, option: DefaultOptionType | DefaultOptionType[]) => {
      helpers.setValue(value)
      onChange && onChange(value, option)
    },
    [helpers, onChange],
  )

  if (errorMessage) {
    // TODO: WIP
  }

  return <Select value={meta.value as string} onChange={handleChange} {...rest} />
}

export default FormikSelect
