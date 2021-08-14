<template>
  <div>
    <new-shelf-popup></new-shelf-popup>
    <edit-shelf-popup :currentCategoryId="currentCategoryId"></edit-shelf-popup>
    <div class="category-list">
      <all-bookmarks></all-bookmarks>
      <div v-for="(category, index) in categories" :key="index">
        <category-item
          :nameLink="category.title"
          @button-trigger="changeCurrentCategory(category)"
          :category="category"
          class="delete-category"
        ></category-item>
      </div>
      <div class="add-category" @click="ToggleNewShelfPopup">+ new shelf</div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
import AllBookmarks from "@/components/bookmarks/AllBookmarks.vue";
import EditShelfPopup from "@/components/popups/EditShelfPopup.vue";
import NewShelfPopup from "@/components/popups/NewShelfPopup.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isEditShelf: false,
      category: null,
      editShelfName: "",
      currentCategoryId: "",
    };
  },
  components: {
    CategoryItem,
    AllBookmarks,
    EditShelfPopup,
    NewShelfPopup,
  },
  props: ["categories"],
  methods: {
    ...mapMutations(["updateIsEditShelf", "updateIsNewShelf"]),
    ToggleNewShelfPopup() {
      this.updateIsNewShelf(!this.$store.state.isNewShelf);
    },
    ToggleEditShelfPopup() {
      this.updateIsEditShelf(!this.$store.state.isEditShelf);
    },
    changeCurrentCategory(category) {
      this.updateIsEditShelf(!this.$store.state.isEditShelf);
      this.currentCategoryId = category._id;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/shelfs styles/_shelfs.scss";
.lmao {
  font-family: $main-font-family;
}
</style>