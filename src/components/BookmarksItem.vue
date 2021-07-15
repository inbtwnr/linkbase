<template>
  <div class="bookmark-block">
    <div class="bookmark-block__logo-section">
      <img
        :src="`${bookmarkLogo}`"
        class="bookmark-block__logo-section__logo"
        alt=""
      />
    </div>
    <div class="bookmark-block__informartion-section">
      <div class="bookmark-block__informartion-section__primary">
        <a :href="`${bookmarkLink}`" target="_blank">
          <p class="header-2">{{ bookmarkHeader }}</p>
        </a>
        <p class="paragraph-primary">{{ bookmarkDescription }}</p>
      </div>
      <div class="bookmark-block__informartion-section__secondary">
        <a
          :href="`${bookmarkLink}`"
          target="_blank"
          class="paragraph-secondary"
          >{{ bookmarkLink }}</a
        >
        <p class="paragraph-secondary">{{ bookmarkDate }}</p>
        <form>
          <button
            type="submit"
            class="confirm-button-delete"
            @click="deleteBookmark(bookmark)"
          >
            <p class="paragraph-secondary">delete</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: [
    "bookmarkLogo",
    "bookmarkHeader",
    "bookmarkDescription",
    "bookmarkLink",
    "bookmarkDate",
    "isPopup",
    "bookmark",
  ],
  data() {
    return {
      bookmarkReq: null,
      currentBookmarkId: "",
    };
  },
  methods: {
    async deleteBookmark(bookmark) {
      try {
        this.currentBookmarkId = bookmark._id;
        this.bookmarkReq = await axios.delete(
          `${this.$store.getters.baseURL}bookmark/${this.currentBookmarkId}`,
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.userToken,
            },
          }
        );
        this.isEditBookmark = !this.isEditBookmark;
      } catch (error) {
        console.log(error.data.data.code);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";
.bookmark-block {
  display: flex;
  align-items: stretch;
  padding: 3 * $module 2 * $module;
}
.bookmark-block__logo-section {
  margin-right: 12px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .bookmark-block__logo-section__logo {
    width: 10 * $module;
    height: 10 * $module;
  }
}
.bookmark-block__informartion-section {
  display: flex;
  flex-direction: column;
}
.bookmark-block__informartion-section__primary {
  width: 500px;
  margin: 0 0 3 * $module 0;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    margin: 0;
    margin-bottom: 3 * $module;
  }
}
.bookmark-block__informartion-section__secondary {
  display: flex;
  p {
    margin: 0;
    margin-right: 3 * $module;
    cursor: pointer;
  }
  a {
    margin-right: 3 * $module;
  }
  :last-child {
    margin-right: 0;
  }
}
.bookmark-block__popup {
  padding: 24px;
  position: relative;
  display: inline-block;
  z-index: 99;
}
.empty {
  display: none;
}
.confirm-button-delete {
  cursor: pointer;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
}
</style>