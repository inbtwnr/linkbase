<template>
  <div v-if="categories">
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
    </div>
  </div>
  <div v-else>This is where your shelfs will be located.</div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
import AllBookmarks from "@/components/bookmarks/AllBookmarks.vue";
import EditShelfPopup from "@/components/popups/EditShelfPopup.vue";
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
  },
  props: ["categories"],
  methods: {
    ...mapMutations(["updateIsEditShelf"]),
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
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    :last-child {
      margin-right: 0;
    }
    div {
      .category-plate {
        margin-right: 3 * $module;
        margin-bottom: 3 * $module;
      }
    }
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    :last-child {
      margin-right: 0;
    }
    div {
      .category-plate {
        margin-right: 3 * $module;
        margin-bottom: 3 * $module;
      }
    }
  }
}
</style>