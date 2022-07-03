import {defineStore} from "pinia"
import axios from "axios";
import {ChannelItem, ChannelRes} from "../../types/channel"

export default defineStore('channel', {
  state: () => ({
    list: [] as ChannelItem[],
    active: 0
  }),
  actions: {
    async getChannelList() {
      const res = await axios.get<ChannelRes>('http://geek.itheima.net/v1_0/channels')
      // console.log(res)
      this.list = res.data.data.channels
      this.active = res.data.data.channels[0].id
    },
    changeActiveState(id: number) {
      this.active = id
    }
  },
  getters: {}
})
