import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ContainerSize = 'default'
export type ContainerPosition = 'default' | 'start' | 'center'

export type ContainerProps = Required<React.PropsWithChildren> & {
  className?: string
  size?: ContainerSize
  position?: ContainerPosition
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = 'default',
  position = 'default',
}): JSX.Element => {
  return (
    <div className={cx('container', `container_position_${position}`, className)}>
      <div className={cx('container__children', `container__children_${size}`)}>{children}</div>
    </div>
  )
}

export default Container
