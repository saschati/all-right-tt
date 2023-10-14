import React from 'react'
import styles from './Tag.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type TagProps = {
  className?: string
  icon: string
  name: string
}

const Tag: React.FC<TagProps> = ({ className, icon, name }): JSX.Element => {
  return (
    <div className={cx('tag', className)}>
      <img className={cx('tag__icon')} src={icon} alt={name} />
      <Text>{name}</Text>
    </div>
  )
}

export default Tag
