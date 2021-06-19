<template>
  <div class="signup-block">
    <div class="signup-block__form">
      <div class="signup-block__form__title-block">
        <h1 class="header-1">{{ msg }}</h1>
      </div>
      <div class="signup-block__form__inputs-block">
        <input
          type="text"
          v-model="userEmail"
          class="paragraph-primary"
          placeholder="email"
        />
        <div
          class="signup-block__form__inputs-block__error-email-notice"
          :class="{
            'signup-block__form__inputs-block__error-email-ntc__activated':
              errorEmailExisted,
          }"
        >
          <p class="paragraph-secondary">
            The email already exists.
            <router-link to="/login" class="paragraph-secondary"
              >If you have an account, login here</router-link
            >
          </p>
        </div>
        <div
          class="signup-block__form__inputs-block__error-email-notice"
          :class="{
            'signup-block__form__inputs-block__error-email-ntc__activated':
              errorEmail,
          }"
        >
          <p class="paragraph-secondary">Email written incorrectly.</p>
        </div>
        <input
          type="text"
          v-model="userName"
          class="paragraph-primary"
          placeholder="user name"
        />
        <input
          type="password"
          v-model="userPassword"
          class="paragraph-primary"
          placeholder="password"
        />
        <div
          class="signup-block__form__inputs-block__error-email-notice"
          :class="{
            'signup-block__form__inputs-block__error-email-ntc__activated':
              errorPassword,
          }"
        >
          <p class="paragraph-secondary">
            Password require to have more than 6 letters bruh
          </p>
        </div>
      </div>
      <div class="signup-block__form__submit-block">
        <input
          type="submit"
          @click="loginClick"
          value="Login"
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
      errorModel: [],
      errorEmailExisted: false,
      errorEmail: false,
      errorPassword: false,
      userToken: "",
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
        let response = await axios.post(
          `${this.$store.getters.BASE_URL}user/signup`,
          data
        );
        this.errorEmailExisted = false;
        this.errorEmail = false;
        this.errorPassword = false;
        console.log(response.data);
        this.$store.commit("SET_TOKEN", this.status.data.token);
        this.$router.push("/home");
      } catch (error) {
        if (error.response.data.errors != null) {
          console.log(error.response.status);
          this.errorModel = error.response.data.errors;
        } else {
          this.errorModel = [error.response.data];
        }
        switch (this.errorModel[0].msg || this.errorModel[0].message) {
          case "Invalid data":
            console.log("Invalid data on switch");
            break;
          case "User already exists":
            console.log("User already exists on switch");
            this.errorEmailExisted = true;
            break;
          case "Invalid email":
            this.errorEmail = true;
            console.log("Invalid email on switch");
            break;
          case "Invalid passwod (min 6 chars)":
            this.errorPassword = true;
            this.console.log("Invalid password (min 6 chars) on switch");
            break;
          default:
            console.log("from default xd");
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

.signup-block__form__inputs-block__error-email-notice {
  display: none;
}

.signup-block__form__inputs-block__error-email-ntc__activated {
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
