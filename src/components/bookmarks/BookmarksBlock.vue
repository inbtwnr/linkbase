<template>
  <div class="bookmarks-block">
    <block-heading :blcHeader="currentCategory"></block-heading>
    <bookmarks-list
      :bookmarks="bookmarks"
      :notice="this.$store.state.isLinks"
    ></bookmarks-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlockHeading from "@/components/BlockHeading.vue";
import BookmarksList from "./BookmarksList.vue";
export default {
  components: {
    BookmarksList,
    BlockHeading,
  },
  props: ["bookmarks"],
  computed: {
    ...mapGetters(["currentCategory"]),
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
  .bookmarks-block {
    display: flex;
    width: 1000px;
    flex-direction: column;
    margin-bottom: 64px;
  }
}
</style>