import React from 'react'
import styles from './PersonalPlan.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type PersonalPlanProps = {
  className?: string
}

const PersonalPlan: React.FC<PersonalPlanProps> = ({ className }): JSX.Element => {
  return <div className={cx('personalPlan', className)}></div>
}

export default PersonalPlan
