<template>
  <div v-if="!promoPagePic && !promoPageBookmarks && !promoPageShelfs">
    <div class="loading-screen">
      <img src="@/assets/spinner.svg" />
    </div>
  </div>
  <div v-else class="promo-block">
    <div class="promo-container">
      <div class="promo-navigation-bar-block">
        <div class="promo-navigation-bar-block__logo">
          <p class="paragraph-primary">Linkbase</p>
        </div>
        <div class="promo-navigation-bar-block__login-and-signup">
          <div class="promo-login-button">
            <router-link class="paragraph-primary" to="login"
              >Login</router-link
            >
          </div>
          <div class="promo-signup-button">
            <router-link class="paragraph-primary" to="signup"
              >Sign up</router-link
            >
          </div>
        </div>
      </div>
      <div class="promo-block__main">
        <div class="promo-greet">
          <p class="promo-header">Linkbase. Bookmark storage</p>
          <p class="promo-sub-header">Storage of links in the web</p>
        </div>
        <img class="promo-page-img" :src="promoPagePic" alt="" />
        <div class="promo-create-block">
          <p class="promo-create-block__header">Save links</p>
          <p class="promo-create-block__text">
            Link manager that keeps your links in one place. You can save it in
            some category and use when you need it.
          </p>
          <img :src="promoPageBookmarks" alt="" />
        </div>
        <div class="promo-create-block">
          <p class="promo-create-block__header">Group links</p>
          <p class="promo-create-block__text">
            Every link should have a category. Make groups of links and share
            with friends!
          </p>
          <img :src="promoPageShelfs" alt="" />
        </div>
        <div class="promo-create-block">
          <p class="promo-create-block__header">Try on your own</p>
          <div class="direct-to-login-button">
            <router-link to="signup">Sign up on Linkbase</router-link>
          </div>
        </div>
      </div>
      <div class="promo-footer">
        Design, frontend — Sasha Prysyazhnii, backend — Daniel Karshai
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promoPagePic: require("@/assets/promo/page.svg"),
      promoPageBookmarks: require("@/assets/promo/bookmarks.png"),
      promoPageShelfs: require("@/assets/promo/shelfs.png"),
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
@import "@/assets/styles/_main.scss";
@import "@/assets/styles/pages/_home.scss";
@import "@/assets/styles/other component styles/_navigation-bar.scss";
@import "@/assets/styles/pages/_promo.scss";

@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .navigaion-bar-block {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 48px;
    .navigaion-bar-block__logo {
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
      p {
        margin: 0;
        padding: 4 * $module 0;
        margin-right: 24px;
      }
      div {
        padding: 4 * $module 2 * $module;
        margin-right: 24px;
        cursor: pointer;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      :last-child {
        margin-right: 0;
      }
    }

    .navigaion-bar-block__login-and-signup {
      margin: 4 * $module 0;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      display: flex;
      align-items: center;
    }
  }
  .promo-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
    box-sizing: border-box;
  }
  .promo-container {
    display: flex;
    flex-direction: column;
  }
  .promo-text {
    font-size: 24px;
    width: 60%;
    font-weight: 800;
    line-height: 110%;
  }
  .promo-block__main {
    width: 100%;
  }

  .login-button {
    padding: 1 * $module 3 * $module;

    border-radius: 9 * $module;
    a {
      text-decoration: none;
      font-weight: 500;
      color: #000;
    }
    &:hover {
      padding: 1 * $module 3 * $module;
      background: #f3f3f3;
      border-radius: 9 * $module;
    }
    margin-right: 4 * $module;
  }
  .signup-button {
    padding: 1 * $module 3 * $module;
    background: #3283fe;
    border-radius: 9 * $module;
    a {
      text-decoration: none;
      font-weight: 500;
      color: #fff;
    }
    &:hover {
      padding: 1 * $module 3 * $module;
      background: #236ddb;
      border-radius: 9 * $module;
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
  .promo-navigation-bar-block {
    width: 1000px;
    margin-bottom: 32 * $module;
    .promo-navigation-bar-block__logo {
      p {
        padding: 4 * $module 0;
        margin-right: 6 * $module;
      }
      div {
        padding: 4 * $module 2 * $module;
        margin-right: 24px;
      }
    }
    .promo-navigation-bar-block__login-and-signup {
      margin: 4 * $module 0;
    }
  }
  .promo-login-button {
    padding: 1 * $module 3 * $module;
    border-radius: 9 * $module;
    margin-right: 4 * $module;
    &:hover {
      padding: 1 * $module 3 * $module;
      background: #e9ebf5;
      border-radius: 9 * $module;
    }
  }
  .promo-signup-button {
    padding: 1 * $module 3 * $module;
    background: $promo-button-standart;
    border-radius: 9 * $module;
    &:hover {
      padding: 1 * $module 3 * $module;
      background: $promo-button-hover;
      border-radius: 9 * $module;
    }
  }
  .promo-header {
    font-size: 72px;
    width: 610px;
    margin-bottom: 12 * $module;
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 100%;
  }
  .promo-sub-header {
    font-size: 36px;
    width: 610px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -1.6px;
  }
  .promo-block__main {
    width: 1000px;
    margin-bottom: 24 * $module;
  }
  .promo-greet {
    margin-bottom: 24 * $module;
  }
  .promo-page-img {
    width: 797px;
    margin-bottom: 24 * $module;
  }
  .promo-create-block {
    margin-bottom: 24 * $module;
  }
  .promo-create-block__header {
    font-size: 36px;
    letter-spacing: -1.6px;
    font-weight: 700;
    margin-bottom: 4 * $module;
  }
  .promo-create-block__text {
    font-size: 18px;
    letter-spacing: -0.3px;
    width: 360px;
    line-height: 150%;
    margin-bottom: 12 * $module;
  }
  .direct-to-login-button {
    padding: 4 * $module 6 * $module;
    border-radius: 6 * $module;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.3;
    margin-top: 8 * $module;
    a {
      font-weight: 600;
      font-size: 24px;
    }
  }
  .promo-footer {
    margin-bottom: 12 * $module;
  }
}
</style>