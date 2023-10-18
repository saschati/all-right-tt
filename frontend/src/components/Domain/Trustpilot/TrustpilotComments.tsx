import React, { CSSProperties, memo, useCallback, useEffect, useMemo, useState } from 'react'
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

const SLIDER_SPEED = 2000
const ITEM_WIDTH = 364

const TrustpilotComments = memo<TrustpilotCommentsProps>(({ className, title, comments }): JSX.Element => {
  const [slider, setSlider] = useState(() => ({
    currIndex: 0,
    trackWidth: 0,
    width: 0,
  }))

  useEffect(() => {
    let timer = setTimeout(function nextSlide() {
      setSlider((prevSlider) => {
        const currIndex = (prevSlider.currIndex + 1) % comments.length

        return { ...prevSlider, currIndex }
      })

      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(nextSlide, SLIDER_SPEED)
    }, SLIDER_SPEED)

    return () => {
      clearTimeout(timer)
    }
  }, [comments.length])

  const commentsProps = useMemo(() => {
    return comments.map(({ id, ...comment }, index) => {
      let active = slider.currIndex === index ? 'trustpilotComments__comment--active' : null
      if (slider.width < slider.trackWidth) {
        active = 'trustpilotComments__comment--active'
      }

      return <Comment key={id} className={cx('trustpilotComments__comment', active)} {...comment} />
    })
  }, [comments, slider])

  const handleWidth = useCallback(
    (e: HTMLDivElement | null) => e && setSlider((prevSlider) => ({ ...prevSlider, width: e.offsetWidth })),
    [],
  )
  const handleTrackWidth = useCallback(
    (e: HTMLDivElement | null) => e && setSlider((prevSlider) => ({ ...prevSlider, trackWidth: e.offsetWidth })),
    [],
  )

  const commentsStyle: CSSProperties = {}

  if (slider.width > slider.trackWidth) {
    commentsStyle.transform = `translate(-${slider.currIndex * ITEM_WIDTH}px, 0)`
  }

  return (
    <div ref={handleTrackWidth} className={cx('trustpilotComments', className)}>
      <Text className={cx('trustpilotComments__title')} size="medium">
        {title}
      </Text>
      <div ref={handleWidth} className={cx('trustpilotComments__comments')} style={commentsStyle}>
        {commentsProps}
      </div>
    </div>
  )
})

TrustpilotComments.displayName = 'TrustpilotComments'

export default TrustpilotComments
