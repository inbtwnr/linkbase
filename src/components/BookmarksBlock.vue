<template>
  <div class="bookmarks-block">
    <block-heading :blcHeader="Bookmarks"></block-heading>
    <bookmarks-list
      :bookmarks="bookmarks"
      :notice="this.$store.state.isLinks"
    ></bookmarks-list>
  </div>
</template>

<script>
import BlockHeading from "./BlockHeading.vue";
import BookmarksList from "./BookmarksList.vue";
export default {
  components: {
    BookmarksList,
    BlockHeading,
  },
  data() {
    return {
      Bookmarks: "Bookmarks",
      categoryInf: {
        categoryHeader: "Bookmarks",
      },
    };
  },
  props: ["bookmarks"],
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";

.bookmarks-block {
  display: flex;
  width: 1000px;
  flex-direction: column;
  margin-bottom: 64px;
}
</style>