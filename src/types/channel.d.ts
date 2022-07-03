export type ChannelItem = {
  id: number
  name: string
}

export type ChannelRes = {
  data: {
    channels: ChannelItem[]
  }
  message: string
}
