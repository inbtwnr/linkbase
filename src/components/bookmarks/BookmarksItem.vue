<template>
  <div class="bookmark-block">
    <div class="bookmark-block__logo-section">
      <a :href="`${bookmarkLink}`" target="_blank">
        <img
          :src="`${bookmarkLogo}`"
          class="bookmark-block__logo-section__logo"
          alt=""
        />
      </a>
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
          class="bookmark-block__informartion-section__secondary__link"
          ><p class="paragraph-secondary">{{ bookmarkSharedLink }}</p>
        </a>
        <p class="paragraph-secondary">{{ bookmarkDate }}</p>
        <form>
          <div @click="$emit('button-trigger')" class="confirm-button-edit">
            <p class="paragraph-secondary">change shelf</p>
          </div>
        </form>
        <form @submit.prevent="$emit('delete-button')">
          <button type="submit" class="confirm-button-delete">
            <p class="paragraph-secondary">delete</p>
          </button>
        </form>
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
    "bookmark",
    "bookmarkSharedLink",
  ],
  data() {
    return {
      bookmarkReq: null,
      currentBookmarkId: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .bookmark-block {
    display: flex;
    align-items: stretch;
    padding: 3 * $module 2 * $module;
    margin-bottom: 6 * $module;
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
      margin-right: 5 * $module;
      cursor: pointer;
    }
    a {
      margin-right: 5 * $module;
      text-decoration: none;
      color: #105cf4;
      :visited {
        color: #105cf4;
      }
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
    line-height: 160%;

    .paragraph-secondary {
      color: #c4082e;
      font-size: 16px;
      font-family: $main-font-family;
      margin-right: 5 * $module;
      line-height: 160%;
    }
  }
  .confirm-button-edit {
    cursor: pointer;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    .paragraph-secondary {
      font-size: 16px;
      font-family: $main-font-family;
      margin-right: 5 * $module;
      line-height: 160%;
    }
  }
  .bookmark-block__informartion-section__secondary__link {
    max-width: 400px;
    .paragraph-secondary {
      word-wrap: break-word;
    }
  }
}
</style>