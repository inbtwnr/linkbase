<template>
  <div class="category-block">
    <block-heading
      :blcHeader="categoryInf.categoryHeader"
      :isShelfHeading="ShelfHeadingTrigger"
      :isBookmarkHeading="false"
    ></block-heading>
    <category-list :categories="categories"></category-list>
  </div>
</template>

<script>
import BlockHeading from "@/components/BlockHeading.vue";
import CategoryList from "./CategoryList.vue";

export default {
  data() {
    return {
      categoryInf: {
        categoryHeader: "Shelfs",
      },
      ShelfHeadingTrigger: true,
    };
  },
  components: {
    CategoryList,
    BlockHeading,
  },
  props: ["categories"],
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/shelfs styles/_shelfs.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .category-block {
    display: flex;
    width: 320px;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
    flex-direction: column;
    margin-bottom: 12 * $module;
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .category-block {
    width: 1000px;
    margin-bottom: 12 * $module;
  }
}
</style>