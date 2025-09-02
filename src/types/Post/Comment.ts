export interface ICommentApiResponse {
  data: Data
  status: boolean
  type: string
  message: string
}

export interface Data {
  comments: Comment[]
  rates: Rates
  final_rate: number
  comment_count: number
}


interface answer {
  id: number
  user_id: number
  user_name: string
  published: string
  created_at: string
  title: string
  body: string
  like: number
  dislike: number
}

export interface Comment {
  id: number
  user_id: number
  user_name: string
  published: string
  created_at: string
  title: string
  body: string
  like: number
  dislike: number
  answers: answer[]
}

export interface Rates {
  very_bad: number
  bad: number
  middle: number
  good: number
  very_good: number
}
