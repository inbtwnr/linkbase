<template>
  <div v-if="promoSpinnerTrigger">
    <div class="loading-screen">
      <img src="@/assets/spinner.svg" alt="" />
    </div>
  </div>
  <div v-else class="promo-block">
    <div class="promo-container">
      <div class="navigaion-bar-block">
        <div class="navigaion-bar-block__logo">
          <p class="paragraph-primary">Linkbase</p>
        </div>
        <div class="navigaion-bar-block__login-and-signup">
          <div class="login-button">
            <router-link class="paragraph-primary" to="login"
              >Login</router-link
            >
          </div>
          <div class="signup-button">
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
        <img class="promo-page-img" src="@/assets/promo/page.svg" alt="" />
        <div class="promo-create-block">
          <p class="promo-create-block__header">Save links</p>
          <p class="promo-create-block__text">
            Link manager that keeps your links in one place. You can save it in
            some category and use when you need it.
          </p>
          <img src="@/assets/promo/bookmarks.png" alt="" />
        </div>
        <div class="promo-create-block">
          <p class="promo-create-block__header">Group links</p>
          <p class="promo-create-block__text">
            Every link should have a category. Make groups of links and share
            with friends!
          </p>
          <img src="@/assets/promo/shelfs.png" alt="" />
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
      promoSpinnerTrigger: true,
    };
  },
  methods: {
    turnSpinnerOff() {
      this.promoSpinnerTrigger = false;
    },
  },
  mounted() {
    setTimeout(this.turnSpinnerOff, 2000);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_fonts.scss";
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
  .navigaion-bar-block {
    display: flex;
    width: 1000px;
    justify-content: space-between;
    margin-bottom: 32 * $module;
    .navigaion-bar-block__logo {
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
      .paragraph-primary {
        font-weight: 700;
        color: #151c45;
      }
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
    background: #fafbff;
    display: flex;
    justify-content: center;
  }
  .promo-container {
    display: flex;
    flex-direction: column;
  }
  .promo-header {
    font-size: 72px;
    width: 610px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 12 * $module;
    color: #151c45;
    line-height: 100%;
    letter-spacing: -3px;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    text-align: center;
  }
  .promo-sub-header {
    font-size: 36px;
    width: 610px;
    font-weight: 600;
    margin: 0;
    color: #8b9bdb;
    line-height: 100%;
    letter-spacing: -1.6px;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    text-align: center;
  }
  .promo-block__main {
    width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24 * $module;
  }
  .promo-greet {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24 * $module;
  }
  .promo-page-img {
    width: 797px;
    margin-bottom: 24 * $module;
  }
  .promo-create-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24 * $module;
  }
  .promo-create-block__header {
    font-size: 36px;
    letter-spacing: -1.6px;
    font-weight: 700;
    color: #151c45;
    margin: 0;
    margin-bottom: 16px;
  }
  .promo-create-block__text {
    font-size: 18px;
    letter-spacing: -0.3px;
    width: 360px;
    line-height: 150%;
    color: #151c45;
    margin: 0;
    text-align: center;
    margin-bottom: 12 * $module;
  }
  .direct-to-login-button {
    padding: 4 * $module 6 * $module;
    background: #d5dbf2;
    border-radius: 6 * $module;
    color: #151c45;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.3;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 8 * $module;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    a {
      color: #151c45;
      font-weight: 600;
      font-size: 24px;
      text-decoration: none;
    }
    &:hover {
      background: #c1c8e4;
    }
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

      background: #e9ebf5;
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

  .promo-footer {
    margin-bottom: 12 * $module;
    color: #8b9bdb;
  }
}
</style>