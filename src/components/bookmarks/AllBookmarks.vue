<template>
  <div class="category-plate" @click="getAllBookmarks">
    <p class="paragraph-primary">All bookmarks</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getAllBookmarks"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .category-plate {
    margin-right: 3 * $module;
    margin-bottom: 3 * $module;
    padding: 2 * $module 3 * $module;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    border-radius: 2 * $module;
    &:hover {
      background: #ececec;
    }
    .paragraph-primary {
      margin: 0;
      margin-right: 2 * $module;
    }
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .category-plate {
    padding: 0 3 * $module;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    border-radius: $module;
    margin-bottom: 3 * $module;
    margin-right: 3 * $module;
    &:hover {
      background: #ececec;
    }
    .paragraph-primary {
      margin: 0;
      margin-right: 2 * $module;
    }
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
}
</style>