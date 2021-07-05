<template>
  <div>
    <div v-for="(bookmark, index) in bookmarks" :key="index">
      <bookmarks-item
        :bookmarkLogo="bookmark.favicon[0]"
        :bookmarkHeader="bookmark.title"
        :bookmarkDescription="bookmark.description"
        :bookmarkDate="bookmark.date"
        :bookmarkLink="bookmark.link"
      ></bookmarks-item>
    </div>
  </div>
</template>

<script>
import BookmarksItem from "./BookmarksItem.vue";

export default {
  components: {
    BookmarksItem,
  },
  props: ["bookmarks"],
};
</script>

<style>
</style>