import { defineStore } from 'pinia'
import axios from "axios";
import {ArticleItem, ArticleRes, ArticlesParams} from "../../types/articles"

export default defineStore('articles', {
	state: () => ({
		articlesList: [] as ArticleItem[],
	}),
	actions: {
		async getArticlesList(id: number = 0) {
			const res = await axios.get<ArticleRes>('http://geek.itheima.net/v1_0/articles', {
				params: {
					channel_id: id,
					timestamp: Date.now()
				} as ArticlesParams
			})
			// console.log(res)
			this.articlesList = res.data.data.results
		}
	}
})
