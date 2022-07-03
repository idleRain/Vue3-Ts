<script lang="ts" setup>
import useStore from '../store'

const {channel, articles} = useStore()
channel.getChannelList()

const handleClick = (id: number): void => {
  channel.changeActiveState(id)
  // articles.getArticlesList(id)
}
</script>

<template>
  <ul class="catagtory">
    <li :class="{select: item.id === channel.active}"
        v-for="item in channel.list"
        :key="item.id"
        @click="handleClick(item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoed lang="less"></style>
