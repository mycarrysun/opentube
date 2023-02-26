<template>
  <div class="home-page">
    <router-link :to="{ name: ROUTES.VIEW_VIDEO, params: { id: video.id } }"
                 v-for="video in videos"
                 :key="video.id"
    >
      <video-tile :video="video"/>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'boot/axios';
import VideoTile from 'components/VideoTile.vue';
import { ROUTES } from 'src/router/routes';

const videos = (await api.get('/test_server.php')).data;
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    width: 100%;

    @media (min-width: $breakpoint-sm-min){
      width: calc(50% - 1rem);
    }

    @media (min-width: $breakpoint-md-min){
      width: calc(25% - 1.5rem);
    }
  }
}
</style>
