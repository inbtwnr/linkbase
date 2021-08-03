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
          @submit.prevent="editCategoryName([editShelfName, currentCategoryId])"
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

<style lang="scss" scope>
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
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
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .confirm-button {
    cursor: pointer;
    background-color: #3283fe;
    border: none;
    color: white;
    padding: 2 * $module 4 * $module;
    border-radius: 3 * $module;
    .paragraph-secondary {
      margin: 0;
    }
    &:hover {
      background-color: #1966d8;
    }
  }
  .popup-block {
    background: #fff;
    padding: 24px 38px;
    border-radius: 4px;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
    z-index: 99;
  }
  .empty {
    display: none;
  }
  .popup-block__header-line {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: baseline;
    margin-bottom: 2 * $module;
    p {
      margin: 0;
    }
  }
  .popup-close {
    cursor: pointer;
    color: #3283fe;
  }
  .input-block {
    margin-bottom: 8 * $module;
    background: #fff;
    display: flex;
    flex-direction: column;
    .paragraph-secondary {
      margin-bottom: 2 * $module;
      color: #6d7188;
    }
    .input-text-block {
      width: 325px;
      padding: 2 * $module 4 * $module;
      box-shadow: none;
      font-size: 14px;
      border: 1px solid #dddee4;
      border-radius: $module;
      :active {
        border-radius: $module;
      }
    }
  }
}
</style>