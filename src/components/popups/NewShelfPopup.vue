<template>
  <div :class="{ 'popup-screen': this.$store.state.isNewShelf }">
    <div
      :class="{ 'popup-out': this.$store.state.isNewShelf }"
      @click="ToggleNewShelfPopup"
    ></div>
    <form
      :class="{
        'popup-block': this.$store.state.isNewShelf,
        empty: !this.$store.state.isNewShelf,
      }"
      @submit.prevent="submit"
    >
      <div class="new-shelf-popup-block__header-line">
        <p class="header-2">{{ newShelfHeader }}</p>
        <div class="new-shelf-popup-close" @click="ToggleNewShelfPopup">
          Cancel
        </div>
      </div>
      <div class="new-shelf-input-block">
        <p class="paragraph-secondary">{{ newShelfLabelMessage }}</p>
        <input
          type="text"
          class="new-shelf-input-text-block"
          :placeholder="newShelfInputPlaceHolder"
          v-model="categoryTitle"
        />
      </div>
      <button type="submit" class="new-shelf-confirm-button">
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
      newShelfHeader: "New Shelf",
      newShelfLabelMessage: "Give a name of shelf",
      newShelfInputPlaceHolder: "shelf name",
      categoryTitle: "",
    };
  },
  computed: {
    ...mapState(["isNewShelf"]),
  },
  methods: {
    ...mapMutations(["updateIsNewShelf"]),
    ...mapActions(["createCategory"]),
    ToggleNewShelfPopup() {
      this.updateIsNewShelf(!this.isNewShelf);
    },
    async submit() {
      await this.createCategory([this.categoryTitle]);
      this.categoryTitle = "";
    },
  },
};
</script>

<style lang="scss" scope>
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/popup styles/_new-shelf.scss";
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
  .new-shelf-confirm-button {
    padding: 2 * $module 3 * $module;
    border-radius: $module;
  }
  .new-shelf-popup-block__header-line {
    margin-bottom: 4 * $module;
  }
  .new-shelf-input-block {
    margin-bottom: 6 * $module;
    .paragraph-secondary {
      margin-bottom: 2 * $module;
    }
    .new-shelf-input-text-block {
      width: 325px;
      padding: 2 * $module 4 * $module;
      font-size: 16px;
      border-radius: $module;
    }
  }
}
</style>