<script lang="ts" setup>
import useStore from '../store'
// import {watch} from "vue";

const {articles, channel} = useStore()
channel.$subscribe(() => {
  articles.getArticlesList(channel.active)
})
</script>

<template>
  <div class="list">
    <div class="article_item" v-for="item in articles.articlesList" :key="item.art_id">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div class="img_box">
        <img
            v-if="item.cover.images"
            :src="item.cover.images[0]"
            class="w100"
            :alt="item.title"
        />
      </div>
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }} 评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
