import React, { CSSProperties, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './TrustpilotComments.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'
import Comment, { type CommentProps } from '@/Common/Comment'
import useLayout from '@/hooks/useLayout'
import { Device } from '../Container/Layout/Provider'

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

const TrustpilotComments = memo<TrustpilotCommentsProps>(({ className, title, comments }): JSX.Element => {
  const layout = useLayout()

  const ref = useRef<HTMLDivElement>(null)
  const refComments = useRef<HTMLDivElement>(null)

  const [slider, setSlider] = useState(() => ({
    currIndex: 0,
    trackWidth: 0,
    width: 0,
  }))

  const handleWidth = useCallback(
    (e: HTMLDivElement | null) => e && setSlider((prevSlider) => ({ ...prevSlider, width: e.offsetWidth })),
    [],
  )
  const handleTrackWidth = useCallback(
    (e: HTMLDivElement | null) => e && setSlider((prevSlider) => ({ ...prevSlider, trackWidth: e.offsetWidth })),
    [],
  )

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

  useEffect(() => {
    const listener = () => {
      ref.current && handleTrackWidth(ref.current)
      refComments.current && handleWidth(refComments.current)
    }

    listener()

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [handleWidth, handleTrackWidth])

  const commentsProps = useMemo(() => {
    return comments.map(({ id, ...comment }, index) => {
      let active = slider.currIndex === index ? 'trustpilotComments__comment--active' : null
      if (slider.width < slider.trackWidth) {
        active = 'trustpilotComments__comment--active'
      }

      return <Comment key={id} className={cx('trustpilotComments__comment', active)} {...comment} />
    })
  }, [comments, slider])

  const commentsStyle: CSSProperties = {}

  if (slider.width > slider.trackWidth) {
    let itemWidth = '364px'
    if (layout.device === ('mobile' as Device.MOBILE)) {
      itemWidth = 'calc(100vw - 32px + 12px)'
    }

    commentsStyle.transform = `translate(calc(-${slider.currIndex} * ${itemWidth}), 0)`
  }

  return (
    <div ref={ref} className={cx('trustpilotComments', className)}>
      <Text className={cx('trustpilotComments__title')} size="medium">
        {title}
      </Text>
      <div ref={refComments} className={cx('trustpilotComments__comments')} style={commentsStyle}>
        {commentsProps}
      </div>
    </div>
  )
})

TrustpilotComments.displayName = 'TrustpilotComments'

export default TrustpilotComments
