<template>
<AppHeader @open-login-modal="isLoginOpen = true"/>
<div class="w-full flex">
  <router-view></router-view>
</div>
<LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/> 
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';
import firebase from "./utilities/firebase";

export default {
  name: 'App',

  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        // this.$store.commit("setIsLoggedIn", true);
        // this.$store.commit("setLoginModal", false);
        // this.$store.commit("setAuthUser", user);
      } else {
        this.isLoggedIn = false;
         this.authUser = {};
        // this.$store.commit("setIsLoggedIn", false);
        // this.$store.commit("setAuthUser", {});
      }
    });
  },

  components: {
    AppHeader,
    LoginModal,
  },
}
</script>

<style>
</style>
