import React from 'react'
import styles from './Layout.module.scss'
import LayoutProvider from '../Provider/LayoutProvider'
import classNames from 'classnames/bind'
import Header from '../Header'

const cx = classNames.bind(styles)

const Layout: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <LayoutProvider>
      <div className={cx('layout')}>
        <header className={cx('layout__header')}>
          <Header
            onBackward={() => {}}
            step={{
              curr: 10,
              total: 20,
            }}
          />
        </header>
        <main className={cx('layout__content')}>{children}</main>
      </div>
    </LayoutProvider>
  )
}

export default Layout
