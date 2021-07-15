<template>
  <div v-if="notice">
    <div v-for="(bookmark, index) in bookmarks" :key="index">
      <bookmarks-item
        :bookmarkLogo="bookmark.favicon[0]"
        :bookmarkHeader="bookmark.title"
        :bookmarkDescription="bookmark.description"
        :bookmarkDate="bookmark.date"
        :bookmarkLink="bookmark.link"
        :bookmark="bookmark"
      ></bookmarks-item>
    </div>
  </div>
  <div v-else>This is where your bookmarks will be located.</div>
</template>

<script>
import BookmarksItem from "./BookmarksItem.vue";
export default {
  components: {
    BookmarksItem,
  },
  props: ["bookmarks", "notice"],
  data() {
    return {
      bookmark: null,
      isEditBookmark: false,
      editBookmarkName: "",
      currentBookmarkId: "",
    };
  },
  methods: {
    ToggleEditBookmarkPopup() {
      this.isEditBookmark = !this.isEditBookmark;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
.popup-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.confirm-button {
  cursor: pointer;
  background-color: #3283fe;
  border: none;
  color: white;
  padding: 2 * $module 3 * $module;
  border-radius: $module;
  .paragraph-secondary {
    margin: 0;
    font-size: 13px;
  }
}
</style>