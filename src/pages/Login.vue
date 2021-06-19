<template>
  <div class="login-block">
    <div class="login-block__form">
      <div class="login-block__form__title-block">
        <h1 class="header-1">{{ msg }}</h1>
      </div>

      <div class="login-block__form__inputs-block">
        <input
          type="text"
          v-model="userEmail"
          class="paragraph-primary"
          placeholder="email"
        />

        <input
          type="password"
          v-model="userPassword"
          class="paragraph-primary"
          placeholder="password"
        />
      </div>
      <div class="login-block__form__submit-block">
        <input
          type="submit"
          v-on:click="loginClick"
          value="Login"
          class="paragraph-primary"
        />
      </div>
    </div>
    <div class="login-block__links">
      <router-link to="/signup" class="paragraph-secondary"
        >Have no account? Register here</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      msg: "Welcome back to Linkbase",
      userEmail: "",
      userPassword: "",
      userToken: "",
    };
  },
  methods: {
    async loginClick() {
      const data = {
        email: this.userEmail,
        password: this.userPassword,
      };
      try {
        // console.log("From try");
        this.status = await axios.post(
          `${this.$store.getters.BASE_URL}user/login`,
          data
        );
        this.$store.commit("SET_TOKEN", this.status.data.token);
        console.log(this.status);
        this.$router.push("/home");
      } catch (error) {
        console.log(error.response.data);
      }
    },
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

.login-block__links {
  width: 19.333333%;
}
</style>