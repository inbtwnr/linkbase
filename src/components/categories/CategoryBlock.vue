<template>
  <div class="category-block">
    <block-heading :blcHeader="categoryInf.categoryHeader"></block-heading>

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

.category-block {
  display: flex;
  width: 1000px;
  flex-direction: column;
  margin-bottom: 12 * $module;
}
</style>