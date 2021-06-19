<template>
  <div class="bookmark-block">
    <div class="bookmark-block__logo-section">
      <img
        :src="`${bookmarkLogo}`"
        class="bookmark-block__logo-section__logo"
        alt="photo where???"
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
        <p class="paragraph-secondary" @click="ToogleBookmark">Delete</p>
      </div>
      <div :class="{ 'bookmark-block__popup': isPopup, empty: !isPopup }">
        Hello
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "bookmarkLogo",
    "bookmarkHeader",
    "bookmarkDescription",
    "bookmarkLink",
    "bookmarkDate",
    "isPopup",
  ],
  methods: {
    ToogleBookmark() {
      this.isPopup = !this.isPopup;
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
</style>