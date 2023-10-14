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
}

const TagList: React.FC<TagListProps> = ({ className, tags }): JSX.Element => {
  const tagsComp = useMemo(() => {
    return tags.map((tag) => <Tag key={tag.id} icon={tag.icon} name={tag.name} />)
  }, [tags])

  return <div className={cx('tags', className)}>{tagsComp}</div>
}

export default TagList
