<template>
  <div class="login-block">
    <form class="login-block__form" @submit.prevent="loginSubmit()">
      <router-link to="/"> Back </router-link>
      <div class="login-block__form__title-block">
        <h1 class="header-1">{{ msg }}</h1>
      </div>
      <div class="login-block__form__inputs-block">
        <!-- email input and errors -->
        <input
          type="text"
          v-model="email"
          class="paragraph-primary"
          placeholder="email"
        />
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              invalidEmailError,
          }"
        >
          <p class="paragraph-secondary">Format of email is invalid.</p>
        </div>
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              userNotFoundError,
          }"
        >
          <router-link to="/signup" class="paragraph-secondary"
            >User not found. Have no account? Register here</router-link
          >
        </div>
        <!-- password input and errors -->
        <input
          type="password"
          v-model="password"
          class="paragraph-primary"
          placeholder="password"
        />
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              invalidPasswordError,
          }"
        >
          <p class="paragraph-secondary">Format of password is invalid.</p>
        </div>
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              incorrectPasswordError,
          }"
        >
          <p class="paragraph-secondary">Password is wrong, try again.</p>
        </div>
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              invalidEmailPasswordError,
          }"
        >
          <p class="paragraph-secondary">
            Format of email and password is invalid. Pull yourself together!
          </p>
        </div>
      </div>
      <div class="login-block__form__submit-block">
        <input type="submit" :value="buttonText" class="paragraph-primary" />
      </div>
    </form>
    <div class="login-block__links">
      <router-link to="/signup" class="paragraph-secondary"
        >Have no account? Register here</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "Welcome to Linkbase",
      email: "",
      password: "",
      buttonText: "Login",
    };
  },
  methods: {
    ...mapActions(["loginClick"]),
    loginSubmit() {
      this.buttonText = "Waiting...";
      this.loginClick([this.email, this.password]);
    },
  },
  computed: {
    ...mapGetters([
      "invalidEmailError",
      "invalidPasswordError",
      "invalidEmailPasswordError",
      "incorrectPasswordError",
      "userNotFoundError",
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";

.login-block {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  h1 {
    margin: 0;
    padding: 0;
  }
}

.login-block__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29%;
  margin-bottom: 8 * $module;
}

.login-block__form__title-block {
  width: 67%;
  display: flex;
  justify-content: center;
  margin-bottom: 8 * 4px;
}

.login-block__form__inputs-block {
  display: flex;
  flex-direction: column;
  width: 67%;
  margin-bottom: 8 * $module;
  :first-child {
    margin-bottom: 2 * $module;
  }
  input {
    padding: $module 2 * $module;
    border-radius: $module;
    border: 1px solid #e4e4e4;
    background: #fcfcfc;
    &:active,
    &:focus {
      background: #ffffff;
      border: 1px solid #1e9deb;
      border-radius: $module;
    }
    &:hover {
      background: #ffffff;
    }
  }
}

.login-block__form__submit-block {
  width: 67%;
  display: flex;
  justify-content: center;
  input {
    border: 0;
    padding: 2 * $module 2 * $module;
    width: 100%;
    border-radius: 50vh;
    color: #ffffff;
    background: #1e9deb;
    &:hover {
      background: #1084cc;
    }
  }
}

.signup-block__form__inputs-block__error-notice {
  display: none;
}

.signup-block__form__inputs-block__error-ntc__activated {
  display: block;
  color: red;
  .paragraph-secondary {
    margin-top: 0px;
    margin-bottom: 2 * $module;
  }
}

.login-block__links {
  width: 19.333333%;
}
</style>