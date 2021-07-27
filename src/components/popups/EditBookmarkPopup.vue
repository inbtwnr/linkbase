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
        <button type="submit" class="confirm-button">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
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

<style>
</style>