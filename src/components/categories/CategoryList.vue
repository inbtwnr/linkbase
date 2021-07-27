<template>
  <div v-if="categories">
    <!-- change category popup -->
    <!-- <div :class="{ 'popup-screen': isEditShelf }">
      <form
        @submit.prevent="deleteCategory"
        :class="{ 'popup-block': isEditShelf, empty: !isEditShelf }"
      >
        <div class="popup-block__header-line">
          <p class="header-2">Edit shelf</p>
          <div @click="ToggleEditShelfPopup" class="popup-close">Cancel</div>
        </div>
        <div class="input-block">
          <p>New title</p>
          <input
            type="text"
            v-model="editShelfName"
            class="input-text-block"
            placeholder="New title"
          />
          <button
            type="submit"
            class="confirm-button"
            @click="changeCategoryName"
          >
            <p class="paragraph-secondary">edit</p>
          </button>
          <button type="submit" class="delete-category" @click="deleteCategory">
            <p class="paragraph-secondary">delete category</p>
          </button>
        </div>
      </form>
    </div> -->
    <edit-shelf-popup :currentCategoryId="currentCategoryId"></edit-shelf-popup>
    <!-- category list -->

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
.popup-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.confirm-button {
  cursor: pointer;
  background-color: #3283fe;
  border: none;
  color: white;
  padding: 2 * $module 3 * $module;
  border-radius: $module;
  .paragraph-secondary {
    margin: 0;
    font-size: 13px;
  }
}

.popup-block {
  background: #fff;
  padding: 24px 38px;
  border-radius: 4px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
  z-index: 99;
}
.popup-block__header-line {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: baseline;
  p {
    margin: 0;
  }
}

.popup-close {
  cursor: pointer;
  color: #3283fe;
}

.empty {
  display: none;
}

.input-block {
  background: #fff;
  display: flex;
  flex-direction: column;

  .input-text-block {
    width: 325px;
    padding: 2 * $module 4 * $module;
    box-shadow: none;
    font-size: 4 * $module;
    margin-bottom: 3 * $module;
  }
}
.confirm-button {
  cursor: pointer;
  background-color: #3283fe;
  border: none;
  color: white;
  padding: 2 * $module 3 * $module;
  border-radius: $module;
  width: 16 * $module;
  display: flex;
  justify-content: center;
  .paragraph-secondary {
    margin: 0;
    font-size: 16px;
  }
}

.delete-category {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  cursor: pointer;
}
</style>