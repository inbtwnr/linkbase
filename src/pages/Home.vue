<template>
  <div v-if="token" class="home-block">
    <div class="home-block-container">
      <navigation-bar :username="userName"></navigation-bar>
      <category-block :categories="userCategories"></category-block>
      <bookmarks-block :bookmarks="userBookmarks"></bookmarks-block>
    </div>
  </div>
  <div v-else>
    <div class="home-block-container">
      <div :hover="directToLogin()" class="no-token-block"></div>
    </div>
  </div>
</template>
<script>
import bookmarksBlock from "@/components/bookmarks/BookmarksBlock.vue";
import categoryBlock from "@/components/categories/CategoryBlock.vue";
import NavigationBar from "@/components/NavigationBar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  computed: {
    ...mapGetters(["userCategories", "userName", "userBookmarks"]),
  },
  methods: {
    ...mapActions(["getUserCategories", "getUserName", "getUserBookmarks"]),
    directToLogin() {
      this.$router.push("login");
    },
  },
  mounted() {
    try {
      this.getUserCategories();
      this.getUserName();
      this.getUserBookmarks();
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
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
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
  .no-token-block {
    width: 100%;
    height: 100%;
  }
}
</style>