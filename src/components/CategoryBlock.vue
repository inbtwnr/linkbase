<template>
  <div class="category-block">
    <block-heading
      :btnText="categoryInf.buttonText"
      :blcHeader="categoryInf.categoryHeader"
    ></block-heading>
    <category-list :categories="categories"></category-list>
  </div>
</template>

<script>
import BlockHeading from "./BlockHeading.vue";
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
  margin-bottom: 64px;
}
</style>