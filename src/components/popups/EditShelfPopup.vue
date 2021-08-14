<template>
  <div :class="{ 'popup-screen': this.$store.state.isEditShelf }">
    <div
      :class="{ 'popup-out': this.$store.state.isEditShelf }"
      @click="ToggleEditShelfPopup"
    ></div>
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
          <div class="edit-shelf__edit-category-point-title">
            <p class="paragraph-primary">Change title</p>
          </div>
          <p class="paragraph-secondary">Type new title for a shelf</p>

          <div class="edit-shelf-input-and-button">
            <input
              type="text"
              v-model="editShelfName"
              class="edit-shelf-input-text-block"
              placeholder="New title"
            />
            <button type="submit" class="edit-shelf-confirm-button">
              <p class="paragraph-secondary">edit</p>
            </button>
          </div>
        </form>
        <form @submit.prevent="deleteCategory(currentCategoryId)">
          <div class="edit-shelf__edit-category-point-title">
            <p class="paragraph-primary">Delete title</p>
          </div>
          <div class="edit-shelf-delete-container">
            <div class="delete-label">
              <p class="paragraph-secondary">Delete category</p>
            </div>

            <button type="submit" class="edit-shelf-delete-category">
              <p class="paragraph-secondary">delete category</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
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
      this.updateIsEditShelf(!this.isEditShelf);
    },
  },
  computed: {
    ...mapState(["isEditShelf"]),
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
    margin-bottom: 7 * $module;
  }
  .edit-shelf-input-block {
    margin-bottom: 6 * $module;
    .paragraph-secondary {
      margin-bottom: 2 * $module;
    }
    .edit-shelf-input-text-block {
      width: 240px;
      padding: 2 * $module 4 * $module;
      font-size: 16px;
      border-radius: $module;
      margin-right: 3 * $module;
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