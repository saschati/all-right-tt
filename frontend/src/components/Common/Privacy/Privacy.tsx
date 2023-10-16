import React from 'react'
import styles from './Privacy.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import { ShieldLock } from '@/UI/Icon/Common'

const cx = classNames.bind(styles)

export type PrivacyProps = {
  className?: string
  text: string
}

const Privacy: React.FC<PrivacyProps> = ({ className, text }): JSX.Element => {
  return (
    <div className={cx('privacy', className)}>
      <div className={cx('privacy__icon')}>
        <ShieldLock />
      </div>
      <Text className={cx('privacy__text')} size="very-small">
        {text}
      </Text>
    </div>
  )
}

export default Privacy
