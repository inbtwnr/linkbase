<template>
  <div class="promo-block">
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
        <p class="promo-text">Linkbase. Bookmark Storage</p>
      </div>
    </div>
  </div>
</template>

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
    background: #fff;
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
    justify-content: center;
  }
  .promo-container {
    display: flex;
    flex-direction: column;
  }
  .promo-text {
    font-size: 96px;
    width: 60%;
    font-weight: 800;
    line-height: 110%;
  }
  .promo-block__main {
    width: 1000px;
  }

  .login-button {
    padding: 1 * $module 3 * $module;
    background: #fff;
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
</style>