<template>
  <div v-if="notice">
    <div :class="{ 'popup-screen': isEditBookmark }">
      <div :class="{ 'popup-block': isEditBookmark, empty: !isEditBookmark }">
        <div class="popup-block__header-line">
          <p class="header-2">Change shelf</p>
          <div @click="ToggleEditBookmarkPopup" class="popup-close">Cancel</div>
        </div>
        <p class="paragraph-secondary">Change placement for bookmark</p>
        <div class="change-category-block">
          <select v-model="selected" class="selected-block">
            <option
              v-for="(category, index) in this.$store.getters.userCategories"
              :value="{ title: category.title, id: category._id }"
              :key="index"
              class="option-block"
            >
              <p class="paragraph-secondary">{{ category.title }}</p>
            </option>
          </select>
          <button
            type="submit"
            class="confirm-button"
            @click="changeBookmarkPlacing"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    <div v-for="(bookmark, index) in bookmarks" :key="index">
      <bookmarks-item
        :bookmarkLogo="bookmark.favicon[0]"
        :bookmarkHeader="bookmark.title"
        :bookmarkDescription="bookmark.description"
        :bookmarkDate="bookmarkDateItem(bookmark)"
        :bookmarkLink="bookmark.link"
        :bookmark="bookmark"
        @button-trigger="ToggleEditBookmarkPopup(bookmark)"
      ></bookmarks-item>
    </div>
  </div>
  <div v-else>This is where your bookmarks will be located.</div>
</template>

<script>
import BookmarksItem from "./BookmarksItem.vue";
import axios from "axios";
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
      selected: null,
    };
  },
  methods: {
    ToggleEditBookmarkPopup(bookmark) {
      this.currentBookmarkId = bookmark._id;
      this.isEditBookmark = !this.isEditBookmark;
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
    async changeBookmarkPlacing() {
      try {
        const data = {
          category: this.selected.id,
        };
        console.log(data);
        console.log("bookmark id: " + this.currentBookmarkId);
        this.bookmark = await axios.put(
          `${this.$store.getters.baseURL}bookmark/${this.currentBookmarkId}`,
          data,
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.userToken,
            },
          }
        );
        this.isEditBookmark = !this.isEditBookmark;
      } catch (error) {
        console.log(error.response.data.code);
      }
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
</style>