<template>
  <div>
    <!-- <div :class="{ 'popup-screen': this.$store.state.isNewShelf }">
      <form
        :class="{
          'popup-block': this.$store.state.isNewShelf,
          empty: !this.$store.state.isNewShelf,
        }"
        @submit.prevent="submit"
      >
        <div class="popup-block__header-line">
          <p class="header-2">{{ newShelf.newShelfHeader }}</p>
          <div class="popup-close" @click="ToggleNewShelfPopup">Cancel</div>
        </div>
        <div class="input-block">
          <p class="paragraph-secondary">{{ newShelf.newShelfLabelMessage }}</p>
          <input
            type="text"
            class="input-text-block"
            :placeholder="newShelf.newShelfInputPlaceHolder"
            v-model="newShelf.categoryTitle"
          />
        </div>
        <button
          type="submit"
          class="confirm-button"
          @click="createCategory([newShelf.categoryTitle])"
        >
          <p class="paragraph-secondary">Add</p>
        </button>
      </form>
    </div> -->
    <new-shelf-popup></new-shelf-popup>
    <new-bookmark-popup></new-bookmark-popup>
    <!-- <div :class="{ 'popup-screen': isNewBookmark }">
      <form
        :class="{
          'popup-block': isNewBookmark,
          empty: !isNewBookmark,
        }"
      >
        <div class="popup-block__header-line">
          <p class="header-2">{{ newBookmarkHeader }}</p>
          <div class="popup-close" @click="ToggleNewBookmarkPopup">Cancel</div>
        </div>
        <div class="input-block">
          <p>{{ newBookmarkLabelMessage }}</p>
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
          <input
            type="text"
            class="input-text-block"
            :placeholder="newBookmarkInputPlaceHolder"
            v-model="bookmarkTitle"
          />
        </div>
        <div class="confirm-button" @click="createBookmark">
          <p class="paragraph-secondary">Add</p>
        </div>
      </form>
    </div> -->
    <div class="navigaion-bar-block">
      <div class="navigaion-bar-block__logo-and-addings">
        <p class="paragraph-primary">Linkbase</p>
        <div class="paragraph-primary" @click="ToggleNewShelfPopup">
          Add shelf
        </div>
        <div class="paragraph-primary" @click="ToggleNewBookmarkPopup">
          Add bookmark
        </div>
      </div>
      <div class="navigaion-bar-block__username-and-exit" @click="closeHome">
        {{ username }}, exit
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NewShelfPopup from "@/components/popups/NewShelfPopup.vue";
import NewBookmarkPopup from "@/components/popups/NewBookmarkPopup.vue";
export default {
  components: {
    NewShelfPopup,
    NewBookmarkPopup,
  },
  props: ["username"],
  data() {
    return {
      newShelfHeader: "New Shelf",
      newShelfLabelMessage: "Give a name of shelf",
      newShelfInputPlaceHolder: "Shelf Name",
      categoryTitle: "",

      newBookmarkHeader: "New Bookmark",
      newBookmarkLabelMessage: "Give a name of bookmark",
      newBookmarkInputPlaceHolder: "Link",
      bookmarkTitle: "",
      categoryId: "",

      user: null,
      selected: null,
    };
  },
  methods: {
    ...mapMutations(["updateIsNewShelf", "updateIsNewBookmark"]),
    ToggleNewShelfPopup() {
      this.updateIsNewShelf(!this.$store.state.isNewShelf);
    },
    ToggleNewBookmarkPopup() {
      this.updateIsNewBookmark(!this.$store.state.isNewBookmark);
    },
    // async createCategory() {

    //   const data = {
    //     title: this.newShelf.categoryTitle,
    //   };
    //   try {
    //     console.log(data.title);

    //     await axios.post(`${this.$store.getters.baseURL}category/`, data, {
    //       headers: {
    //         Authorization: "Bearer " + this.$store.getters.userToken,
    //       },
    //     });
    //     console.log("after creating category");
    //   } catch (error) {
    //     console.log(error.response.data.code);
    //   }

    //   this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
    // },
    submit() {
      this.createCategory();
    },
    // async createBookmark(ctx, [bookmarkTitle, selected]) {
    //   try {
    //     const data = await {
    //       link: bookmarkTitle,
    //       category: selected.id,
    //     };
    //     await axios.post(`${this.$store.getters.baseURL}bookmark/`, data, {
    //       headers: {
    //         Authorization: "Bearer " + this.$store.getters.userToken,
    //       },
    //     });
    //     console.log("after creating bookmark");
    //     this.state.isNewBookmark = !this.state.isNewBookmark;
    //   } catch (error) {
    //     console.log(error.response.data.code);
    //   }
    // },
    closeHome() {
      this.$router.push("/");
    },
    chooseCategory(category) {
      console.log("from chooseCategory");
      this.newBookmark.categoryId = category._id;
      console.log(this.newBookmark.categoryId);
    },
  },
  computed: {
    ...mapGetters(["getUserCategories"]),
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/_fonts.scss";

.navigaion-bar-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  .navigaion-bar-block__logo-and-addings {
    display: flex;
    margin: 0;
    padding: 0;
    p {
      margin: 0;
      padding: 4 * $module 0;
      margin-right: 24px;
    }
    div {
      color: #105cf4;
      padding: 4 * $module 2 * $module;
      margin-right: 24px;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      &:hover {
        color: #7aa6ff;
      }
    }
    :last-child {
      margin-right: 0;
    }
  }

  .navigaion-bar-block__username-and-exit {
    margin: 4 * $module 0;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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
.empty {
  display: none;
}

.popup-block__header-line {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: baseline;
  margin-bottom: 4 * $module;
  p {
    margin: 0;
  }
}

.popup-close {
  cursor: pointer;
  color: #3283fe;
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
.input-block {
  margin-bottom: 8 * $module;
  background: #fff;
  display: flex;
  flex-direction: column;
  .selected-block {
    margin-bottom: 16px;
    padding: 8px 16px;
    font-size: 16px;
  }
  .input-text-block {
    width: 325px;
    padding: 2 * $module 4 * $module;
    box-shadow: none;
    font-size: 16px;
  }
}

.option-block {
  padding: 2 * $module;
  font-size: 16px;
}
</style>