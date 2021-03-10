<template>

  <header class="main-header">
    <!--Dropdown Menu-->
    <ul class="dropdown">
      <a class="dropbtn" @mouseover="show = true" @mouseout="show = false">
        <i class="fas fa-bars"></i>
      </a>
      <transition name="dropdown">
        <ul
          class="dropdown-content"
          v-if="show"
          @mouseover="show = true"
          @mouseout="show = false"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/review">Review</router-link></li>
          <li><router-link to="/authors">Authors</router-link></li>
          <li><a @click="toggleModal">Sign Up</a></li>
          <li><a @click="toggleModalTwo">Log In</a></li>
        </ul>
      </transition>
    </ul>
    <!--Inline menu-->
    <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/review">Review</router-link></li>
      <li><router-link to="/authors">Authors</router-link></li>
    </ul>
    <div class="logo"></div>
    <ul class="sign-up">
      <li><a @click="toggleModal">Sign Up</a></li>
      <li><a @click="toggleModalTwo">Log In</a></li>
    </ul>
  </header>

  <!--Sign up-->
  <teleport to=".modals" v-if="showModal">
    <Modal theme="normal" @close="toggleModal">
      <h1>Sign Up:</h1>
      <SignupForm>
        <template v-slot:signUp>
          <a href="#">sign up</a>
          <a href="#">more info</a>
        </template>
      </SignupForm>
    </Modal>
  </teleport>

  <!--Modal 2-->
  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="modalLogIn" @close="toggleModalTwo">
      <h1>Log In:</h1>
      <form>
        <!--Name-->
        <input type="text" placeholder="Name" required v-model="email" />
        <!--Password-->
        <input type="password" placeholder="Password" required />
      </form>
      <template v-slot:logIn>
        <a href="#">Log In</a> <br />
        <a class="forgotten" href="#">Forgot Your Password?</a>
      </template>
    </Modal>
  </teleport>

  <router-view>
  </router-view>

  <!--Contact-->
  <contact></contact>
 
</template>

<script>
import Contact from "./components/Contact.vue";
import Modal from "./components/Modal.vue";
import SignupForm from "./components/SignupForm.vue";

export default {
  components: {
    Contact,
    Modal,
    SignupForm,
  },
  data() {
    return {
      show: false,
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>