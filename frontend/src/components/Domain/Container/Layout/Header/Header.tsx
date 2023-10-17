import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { ArrowBack } from '@/UI/Icon/Common'
import logo from '@/assets/img/logo.svg'
import Fraction from '@/Common/Fraction/Fraction'
import ProgressBar from '@/UI/ProgressBar'
import { calcPercent } from '@/helpers/math'

const cx = classNames.bind(styles)

export interface Step {
  curr: number
  total: number
}

export type HeaderProps = {
  className?: string
  onBackward: () => void
  step: Step
}

const Header: React.FC<HeaderProps> = ({ className, onBackward, step }): JSX.Element => {
  const percent = calcPercent(step.total, step.curr) * 100

  return (
    <div className={cx('header', className)}>
      <div className={cx('header__panel', className)}>
        <div onClick={onBackward} className="cursor-pointer">
          <ArrowBack />
        </div>
        <img src={logo} alt="All right" />
        <Fraction className={cx('header__step')} divisible={step.curr} divisor={step.total} />
      </div>
      <ProgressBar percentage={percent} />
    </div>
  )
}

export default Header
