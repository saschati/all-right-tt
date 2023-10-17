import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styles from './PhoneInput.module.scss'
import classNames from 'classnames/bind'
import {
  defaultCountries,
  FlagEmoji,
  parseCountry,
  usePhoneInput,
  type PhoneInputProps as RIPPhoneInputProps,
  CountryIso2,
} from 'react-international-phone'
import { Triangle } from '@/UI/Icon/Common'
import { useClickOutside } from '@/hooks/useClickOutside'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type PhoneInputHandle = {
  focus: () => void
}

export type PhoneInputProps = {
  className?: string
  value?: string
  defaultCountry?: RIPPhoneInputProps['defaultCountry']
  placeholder?: string
  onChange: (
    value: string,
    data: {
      phone: string
      country: CountryIso2
    },
  ) => void
}

const PhoneInput: React.FC<PhoneInputProps> = React.forwardRef<PhoneInputHandle, PhoneInputProps>(
  ({ className, value, onChange, placeholder, defaultCountry = 'ua' }, ref): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleDropdownToggle = () => setIsOpen((prevIsOpen) => !prevIsOpen)
    const handleFocus = () => {
      setIsFocused(true)
      setIsOpen(false)
    }
    const handleBlur = () => setIsFocused(false)

    const { phone, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
      defaultCountry,
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone, data)
      },
    })

    const inputHandler = () => ({
      focus: () => inputRef.current?.focus(),
    })

    useImperativeHandle(ref, inputHandler, [inputRef])
    useClickOutside(
      containerRef,
      useCallback(() => {
        setIsOpen(false)
      }, []),
    )

    const countriesComp = useMemo(() => {
      return defaultCountries.map((c) => {
        const item = parseCountry(c)
        const active = country === item.iso2 ? 'phone__dropdown-item--active' : null

        return (
          <div key={item.iso2} className={cx('phone__dropdown-item', active)} onClick={() => setCountry(item.iso2)}>
            <FlagEmoji className={cx('phone__flag')} iso2={item.iso2} />
            <Text size="small">{item.name}</Text>
            <Text className={cx('phone__dropdown-code')} size="small">
              +{item.dialCode}
            </Text>
          </div>
        )
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country])

    const classes: string[] = []
    if (isFocused) {
      classes.push('phone--active')
    }

    return (
      <div ref={containerRef} className={cx('phone', ...classes, className)}>
        <div className={cx('phone__country-button', 'cursor-pointer')} onClick={handleDropdownToggle}>
          <div className={cx('phone__icon')}>
            <FlagEmoji className={cx('phone__flag')} iso2={country} />
            <Triangle />
          </div>
        </div>
        <input
          ref={inputRef}
          className={cx('phone__handler')}
          value={phone}
          type="text"
          placeholder={placeholder}
          onChange={handlePhoneValueChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isOpen && <div className={cx('phone__dropdown', 'cursor-pointer')}>{countriesComp}</div>}
      </div>
    )
  },
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
