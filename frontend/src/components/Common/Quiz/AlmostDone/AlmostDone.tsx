import React, { memo } from 'react'
import styles from './AlmostDone.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import mascot from '@/assets/img/quiz/charlie.svg'
import Button, { type ButtonProps } from '@/UI/Button'

const cx = classNames.bind(styles)

export type AlmostDoneProps = {
  className?: string
  title: string
  description: string
  button: ButtonProps
}

const AlmostDone = memo<AlmostDoneProps>(({ className, title, description, button }): JSX.Element => {
  return (
    <div className={cx('almostDone', className)}>
      <Text size="medium">{title}</Text>
      <div className={cx('almostDone__preview')}>
        <img src={mascot} alt="Mascot" />
      </div>
      <Text className={cx('almostDone__desc')} position="center">
        {description}
      </Text>
      <Button {...button} />
    </div>
  )
})

AlmostDone.displayName = 'AlmostDone'

export default AlmostDone
