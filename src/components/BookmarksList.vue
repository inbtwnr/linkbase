<template>
  <div>
    <div v-for="(bookmark, index) in bookmarks" :key="index">
      <bookmarks-item
        :bookmarkLogo="bookmark.bookmarkLogo"
        :bookmarkHeader="bookmark.bookmarkHeader"
        :bookmarkDescription="bookmark.bookmarkDescription"
        :bookmarkDate="bookmark.bookmarkDate"
        :bookmarkLink="bookmark.bookmarkLink"
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
  data() {
    return {
      bookmarks: [
        {
          bookmarkLogo: require("@/assets/images/chrome.svg"),
          bookmarkHeader: "Youtube",
          bookmarkDescription:
            "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
          bookmarkLink: "https://www.youtube.com/",
          bookmarkDate: "14.06.2021",
          isBookmarkPopup: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>