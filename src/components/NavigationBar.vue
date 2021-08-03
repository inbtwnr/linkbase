<template>
  <div>
    <new-shelf-popup></new-shelf-popup>
    <new-bookmark-popup></new-bookmark-popup>
    <div class="home-navigation-bar-block">
      <div class="home-navigation-bar-block__logo-and-addings">
        <p class="paragraph-primary">Linkbase</p>
        <div class="paragraph-primary" @click="ToggleNewShelfPopup">
          Add shelf
        </div>
        <div class="paragraph-primary" @click="ToggleNewBookmarkPopup">
          Add bookmark
        </div>
      </div>
      <div
        class="home-navigation-bar-block__username-and-exit"
        @click="closeHome"
      >
        {{ username }}, Log out
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import NewShelfPopup from "@/components/popups/NewShelfPopup.vue";
import NewBookmarkPopup from "@/components/popups/NewBookmarkPopup.vue";
export default {
  components: {
    NewShelfPopup,
    NewBookmarkPopup,
  },
  props: ["username"],
  data() {
    return {
      newShelfHeader: "New Shelf",
      newShelfLabelMessage: "Give a name of shelf",
      newShelfInputPlaceHolder: "Shelf Name",
      categoryTitle: "",

      newBookmarkHeader: "New Bookmark",
      newBookmarkLabelMessage: "Give a name of bookmark",
      newBookmarkInputPlaceHolder: "Link",
      bookmarkTitle: "",
      categoryId: "",

      user: null,
      selected: null,
    };
  },
  methods: {
    ...mapMutations(["updateIsNewShelf", "updateIsNewBookmark"]),
    ...mapActions(["deleteEverything"]),
    ToggleNewShelfPopup() {
      this.updateIsNewShelf(!this.$store.state.isNewShelf);
    },
    ToggleNewBookmarkPopup() {
      this.updateIsNewBookmark(!this.$store.state.isNewBookmark);
    },
    submit() {
      this.createCategory();
    },
    async closeHome() {
      await this.deleteEverything();
      this.$router.push("/");
    },
    chooseCategory(category) {
      console.log("from chooseCategory");
      this.newBookmark.categoryId = category._id;
      console.log(this.newBookmark.categoryId);
    },
  },
  computed: {
    ...mapGetters(["getUserCategories"]),
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/otherComponentStyles/_navigation-bar.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .home-navigation-bar-block {
    margin-bottom: 12 * $module;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
    .home-navigation-bar-block__logo-and-addings {
      display: flex;
      margin: 0;
      padding: 0;
      p {
        margin: 0;
        padding: 4 * $module 0;
        margin-right: 24px;
      }
      div {
        color: #105cf4;
        padding: 4 * $module 2 * $module;
        margin-right: 24px;
        cursor: pointer;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        &:hover {
          color: #7aa6ff;
        }
      }
      :last-child {
        margin-right: 0;
      }
    }

    .home-navigation-bar-block__username-and-exit {
      margin: 4 * $module 0;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
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
  .home-navigation-bar-block {
    margin-bottom: 12 * $module;
    .home-navigation-bar-block__logo-and-addings {
      p {
        padding: 4 * $module 0;
        margin-right: 6 * $module;
      }
      div {
        padding: 4 * $module 2 * $module;
        margin-right: 6 * $module;
      }
    }
    .home-navigation-bar-block__username-and-exit {
      margin: 4 * $module 0;
      padding: 2 * $module 2 * $module;
    }
  }
}
</style>