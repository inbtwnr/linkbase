<template>
  <div class="home-block">
    <div class="home-block-container">
      <navigation-bar :username="userInfo.username"></navigation-bar>
      <category-block></category-block>
      <bookmarks-block></bookmarks-block>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import bookmarksBlock from "@/components/BookmarksBlock.vue";
import categoryBlock from "@/components/CategoryBlock.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  data() {
    return {
      user: null,
      userInfo: {
        username: "",
      },
    };
  },
  async created() {
    try {
      console.log(this.$store.getters.USER_TOKEN);
      this.user = await axios.get(`${this.$store.getters.BASE_URL}/user/`, {
        headers: {
          Authorization: "Bearer " + this.$store.getters.USER_TOKEN, //the token is a variable which holds the token
        },
      });
      this.userInfo.username = this.user.data.data.username;
      this.$store.commit("SET_TOKEN", this.status.data.token);
      console.log("from getter " + this.$store.getters.USER_TOKEN);
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