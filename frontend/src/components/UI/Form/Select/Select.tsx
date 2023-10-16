import React from 'react'
import styles from './Select.module.scss'
import classNames from 'classnames/bind'
import RCSelect, { type SelectProps as RCSelectProps } from 'rc-select'
import { ArrowDown } from '@/UI/Icon/Common'
import type { DefaultOptionType } from 'rc-select/lib/Select'

const cx = classNames.bind(styles)

export interface OptionItem extends Required<Omit<DefaultOptionType, 'children'>> {}

export type SelectProps = Omit<RCSelectProps<string | number>, 'children'> & {
  options: OptionItem[]
  placeholder: string
  onChange: Required<RCSelectProps['onChange']>
}

const Select: React.FC<SelectProps> = ({ value, options, placeholder, onChange, ...rest }): JSX.Element => {
  return (
    <RCSelect
      onChange={onChange}
      className={cx('select', rest.className)}
      value={value}
      options={options}
      placeholder={placeholder}
      dropdownClassName={cx('select__dropdown', rest.dropdownClassName)}
      suffixIcon={<ArrowDown />}
      {...rest}
    />
  )
}

export default Select
