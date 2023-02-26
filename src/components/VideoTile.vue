<template>
  <div class="video-tile" v-if="props.video">
    <div class="thumbnail">
      <img :src="`${API_HOST}/thumbnails/${props.video.id}.jpg`"
           :alt="`${props.video.title} thumbnail`" />
    </div>
    <div class="metadata">
      <div class="channel-avatar">
        <img :src="`${API_HOST}/channels/${props.video.channel.id}.jpg`"
             :alt="`${props.video.channel.name} avatar`" />
      </div>
      <div class="info">
        <div class="title">{{props.video.title}}</div>
        <div class="channel">
          <div class="name">
            {{props.video.channel.name}}
          </div>
        </div>
        <div class="stats">
          <div class="views">{{props.video.views}}</div>
          <div class="uploaded-at">{{props.video.uploaded_at}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { Video } from 'src/api/models/video';
import { API_HOST } from 'src/api/config';

const props = defineProps<{
  video: Video,
}>();

</script>

<style lang="scss" scoped>
.video-tile {
  .thumbnail {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }

  .metadata {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;

    .title {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .channel-avatar {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 9999px;
      overflow: hidden;

      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }

    .channel {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .name {
        font-size: .875rem;
      }
    }

    .stats {
      display: flex;
      gap: 0.5rem;
      font-size: 0.8rem;
    }
  }
}
</style>
