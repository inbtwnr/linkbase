<template>
  <div class="category-wrapper">
    <div class="category-plate">
      <p class="paragraph-primary" @click="getUserBookmarks(category)">
        {{ nameLink }}
      </p>
      <div class="category-options__btn">
        <div
          class="category-options__btn__points"
          @click="$emit('button-trigger')"
        >
          <div class="category-options__btn__points__point"></div>
          <div class="category-options__btn__points__point"></div>
          <div class="category-options__btn__points__point"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["nameLink", "category"],
  methods: {
    ...mapActions(["getUserBookmarks"]),
  },

  data() {
    return {
      activeLink: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/shelfs styles/_shelfs.scss";

@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .category-plate {
    padding: $module 2 * $module;
    border-radius: $module;
    .paragraph-primary {
      margin-right: 2 * $module;
    }
  }
  .category-options__btn {
    .category-options__btn__points {
      padding: 6.5px 1px 7.5px 1px;
      &:hover {
        padding: 6.5px 1px 7.5px 1px;
      }
      .category-options__btn__points__point {
        width: $module;
        height: $module;
        margin-right: $module / 2;
        border-radius: $module / 2;
      }
    }
  }
  .category-list {
    overflow-x: auto;
    div {
      display: inline-flex;
      .category-plate {
        margin-right: 2 * $module;
      }
    }
  }
  .category-list::-webkit-scrollbar {
    display: none;
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 767px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .category-plate {
    padding: $module 3 * $module;
    border-radius: $module;
    margin-right: 3 * $module;
    margin-bottom: 3 * $module;
    .paragraph-primary {
      margin-right: 2 * $module;
    }
  }
  .category-options__btn {
    .category-options__btn__points {
      padding: 6.5px 1px 7.5px 1px;
      &:hover {
        padding: 6.5px 1px 7.5px 1px;
      }
      .category-options__btn__points__point {
        width: $module;
        height: $module;
        margin-right: $module / 2;
        border-radius: $module / 2;
      }
    }
  }
  .category-list {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>