<template>
  <div class="reset">
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <Header />
    <transition
      name="custom-classes-transitions-1"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated fadeOutDown"      
      appear
    >
      <div class="main">
        <transition
          name="custom-classes-transitions"
          leave-active-class="animated bounceOutRight"
          v-on:afterLeave="afterLeave"
        >
          <div v-if="showReset" class="container" id="container">
            <img src="../assets/Login/Forgot/forgot.svg" alt="forgot" />
            <div v-if="!isLoading" class="content">
              <h2>Reset Password</h2>
              <h4>No worries, we got you! Just verify your Email</h4>
              <input
                v-if="!$store.state.isLoggedIn"
                v-model="email"
                type="email"
                placeholder="Email"
                class="email"
              />
              <input v-else type="email" v-model="loggedEmail" placeholder="Email" class="email" />
              <button @click="resetPassword()" class="btn grow">Reset</button>
            </div>
            <Loading :message="'Sending an email to reset your password'" v-else />
          </div>
        </transition>
        <transition name="fade" appear>
          <div v-if="isSuccessful" class="sent-container">
            <div class="sent">
              <img src="../assets/Login/Forgot/correct.svg" alt="succesful reset" />
              <h4>Email is sent succesfully, check your email</h4>
              <button v-if="$store.state.isLoggedIn" @click="route" class="grow">Go to Settings</button>
              <button v-else @click="route" class="grow">Sign In</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { auth } from "../main.js";
import Header from "../components/Navigation/Header.vue";
import Error from "../components/Modals/Error.vue";
import Loading from "../components/Loading/Dots.vue";

export default {
  components: {
    Header,
    Error,
    Loading
  },
  data() {
    return {
      email: "",
      loggedEmail: this.$store.state.user.email,
      showReset: true,
      isLoading: false,
      loadingMessage: "Sending an email to reset your password",
      isSuccessful: false,
      error: {
        isVisible: false,
        message: ""
      }
    };
  },
  methods: {
    resetPassword() {
      this.isLoading = true;
      let emailAddress = "";
      if (!this.$store.state.isLoggedIn) {
        emailAddress = this.email;
      } else {
        emailAddress = auth.currentUser.email;
      }
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(() => {
          // Email sent.
          this.showReset = false;
          console.log(emailAddress);
        })
        .catch(err => {
          // An error happened.
          this.error.message = err;
          this.error.isVisible = true;
          this.isLoading = false;
          this.email = "";
        });
    },
    route() {
      if (this.$store.state.isLoggedIn) {
        this.$router.push("/settings");
      } else {
        this.$router.push("/login");
      }
    },
    afterLeave(el, done) {
      this.isSuccessful = true;
      console.log(el, done);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/custom-animations";
.reset {
  margin-top: 2.3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .container {
    padding: 1.5rem 3rem;
    height: 17rem;
    width: 25rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      h2,
      h4 {
        margin: 0.2rem;
        font-weight: lighter;
      }
      h2 {
        font-weight: bold;
      }
      input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        background-image: url("../assets/Login/mail.svg");
        background-position-y: center;
        background-position-x: 0.8rem;
        background-size: 18px;
        background-repeat: no-repeat;
        text-indent: 30px;
        margin-top: 1.3rem;
      }
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  .sent-container {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 3rem;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 1rem;
    }
    h4 {
      margin: 0.5rem;
      color: $primary-dark;
    }
  }
  button {
    margin-top: 1rem;
    border-radius: 20px;
    border: 1px solid $primary-light;
    background-image: $gradient;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }
  button:focus {
    outline: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>