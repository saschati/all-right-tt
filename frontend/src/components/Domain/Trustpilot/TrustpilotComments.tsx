import React, { memo, useMemo } from 'react'
import styles from './TrustpilotComments.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import Comment, { type CommentProps } from '@/Common/Comment'

const cx = classNames.bind(styles)

export interface CommentType extends CommentProps {
  id: string | number
}

export type TrustpilotCommentsProps = {
  className?: string
  title: string
  comments: CommentType[]
}

const TrustpilotComments = memo<TrustpilotCommentsProps>(({ className, title, comments }): JSX.Element => {
  const commentsProps = useMemo(() => {
    return comments.map(({ id, ...comment }) => (
      <Comment key={id} className={cx('trustpilotComments__comment')} {...comment} />
    ))
  }, [comments])

  return (
    <div className={cx('trustpilotComments', className)}>
      <Text className={cx('trustpilotComments__title')} size="medium">
        {title}
      </Text>
      <div className={cx('trustpilotComments__comments')}>{commentsProps}</div>
    </div>
  )
})

TrustpilotComments.displayName = 'TrustpilotComments'

export default TrustpilotComments
