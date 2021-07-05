<template>
  <div>
    <div :class="{ 'popup-screen': newShelf.isNewShelf }">
      <popup
        :buttonTrigger="newShelf.isNewShelf"
        :TogglePopup="ToggleNewShelfPopup"
        :popupName="newShelf.newShelfHeader"
        ><input-text
          :labelMessage="newShelf.newShelfLabelMessage"
          :inputPlaceHolder="newShelf.newShelfInputPlaceHolder"
        ></input-text>
        <button class="confirm-button" @click="ToggleNewShelfPopup">
          <p class="paragraph-secondary">Add</p>
        </button>
      </popup>
    </div>
    <div :class="{ 'popup-screen': newBookmark.isNewBookmark }">
      <popup
        :buttonTrigger="newBookmark.isNewBookmark"
        :TogglePopup="ToggleNewBookmarkPopup"
        :popupName="newBookmark.newBookmarkHeader"
      >
        <input-text
          :labelMessage="newBookmark.newBookmarkLabelMessage"
          :inputPlaceHolder="newBookmark.newBookmarkInputPlaceHolder"
        ></input-text>
        <button class="confirm-button" @click="ToggleNewBookmarkPopup">
          <p class="paragraph-secondary">Add</p>
        </button>
      </popup>
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
import Popup from "./Popup.vue";
import InputText from "./InputText.vue";
export default {
  components: {
    Popup,
    InputText,
  },
  props: ["username"],
  data() {
    return {
      newShelf: {
        isNewShelf: false,
        newShelfHeader: "New Shelf",
        newShelfLabelMessage: "Give a name of shelf",
        newShelfInputPlaceHolder: "Shelf Name",
      },
      newBookmark: {
        isNewBookmark: false,
        newBookmarkHeader: "New Bookmark",
        newBookmarkLabelMessage: "Give a name of bookmark",
        newBookmarkInputPlaceHolder: "Bookmark Name",
      },
    };
  },
  methods: {
    ToggleNewShelfPopup() {
      this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
    },
    ToggleNewBookmarkPopup() {
      this.newBookmark.isNewBookmark = !this.newBookmark.isNewBookmark;
    },
    closeHome() {
      this.$store.dispatch("increment");
      this.$router.push("/");
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
      padding: 4 * $module 2 * $module;
      margin-right: 24px;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
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
</style>