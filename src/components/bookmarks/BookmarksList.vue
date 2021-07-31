<template>
  <div v-if="notice">
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
  <div v-else>This is where your bookmarks will be located.</div>
</template>

<script>
import BookmarksItem from "./BookmarksItem.vue";
import EditBookmarkPopup from "@/components/popups/EditBookmarkPopup.vue";
import { mapActions } from "vuex";
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
      if (linkDate.getMonth() < 10 && linkDate.getDate() < 10) {
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
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
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
  .empty {
    display: none;
  }
  .option-block {
    padding: 2 * $module;
    font-size: 16px;
  }
  .selected-block {
    margin-bottom: 16px;
    padding: 8px 16px;
    font-size: 16px;
    width: 360px;
  }
  .popup-block__header-line {
    margin-bottom: 32px;
  }
  .change-category-block {
    display: flex;
    flex-direction: column;
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
}
</style>