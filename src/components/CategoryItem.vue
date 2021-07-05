<template>
  <div class="category-plate">
    <p class="paragraph-primary">{{ nameLink }}</p>
    <div class="category-options__btn">
      <div class="category-options__btn__points">
        <div class="category-options__btn__points__point"></div>
        <div class="category-options__btn__points__point"></div>
        <div class="category-options__btn__points__point"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nameLink", "idLink"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";

.category-plate {
  padding: $module 3 * $module;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  border-radius: $module;
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

.category-options__btn {
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  .category-options__btn__points {
    display: flex;
    .category-options__btn__points__point {
      width: $module;
      height: $module;
      background: #041a25;
      opacity: 20%;
      margin-right: $module / 2;
      border-radius: $module / 2;
    }
  }
}
</style>