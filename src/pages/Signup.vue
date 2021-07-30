<template>
  <div class="signup-block">
    <form class="signup-block__form" @submit.prevent="signupSubmit()">
      <router-link to="/" class="back-button"
        ><p class="paragraph-secondary">Back</p></router-link
      >
      <div class="signup-block__form__title-block">
        <h1 class="header-1">{{ msg }}</h1>
      </div>
      <div class="signup-block__form__inputs-block">
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

        <!-- username input and errors -->
        <input
          type="text"
          v-model="name"
          class="paragraph-primary"
          placeholder="user name"
        />
        <div
          class="signup-block__form__inputs-block__error-notice"
          :class="{
            'signup-block__form__inputs-block__error-ntc__activated':
              userExistsError,
          }"
        >
          <router-link to="/login" class="paragraph-secondary"
            >The user is already exist. If you have an account, login
            here</router-link
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
              invalidEmailPasswordError,
          }"
        >
          <p class="paragraph-secondary">
            Formats of email and password are invalid.
          </p>
        </div>
      </div>
      <div class="signup-block__form__submit-block">
        <input type="submit" :value="buttonText" class="paragraph-primary" />
      </div>
    </form>
    <div class="signup-block__links">
      <router-link to="/login" class="bottom-button"
        ><p class="paragraph-secondary">
          Have an account? Login here
        </p></router-link
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
      name: "",
      email: "",
      password: "",
      buttonText: "Sign up",
    };
  },
  methods: {
    ...mapActions(["signupClick"]),
    signupSubmit() {
      this.buttonText = "Waiting...";
      this.signupClick([this.name, this.email, this.password]);
    },
  },
  computed: {
    ...mapGetters([
      "invalidEmailError",
      "invalidPasswordError",
      "invalidEmailPasswordError",
      "userExistsError",
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";
@media screen and (min-device-width: 360px) and (max-device-width: 424px) {
  .signup-block {
    display: flex;
    width: 100%;

    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    h1 {
      margin: 0;
      padding: 0;
    }
  }

  .signup-block__form {
    display: flex;
    flex-direction: column;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 8 * $module;
  }

  .signup-block__form__title-block {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 8 * $module;
  }

  .signup-block__form__inputs-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 8 * $module;
    input {
      padding: 3 * $module 2 * $module;
      border-radius: $module;
      margin-bottom: 2 * $module;
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
    :last-child {
      margin-bottom: 0px;
    }
  }

  .back-button {
    text-decoration: none;
    color: #105cf4;
    margin-bottom: 6 * $module;
    &:hover {
      color: #7aa6ff;
    }
  }

  .bottom-button {
    text-decoration: none;
    color: #105cf4;
    &:hover {
      color: #7aa6ff;
    }
  }

  .signup-block__form__submit-block {
    width: 100%;
    display: flex;
    justify-content: center;
    input {
      border: 0;
      padding: 3 * $module 2 * $module;
      width: 100%;
      border-radius: 50vh;
      background: #1e9deb;
      &:hover {
        background: #1084cc;
      }
      color: #ffffff;
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

  .signup-block__links {
    width: 100%;
    padding-left: 6 * $module;
    padding-right: 6 * $module;
    box-sizing: border-box;
  }
}
@media screen and (min-device-width: 425px) and (max-device-width: 768px) {
}
@media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
}
@media screen and (min-device-width: 1024px) and (max-device-width: 1364px) {
}
@media screen and (min-device-width: 1365px) {
  .signup-block {
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

  .signup-block__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 29%;
    margin-bottom: 8 * $module;
  }

  .signup-block__form__title-block {
    width: 67%;
    display: flex;
    justify-content: center;
    margin-bottom: 8 * 4px;
  }

  .signup-block__form__inputs-block {
    display: flex;
    flex-direction: column;
    width: 67%;
    margin-bottom: 8 * $module;
    input {
      padding: $module 2 * $module;
      margin-bottom: 2 * $module;
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
    :last-child {
      margin-bottom: 0px;
    }
  }

  .back-button {
    text-decoration: none;
    color: #105cf4;
    margin-bottom: 6 * $module;
    &:hover {
      color: #7aa6ff;
    }
  }

  .bottom-button {
    text-decoration: none;
    color: #105cf4;
    &:hover {
      color: #7aa6ff;
    }
  }

  .signup-block__form__submit-block {
    width: 67%;
    display: flex;
    justify-content: center;
    input {
      border: 0;
      padding: 2 * $module 2 * $module;
      width: 100%;
      border-radius: 50vh;
      background: #1e9deb;
      &:hover {
        background: #1084cc;
      }
      color: #ffffff;
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

  .signup-block__links {
    width: 19.333333%;
  }
}
</style>
