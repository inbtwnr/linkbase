<template>
  <div class="input-block">
    <p>{{ labelMessage }}</p>
    <input
      type="text"
      class="input-text-block"
      :placeholder="inputPlaceHolder"
    />
  </div>
</template>

<script>
export default {
  props: ["labelMessage", "inputPlaceHolder"],
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
.input-block {
  margin-bottom: 8 * $module;
  background: #fff;
  .input-text-block {
    width: 325px;
    padding: 2 * $module 4 * $module;
    box-shadow: none;
    font-size: 16px;
  }
}
</style>