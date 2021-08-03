<template>
  <div
    :class="{
      'shelf-block-heading-block': isShelfHeading,
      'bookmark-block-heading-block': isBookmarkHeading,
    }"
  >
    <p class="header-2">{{ blcHeader }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["blcHeader", "isShelfHeading", "isBookmarkHeading", "classLiner"],
};
</script>

<style lang="scss">
@import "@/assets/styles/otherComponentStyles/_block-heading.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .shelf-block-heading-block {
    hr {
      margin-top: 2 * $module;
      margin-bottom: 4 * $module;
    }
  }
  .bookmark-block-heading-block {
    hr {
      margin-top: 2 * $module;
      margin-block-start: 0;
      margin-block-end: 0.2em;
    }
  }
}
</style>