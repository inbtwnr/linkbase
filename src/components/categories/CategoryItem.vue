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
    &:hover {
      background: #ececec;
      .category-options__btn {
        &:hover {
          background: #e0e0e0;
        }
      }
    }
  }
  .category-plate {
    margin-right: 3 * $module;
    margin-bottom: 3 * $module;
    padding: 2 * $module 3 * $module;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    border-radius: 2 * $module;
    .paragraph-primary {
      margin: 0;
      margin-right: 2 * $module;
    }
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .category-options__btn {
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    .category-options__btn__points {
      display: flex;
      z-index: 50;
      padding: 6.5px 1px 7.5px 1px;
      &:hover {
        background: #e7e5e5;
        padding: 6.5px 1px 7.5px 1px;
        border-radius: $module;
      }
      .category-options__btn__points__point {
        width: $module;
        height: $module;
        background: #747474;
        margin-right: $module / 2;
        border-radius: $module / 2;
      }
      :first-child {
        margin-left: $module / 2;
      }
    }
  }
  .popup-block {
    background: #fff;
    padding: 24px 38px;
    border-radius: 4px;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
    z-index: 99;
  }
  .empty {
    display: none;
  }
  .popup-block__header-line {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: baseline;
    p {
      margin: 0;
    }
  }
  .popup-close {
    cursor: pointer;
    color: #3283fe;
  }
  .confirm-button {
    cursor: pointer;
    background-color: #3283fe;
    border: none;
    color: white;
    padding: 2 * $module 3 * $module;
    border-radius: $module;
    .paragraph-secondary {
      margin: 0;
      font-size: 13px;
    }
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
    margin-right: 3 * $module;
    margin-bottom: 3 * $module;
    padding: $module 3 * $module;
    border-radius: $module;
  }
}
</style>