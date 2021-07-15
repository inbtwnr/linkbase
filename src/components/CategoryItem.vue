<template>
  <div>
    <div class="category-plate">
      <p class="paragraph-primary" @click="getUserOneCategoryList(category)">
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
  methods: mapActions(["getUserOneCategoryList"]),

  data() {
    return {
      activeLink: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";

.category-plate {
  padding: $module 3 * $module;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  border-radius: $module;
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

.active-category-plate {
  padding: $module 3 * $module;
  background: #3283fe;
  display: flex;
  align-items: center;
  border-radius: $module;
  .paragraph-primary {
    margin: 0;
    margin-right: 2 * $module;
    color: #f5f5f5;
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
      background: #041a25;
      opacity: 20%;
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
</style>