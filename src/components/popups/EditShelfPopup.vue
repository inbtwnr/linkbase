<template>
  <div :class="{ 'popup-screen': this.$store.state.isEditShelf }">
    <div
      @submit.prevent="changeCategoryName || deleteCategory"
      :class="{
        'popup-block': this.$store.state.isEditShelf,
        empty: !this.$store.state.isEditShelf,
      }"
    >
      <div class="popup-block__header-line">
        <p class="header-2">Edit shelf</p>
        <div @click="ToggleEditShelfPopup" class="popup-close">Cancel</div>
      </div>
      <div class="input-block">
        <form
          @submit.prevent="
            changeCategoryName([editShelfName, currentCategoryId])
          "
        >
          <p>New title</p>
          <input
            type="text"
            v-model="editShelfName"
            class="input-text-block"
            placeholder="New title"
          />
          <button type="submit" class="confirm-button">
            <p class="paragraph-secondary">edit</p>
          </button>
        </form>
        <form @submit.prevent="deleteCategory(currentCategoryId)">
          <button type="submit" class="delete-category">
            <p class="paragraph-secondary">delete category</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      editShelfName: "",
    };
  },
  methods: {
    ...mapMutations(["updateIsEditShelf"]),
    ...mapActions(["changeCategoryName", "deleteCategory"]),
    ToggleEditShelfPopup() {
      this.updateIsEditShelf(!this.$store.state.isEditShelf);
    },
  },
  props: ["currentCategoryId"],
};
</script>

<style>
</style>