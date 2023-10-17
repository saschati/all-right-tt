import React, { useMemo } from 'react'
import styles from './TagList.module.scss'
import classNames from 'classnames/bind'
import Tag, { TagProps } from '@/UI/Tag'

const cx = classNames.bind(styles)

export interface TagItem {
  id: string | number
  name: string
  icon: TagProps['icon']
}

export type TagListProps = {
  className?: string
  tags: TagItem[]
  onClick: (answer: TagItem, isActive: boolean) => void
}

const TagList: React.FC<TagListProps> = ({ className, tags, onClick }): JSX.Element => {
  const tagsComp = useMemo(() => {
    return tags.map((tag) => (
      <Tag key={tag.id} icon={tag.icon} name={tag.name} onClick={(isActive) => onClick(tag, isActive)} />
    ))
  }, [tags, onClick])

  return <div className={cx('tags', className)}>{tagsComp}</div>
}

export default TagList
