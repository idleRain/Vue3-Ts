export type ArticlesParams = {
  channel_id: number
  timestamp?: number
}

export type ArticleItem = {
  art_id: string
  aut_id: string
  aut_name: string
  comm_count: number
  cover: {
    images: string[]
    type
  }
  is_top: number
  pubdate: number
  title: number
}
export type ArticleRes = {
  data: {
    pre_timestamp: string
    results: ArticleItem[]
    message: string
  }
}
