<template>
  <div :class="{ 'popup-screen': this.$store.state.isNewBookmark }">
    <form
      :class="{
        'popup-block': this.$store.state.isNewBookmark,
        empty: !this.$store.state.isNewBookmark,
      }"
      @submit.prevent="submit"
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
      <button type="submit" class="confirm-button">
        <p class="paragraph-secondary">Add</p>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      newBookmarkHeader: "New Bookmark",
      newBookmarkLabelMessage: "Choose a shelf and name the new bookmark",
      newBookmarkInputPlaceHolder: "Link",
      bookmarkTitle: "",
      categoryId: "",
      selected: "",
    };
  },
  methods: {
    ...mapMutations(["updateIsNewBookmark"]),
    ...mapActions(["createBookmark"]),
    ToggleNewBookmarkPopup() {
      this.updateIsNewBookmark(!this.$store.state.isNewBookmark);
    },
    async submit() {
      await this.createBookmark([this.bookmarkTitle, this.selected]);
      this.bookmarkTitle = "";
      this.selected = "";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
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
}
</style>