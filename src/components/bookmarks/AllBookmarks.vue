<template>
  <div class="all-bookmark-category-plate" @click="getAllBookmarks">
    <p class="paragraph-primary">All bookmarks</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getAllBookmarks"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/shelfs styles/_shelfs.scss";

@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .all-bookmark-category-plate {
    padding: 0 3 * $module;
    margin-right: 2 * $module;
    .paragraph-primary {
      margin-right: 2 * $module;
    }
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .all-bookmark-category-plate {
    padding: 0 3 * $module;
    margin-bottom: 3 * $module;
    margin-right: 3 * $module;
    .paragraph-primary {
      margin-right: 2 * $module;
    }
  }
}
</style>