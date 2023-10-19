export interface Comment {
  id: number
  title: string
  comment: string
  user: User
}

export interface User {
  avatar: string
  name: string
}
