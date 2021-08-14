<template>
  <div :class="{ 'popup-screen': this.isNewBookmark }">
    <div :class="{ 'popup-out': this.isNewBookmark }" @click="closePopup"></div>
    <form
      :class="{
        'popup-block': this.isNewBookmark,
        empty: !this.isNewBookmark,
      }"
      @submit.prevent="submit"
    >
      <div class="new-bookmark-popup-block__header-line">
        <p class="header-2">{{ newBookmarkHeader }}</p>
        <div class="new-bookmark-popup-close" @click="ToggleNewBookmarkPopup">
          Cancel
        </div>
      </div>
      <div class="new-bookmark-input-block">
        <p>{{ newBookmarkLabelMessage }}</p>
        <select v-model="selected" class="new-bookmark-selected-block">
          <option
            v-for="(category, index) in this.$store.getters.userCategories"
            :value="{ title: category.title, id: category._id }"
            :key="index"
            class="new-bookmark-option-block"
          >
            <p class="paragraph-secondary">{{ category.title }}</p>
          </option>
        </select>
        <input
          type="text"
          class="new-bookmark-input-text-block"
          :placeholder="newBookmarkInputPlaceHolder"
          v-model="bookmarkTitle"
        />
      </div>
      <button type="submit" class="new-bookmark-confirm-button">
        <p class="paragraph-secondary">Add</p>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      newBookmarkHeader: "New Bookmark",
      newBookmarkLabelMessage: "Choose a shelf and paste the link",
      newBookmarkInputPlaceHolder: "https://...",
      bookmarkTitle: "",
      categoryId: "",
      selected: "",
    };
  },
  computed: {
    ...mapState(["isNewBookmark"]),
  },
  methods: {
    ...mapMutations(["updateIsNewBookmark"]),
    ...mapActions(["createBookmark"]),
    closePopup() {
      this.updateIsNewBookmark(!this.isNewBookmark);
    },
    ToggleNewBookmarkPopup() {
      this.updateIsNewBookmark(!this.isNewBookmark);
    },
    async submit() {
      await this.createBookmark([this.bookmarkTitle, this.selected]);
      this.bookmarkTitle = "";
      this.selected = "";
    },
  },
};
</script>

<style lang="scss" scope>
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/popup styles/_new-bookmark.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .new-bookmark-confirm-button {
    padding: 2 * $module 3 * $module;
    border-radius: $module;
  }
  .new-bookmark-popup-block__header-line {
    margin-bottom: 4 * $module;
  }
  .new-bookmark-input-block {
    margin-bottom: 8 * $module;
    .new-bookmark-selected-block {
      margin-bottom: 4 * $module;
      padding: 2 * $module 4 * $module;
      font-size: 14px;
    }
    .new-bookmark-input-text-block {
      width: 325px;
      padding: 2 * $module 4 * $module;
      box-shadow: none;
      font-size: 14px;
    }
  }
}
</style>