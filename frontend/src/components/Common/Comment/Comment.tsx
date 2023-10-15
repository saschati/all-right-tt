import React from 'react'
import styles from './Comment.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import Hr from '@/UI/Hr'
import { Rate } from '@/UI/Icon/Common'

const cx = classNames.bind(styles)

export interface CommentUser {
  avatar: string
  name: string
}

export type CommentProps = {
  className?: string
  title: string
  comment: string
  user: CommentUser
}

const Comment: React.FC<CommentProps> = ({ className, title, comment, user }): JSX.Element => {
  return (
    <div className={cx('comment', className)}>
      <Text className={cx('comment__title')}>{title}</Text>
      <Text className={cx('comment__desc')}>{comment}</Text>
      <Hr />
      <div className={cx('comment__footer')}>
        <div>
          <img className={cx('comment__avatar')} src={user.avatar} alt={user.name} />
        </div>
        <div className={cx('comment__name_with_rate')}>
          <Text size="small">{user.name}</Text>
          <div className={cx('comment__rate')}>
            <Rate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
