<template>
  <div class="signup-block">
    <div class="signup-block__form">
      <router-link to="/"> Back </router-link>
      <div class="signup-block__form__title-block">
        <h1 class="header-1">{{ msg }}</h1>
      </div>
      <div class="signup-block__form__inputs-block">
        <!-- email input and errors -->
        <input
          type="text"
          v-model="userEmail"
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
          v-model="userName"
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
          v-model="userPassword"
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
        <input
          type="submit"
          @click="loginClick"
          value="Sign up"
          class="paragraph-primary"
          @click.stop.prevent="submit()"
        />
      </div>
    </div>
    <div class="signup-block__links">
      <router-link to="/login" class="paragraph-secondary"
        >Have an account? Login here</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      msg: "Welcome to Linkbase",
      userEmail: "",
      userName: "",
      userPassword: "",
      invalidEmailError: "",
      invalidPasswordError: "",
      invalidEmailPasswordError: "",
      userExistsError: "",
    };
  },
  methods: {
    async loginClick() {
      const data = {
        username: this.userName,
        email: this.userEmail,
        password: this.userPassword,
      };
      try {
        console.log("From try");

        let signupResponse = await axios.post(
          `${this.$store.getters.baseURL}user/signup`,
          data
        );

        let loginResponse = await axios.post(
          `${this.$store.getters.baseURL}user/login`,
          data
        );

        this.invalidEmailError = false;
        this.invalidPasswordError = false;
        this.invalidEmailPasswordError = false;
        this.userExistsError = false;

        console.log(signupResponse.data);
        console.log(loginResponse.data);

        localStorage.setItem("token", this.status.data.token);
        this.$router.push("/home");
      } catch (error) {
        if (error.response.data.errors != null) {
          console.log(error.response.status);
          this.errorModel = error.response.data.errors;
        } else {
          this.errorModel = [error.response.data];
        }
        switch (this.errorModel[0].msg || this.errorModel[0].message) {
          case "invalid_email":
            console.log("Invalid format of email");
            this.invalidEmailError = true;
            break;
          case "invalid_password":
            console.log("Invalid format of the pw, min 6 characters required");
            this.invalidPasswordError = true;
            break;
          case "invalid_email_and_password":
            console.log("Combination of two above codes");
            this.invalidEmailPasswordError = true;
            break;
          case "user_exists":
            console.log("User already exists in database");
            this.userExistsError = true;
            break;
          default:
            console.log("Unknown error");
            break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_fonts.scss";

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
</style>
