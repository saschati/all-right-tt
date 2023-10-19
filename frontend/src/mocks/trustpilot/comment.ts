import avatar from '@/assets/img/comment/avatar.png'
import type { Comment } from '@/types/model/trustpilot'

export const comments: Comment[] = [
  {
    id: 1,
    title: 'The child really likes it!',
    comment:
      'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
    user: {
      avatar: avatar,
      name: 'Raluca and Sara',
    },
  },
  {
    id: 2,
    title: 'The child really likes it!',
    comment:
      'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
    user: {
      avatar: avatar,
      name: 'Raluca and Sara',
    },
  },
  {
    id: 3,
    title: 'The child really likes it!',
    comment:
      'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
    user: {
      avatar: avatar,
      name: 'Raluca and Sara',
    },
  },
]
