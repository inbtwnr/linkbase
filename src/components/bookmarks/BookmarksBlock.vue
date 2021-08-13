<template>
  <div class="bookmarks-block">
    <block-heading
      :blcHeader="currentCategory"
      :isBookmarkHeading="BookmarkHeadingTrigger"
    ></block-heading>
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
  data() {
    return {
      BookmarkHeadingTrigger: true,
    };
  },
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
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/bookmarks styles/_bookmarks.scss";

@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .bookmarks-block {
    width: 320px;
    margin-bottom: 64px;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .bookmarks-block {
    margin-bottom: 16 * $module;
    width: 1000px;
  }
}
</style>