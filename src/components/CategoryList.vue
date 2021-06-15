<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <category-item :ctgrName="categories.ctgrName"></category-item>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        {
          ctgrName: "English",
        },
      ],
    };
  },
};
</script>

<style>
</style>