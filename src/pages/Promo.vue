<template>
  <div class="promo-block">
    <div class="promo-container">
      <div class="navigaion-bar-block">
        <div class="navigaion-bar-block__logo">
          <p class="paragraph-primary">Linkbase</p>
        </div>
        <div class="navigaion-bar-block__login-and-signup">
          <div class="paragraph-primary">
            <router-link to="login">Sign In</router-link>
          </div>
          <div class="paragraph-primary">
            <router-link to="signup">Sign up</router-link>
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
.navigaion-bar-block {
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin-bottom: 48px;
  .navigaion-bar-block__logo {
    display: flex;
    margin: 0;
    padding: 0;
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
    :first-child {
      margin-right: 4 * $module;
    }
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
</style>