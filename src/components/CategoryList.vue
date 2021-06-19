<template>
  <div class="category-list">
    <div v-for="(category, index) in categories" :key="index">
      <category-item :name="category.ctgrName"></category-item>
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
        {
          ctgrName: "Work",
        },
        {
          ctgrName: "Programming tips",
        },
        {
          ctgrName: "Entertaintment",
        },
        {
          ctgrName: "Music",
        },
        {
          ctgrName: "Cool websites",
        },
        {
          ctgrName: "Cool mags",
        },
        {
          ctgrName: "Movies",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
.category-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  :last-child {
    margin-right: 0;
  }
  div {
    .category-plate {
      margin-right: 3 * $module;
      margin-bottom: 3 * $module;
    }
  }
}
</style>