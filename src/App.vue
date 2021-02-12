<template>
  <header>
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
          <li><a href="#book-review">Books</a></li>
          <li><a href="#">Quotes</a></li>
          <li><a @click="toggleModal">Sign Up</a></li>
          <li><a @click="toggleModalTwo">Log In</a></li>
        </ul>
      </transition>
    </ul>
    <!--Inline menu-->
    <ul class="links">
      <li><a href="#book-review">Books</a></li>
      <li><a href="#">Quotes</a></li>
    </ul>
    <div class="logo"></div>
    <ul class="sign-up">
      <li><a @click="toggleModal">Sign Up</a></li>
      <li><a @click="toggleModalTwo">Log In</a></li>
    </ul>
  </header>

  <Book></Book>

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
</template>

<script>
import Modal from "./components/Modal.vue";
import Book from "./components/Book.vue";
import SignupForm from "./components/SignupForm.vue";

export default {
  name: "App",
  components: {
    Modal,
    Book,
    SignupForm,
  },
  data() {
    return {
      showModal: false,
      showModalTwo: false,
      show: false,
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