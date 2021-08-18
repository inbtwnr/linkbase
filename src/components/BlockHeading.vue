<template>
  <div
    :class="{
      'shelf-block-heading-block': isShelfHeading,
      'bookmark-block-heading-block': isBookmarkHeading,
    }"
  >
    <p class="header-1">{{ blcHeader }}</p>
  </div>
</template>

<script>
export default {
  props: ["blcHeader", "isShelfHeading", "isBookmarkHeading", "classLiner"],
};
</script>

<style lang="scss">
@import "@/assets/styles/other component styles/_block-heading.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
}
</style>