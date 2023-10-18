import React, { useCallback } from 'react'
import styles from './Layout.module.scss'
import LayoutProvider from '../Provider/LayoutProvider'
import classNames from 'classnames/bind'
import Header from '../Header'
import { useTypedSelector } from '@/app/store/redux/store'
import { useLocation, useNavigate } from 'react-router-dom'
import Path from '@/config/path'

const cx = classNames.bind(styles)

const Layout: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  const { curr, total } = useTypedSelector(({ quizStep }) => quizStep)

  const handleBackward = useCallback(() => {
    if (location.pathname === Path.HOME) {
      navigate(Path.HOME)

      return
    }

    navigate(-1)
  }, [navigate, location])

  return (
    <LayoutProvider>
      <div className={cx('layout')}>
        <header className={cx('layout__header')}>
          <Header
            onBackward={handleBackward}
            step={{
              curr,
              total,
            }}
          />
        </header>
        <main className={cx('layout__content')}>{children}</main>
      </div>
    </LayoutProvider>
  )
}

export default Layout
