<template>
  <div class="home-block">
    <div class="home-block-container">
      <navigation-bar :username="userName"></navigation-bar>
      <category-block :categories="userCategories"></category-block>
      <bookmarks-block :bookmarks="userOneCategoryList"></bookmarks-block>
    </div>
  </div>
</template>
<script>
import bookmarksBlock from "@/components/BookmarksBlock.vue";
import categoryBlock from "@/components/CategoryBlock.vue";
import NavigationBar from "@/components/NavigationBar.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: mapGetters(["userCategories", "userName", "userOneCategoryList"]),
  methods: mapActions([
    "getUserCategories",
    "getUserName",
    "getUserOneCategoryList",
  ]),
  async mounted() {
    try {
      this.getUserCategories();
      this.getUserName();
      this.getUserOneCategoryList();
    } catch (error) {
      console.log(error.response.data);
    }
  },
  components: {
    categoryBlock,
    bookmarksBlock,
    NavigationBar,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/_fonts.scss";
.home-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home-block-container {
  display: block;
  .home-block-container__main-header {
    margin: 16 * $module 0;
    p {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      margin: 0;
    }
  }
}
</style>