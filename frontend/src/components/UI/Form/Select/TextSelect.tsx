import React, { useCallback, useMemo, useRef, useState } from 'react'
import styles from './TextSelect.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import { Pen } from '@/UI/Icon/Common'
import { useClickOutside } from '@/hooks/useClickOutside'
import Hr from '@/UI/Hr'

const cx = classNames.bind(styles)

export type ValueType = string | number

export interface OptionType {
  label: string
  value: ValueType
}

export type PreviewProps = {
  preview?: string
  value: ValueType
}

export type ValueProps = {
  preview?: never
  value?: ValueType
}

export type TextSelectProps = (PreviewProps | ValueProps) & {
  className?: string
  placeholder: string
  onSelect: (value: ValueType, option: OptionType) => void
  options: OptionType[]
}

const TextSelect: React.FC<TextSelectProps> = ({
  className,
  preview,
  value,
  options,
  onSelect,
  placeholder,
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdownToggle = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), [])

  const previewValue = useMemo(() => {
    if (preview) {
      return preview
    }

    if (value === undefined) {
      return null
    }

    return options.find((option) => option.value === value)?.label || value
  }, [preview, value, options])

  const optionsComp = useMemo(() => {
    return options.map((option) => {
      const active = option.value === value ? 'textSelect__option--active' : null

      return (
        <div
          key={option.value}
          className={cx('textSelect__option', active)}
          onClick={() => onSelect(option.value, option)}
        >
          {option.label}
        </div>
      )
    })
  }, [options, onSelect, value])

  useClickOutside(
    ref,
    useCallback(() => setIsOpen(false), []),
  )

  return (
    <div ref={ref} className={cx('textSelect', 'cursor-pointer', className)} onClick={handleDropdownToggle}>
      <div className={cx('textSelect__selector')}>
        <Text className={cx('textSelect__preview')} size="small">
          {previewValue || placeholder}
        </Text>
        <div className={cx('textSelect__icon')}>
          <Pen />
        </div>
      </div>
      {isOpen && (
        <div className={cx('textSelect__dropdown')}>
          <Hr />
          {optionsComp}
        </div>
      )}
    </div>
  )
}

export default TextSelect
