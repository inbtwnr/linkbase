<template>
  <div>
    <div :class="{ 'popup-screen': newShelf.isNewShelf }">
      <form
        :class="{
          'popup-block': newShelf.isNewShelf,
          empty: !newShelf.isNewShelf,
        }"
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
        <button type="submit" class="confirm-button" @click="createCategory">
          <p class="paragraph-secondary">Add</p>
        </button>
      </form>
    </div>
    <div :class="{ 'popup-screen': newBookmark.isNewBookmark }">
      <form
        :class="{
          'popup-block': newBookmark.isNewBookmark,
          empty: !newBookmark.isNewBookmark,
        }"
      >
        <div class="popup-block__header-line">
          <p class="header-2">{{ newBookmark.newBookmarkHeader }}</p>
          <div class="popup-close" @click="ToggleNewBookmarkPopup">Cancel</div>
        </div>
        <div class="input-block">
          <p>{{ newBookmark.newBookmarkLabelMessage }}</p>
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
            :placeholder="newBookmark.newBookmarkInputPlaceHolder"
            v-model="newBookmark.bookmarkTitle"
          />
        </div>
        <button type="submit" class="confirm-button" @click="createBookmark">
          <p class="paragraph-secondary">Add</p>
        </button>
      </form>
    </div>
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
import axios from "axios";

export default {
  props: ["username"],
  data() {
    return {
      newShelf: {
        isNewShelf: false,
        newShelfHeader: "New Shelf",
        newShelfLabelMessage: "Give a name of shelf",
        newShelfInputPlaceHolder: "Shelf Name",
        categoryTitle: "",
      },
      newBookmark: {
        isNewBookmark: false,
        newBookmarkHeader: "New Bookmark",
        newBookmarkLabelMessage: "Give a name of bookmark",
        newBookmarkInputPlaceHolder: "Link",
        bookmarkTitle: "",
        categoryId: "",
      },
      user: null,
      selected: null,
    };
  },
  methods: {
    ToggleNewShelfPopup() {
      this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
    },
    ToggleNewBookmarkPopup() {
      this.newBookmark.isNewBookmark = !this.newBookmark.isNewBookmark;
    },
    async createCategory() {
      try {
        const data = {
          title: this.newShelf.categoryTitle,
        };
        await axios.post(`${this.$store.getters.baseURL}category/`, data, {
          headers: {
            Authorization: "Bearer " + this.$store.getters.userToken,
          },
        });
        console.log("after creating category");
      } catch (error) {
        console.log(error.response.data.code);
      }

      this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
    },
    async createBookmark() {
      try {
        console.log(this.newBookmark.bookmarkTitle);
        console.log(this.selected.id);
        const data = {
          link: this.newBookmark.bookmarkTitle,
          category: this.selected.id,
        };
        await axios.post(`${this.$store.getters.baseURL}bookmark/`, data, {
          headers: {
            Authorization: "Bearer " + this.$store.getters.userToken,
          },
        });
        console.log("after creating bookmark");
        this.newBookmark.isNewBookmark = !this.newBookmark.isNewBookmark;
      } catch (error) {
        console.log(error.response.data.code);
      }
    },
    closeHome() {
      this.$router.push("/");
    },
    chooseCategory(category) {
      console.log("from chooseCategory");
      this.newBookmark.categoryId = category._id;
      console.log(this.newBookmark.categoryId);
    },
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