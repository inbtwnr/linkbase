<template>
  <div>
    <div class="button-block">
      <p class="header-2">{{ blcHeader }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["blcHeader"],
};
</script>

<style lang="scss">
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
  .button-block {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-right: 6 * $module;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }
  hr {
    border: 1px solid #f1f1f1;
    margin-top: 4 * $module;
    margin-bottom: 6 * $module;
  }
}
</style>