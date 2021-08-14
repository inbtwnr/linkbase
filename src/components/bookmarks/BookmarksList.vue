<template>
  <div v-if="notice" class="bookmarks-list">
    <new-bookmark-popup></new-bookmark-popup>
    <edit-bookmark-popup
      :currentBookmarkId="currentBookmarkId"
      :bookmarkCategory="bookmarkCategory"
    ></edit-bookmark-popup>
    <div v-for="(bookmark, index) in bookmarks" :key="index">
      <bookmarks-item
        :bookmarkLogo="bookmarkFavicon(bookmark)"
        :bookmarkHeader="bookmarkHeader(bookmark)"
        :bookmarkDescription="bookmark.description"
        :bookmarkDate="bookmarkDateItem(bookmark)"
        :bookmarkLink="bookmark.link"
        :bookmarkSharedLink="bookmarkSharedLink(bookmark)"
        :bookmark="bookmark"
        @button-trigger="ToggleEditBookmarkPopup(bookmark)"
        @delete-button="deleteBookmark(bookmark)"
      ></bookmarks-item>
    </div>
  </div>
  <div v-else class="empty-bookmark-list">
    This is where your bookmarks will be located.
    <span class="bookmark-add-link" @click="ToggleNewBookmarkPopup"
      >Add a new bookmark</span
    >
  </div>
</template>

<script>
import BookmarksItem from "./BookmarksItem.vue";
import EditBookmarkPopup from "@/components/popups/EditBookmarkPopup.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    BookmarksItem,
    EditBookmarkPopup,
  },
  props: ["bookmarks", "notice"],
  data() {
    return {
      bookmark: null,
      isEditBookmark: false,
      editBookmarkName: "",
      currentBookmarkId: "",
      selected: null,
      bookmarkCategory: "",
    };
  },
  methods: {
    ...mapActions(["changeBookmarkPlacing", "deleteBookmark"]),
    ...mapMutations(["updateIsNewBookmark"]),
    ToggleNewBookmarkPopup() {
      this.updateIsNewBookmark(!this.$store.state.isNewBookmark);
    },
    ToggleEditBookmarkPopup(bookmark) {
      this.currentBookmarkId = bookmark._id;
      this.bookmarkCategory = bookmark.category;
      this.$store.state.isEditBookmark = !this.$store.state.isEditBookmark;
      console.log(this.currentBookmarkId);
    },
    bookmarkFavicon(bookmark) {
      let linkIcon = bookmark.favicon[bookmark.favicon.length - 1];
      return linkIcon;
    },
    bookmarkDateItem(bookmark) {
      let linkDate = new Date(bookmark.date);
      let result = "";
      if (
        linkDate.getMonth() < 10 &&
        linkDate.getDate() < 10 &&
        linkDate.getMinutes() < 10
      ) {
        result =
          "0" +
          linkDate.getDate().toString() +
          "." +
          "0" +
          linkDate.getMonth().toString() +
          "." +
          linkDate.getFullYear().toString() +
          " at " +
          linkDate.getHours().toString() +
          ":" +
          "0" +
          linkDate.getMinutes().toString();
      } else if (linkDate.getDate() < 10) {
        result =
          "0" +
          linkDate.getDate().toString() +
          "." +
          linkDate.getMonth().toString() +
          "." +
          linkDate.getFullYear().toString() +
          " at " +
          linkDate.getHours().toString() +
          ":" +
          linkDate.getMinutes().toString();
      } else if (linkDate.getMonth() < 10) {
        result =
          linkDate.getDate().toString() +
          "." +
          "0" +
          (linkDate.getMonth() + 1).toString() +
          "." +
          linkDate.getFullYear().toString() +
          " at " +
          linkDate.getHours().toString() +
          ":" +
          linkDate.getMinutes().toString();
      } else if (linkDate.getMinutes() < 10) {
        result =
          linkDate.getDate().toString() +
          "." +
          (linkDate.getMonth() + 1).toString() +
          "." +
          linkDate.getFullYear().toString() +
          " at " +
          linkDate.getHours().toString() +
          ":" +
          "0" +
          linkDate.getMinutes().toString();
      }
      return result;
    },
    bookmarkHeader(bookmark) {
      if (bookmark.title.length > 48) {
        let bookmarkHeader = bookmark.title.split("", 48);
        return bookmarkHeader.join("") + "...";
      } else {
        return bookmark.title;
      }
    },
    bookmarkSharedLink(bookmark) {
      if (bookmark.link.length > 48) {
        let bookmarkSharedlink = bookmark.link.split("", 48);
        return bookmarkSharedlink.join("") + "...";
      }
      return bookmark.link;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/bookmarks styles/_bookmarks.scss";

@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .bookmarks-list {
    height: 540px;
    padding-bottom: 16 * $module;
  }
  .empty-bookmark-list {
    margin-top: 4 * $module;
  }
  .bookmarks-list::-webkit-scrollbar {
    width: 0.6em;
  }
}
</style>