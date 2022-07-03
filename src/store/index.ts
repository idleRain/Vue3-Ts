import useChannelStore from "./modules/channel"
import useArticleStore from './modules/articles'

export default () => ({
	channel: useChannelStore(),
	articles: useArticleStore()
})
