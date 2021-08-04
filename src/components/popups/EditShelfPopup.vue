<template>
  <div :class="{ 'popup-screen': this.$store.state.isEditShelf }">
    <div
      @submit.prevent="changeCategoryName || deleteCategory"
      :class="{
        'popup-block': this.$store.state.isEditShelf,
        empty: !this.$store.state.isEditShelf,
      }"
    >
      <div class="edit-shelf-popup-block__header-line">
        <p class="header-2">Edit shelf</p>
        <div @click="ToggleEditShelfPopup" class="edit-shelf-popup-close">
          Cancel
        </div>
      </div>
      <div>
        <form
          @submit.prevent="editCategoryName([editShelfName, currentCategoryId])"
          class="edit-shelf-input-block"
        >
          <p class="paragraph-secondary">New title</p>
          <input
            type="text"
            v-model="editShelfName"
            class="edit-shelf-input-text-block"
            placeholder="New title"
          />
          <div>
            <button type="submit" class="edit-shelf-confirm-button">
              <p class="paragraph-secondary">edit</p>
            </button>
          </div>
        </form>
        <form @submit.prevent="deleteCategory(currentCategoryId)">
          <button type="submit" class="edit-shelf-delete-category">
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
    async editCategoryName([editShelfName, currentCategoryId]) {
      await this.changeCategoryName([editShelfName, currentCategoryId]);
      this.editShelfName = "";
    },
    ToggleEditShelfPopup() {
      this.updateIsEditShelf(!this.$store.state.isEditShelf);
    },
  },
  props: ["currentCategoryId"],
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/popup styles/_edit-shelf.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .edit-shelf-popup-block__header-line {
    margin-bottom: 4 * $module;
  }
  .edit-shelf-input-block {
    margin-bottom: 6 * $module;
    .paragraph-secondary {
      margin-bottom: 2 * $module;
    }
    .edit-shelf-input-text-block {
      width: 325px;
      padding: 2 * $module 4 * $module;
      font-size: 16px;
      border-radius: $module;
      margin-bottom: 3 * $module;
    }
    .edit-shelf-confirm-button {
      padding: 2 * $module 3 * $module;
      border-radius: $module;
      .paragraph-secondary {
        margin-bottom: 0 * $module;
      }
    }
  }
  .edit-shelf-delete-category {
    padding: 2 * $module 2 * $module;
  }
}
</style>