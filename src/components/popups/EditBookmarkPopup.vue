<template>
  <div :class="{ 'popup-screen': this.$store.state.isEditBookmark }">
    <form
      :class="{
        'popup-block': this.$store.state.isEditBookmark,
        empty: !this.$store.state.isEditBookmark,
      }"
      @submit.prevent="
        changeBookmarkPlacing([selected, bookmarkCategory, currentBookmarkId])
      "
    >
      <div class="edit-bookmark-popup-block__header-line">
        <p class="header-2">Change shelf</p>
        <div @click="ToggleEditBookmarkPopup" class="edit-bookmark-popup-close">
          Cancel
        </div>
      </div>

      <div class="edit-bookmark-change-category-block">
        <p class="paragraph-secondary">Change placement for bookmark</p>
        <select v-model="selected" class="edit-bookmark-selected-block">
          <option
            v-for="(category, index) in this.$store.getters.userCategories"
            :value="{ title: category.title, id: category._id }"
            :key="index"
          >
            <p class="paragraph-secondary">{{ category.title }}</p>
          </option>
        </select>
        <div>
          <button type="submit" class="edit-bookmark-confirm-button">
            <p class="paragraph-secondary">edit</p>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    ...mapMutations(["updateIsEditBookmark"]),
    ...mapActions(["changeBookmarkPlacing"]),
    ToggleEditBookmarkPopup() {
      this.updateIsEditBookmark(!this.$store.state.isEditBookmark);
    },
  },
  props: ["currentBookmarkId", "bookmarkCategory"],
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/popup styles/_edit-bookmark.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .edit-bookmark-popup-block__header-line {
    margin-bottom: 4 * $module;
  }
  .edit-bookmark-change-category-block {
    .paragraph-secondary {
      margin-bottom: 2 * $module;
    }
    .edit-bookmark-selected-block {
      margin-bottom: 3 * $module;
      padding: 2 * $module 4 * $module;
      font-size: 14px;
      width: 356px;
    }
    .edit-bookmark-confirm-button {
      padding: 2 * $module 3 * $module;
      border-radius: $module;
      .paragraph-secondary {
        margin-bottom: 0px;
      }
    }
  }
}
</style>