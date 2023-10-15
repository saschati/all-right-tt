import React from 'react'
import styles from './PersonalPlan.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import { CircleProgressBar } from '@/UI/ProgressBar'
import TextSwapper from '../TextSwapper'
import { TrustpilotComments, type TrustpilotCommentsProps } from '@/Domain/Trustpilot'
import { calcPercent } from '@/helpers/math'

const cx = classNames.bind(styles)

export type PersonalPlanProps = {
  className?: string
  title: string
  progressStages: string[]
  currProgression: number
  trustpilot: TrustpilotCommentsProps
}

const PersonalPlan: React.FC<PersonalPlanProps> = ({
  className,
  title,
  progressStages,
  currProgression,
  trustpilot,
}): JSX.Element => {
  const percent = calcPercent(progressStages.length, currProgression + 1)

  return (
    <div className={cx('personalPlan', className)}>
      <Text size="medium">{title}</Text>
      <div className={cx('personalPlan__progress')}>
        <CircleProgressBar percentage={percent} />
        <TextSwapper items={progressStages} currIndex={currProgression} />
      </div>
      <div className={cx('personalPlan__trustpilot')}>
        <TrustpilotComments {...trustpilot} />
      </div>
    </div>
  )
}

export default PersonalPlan
