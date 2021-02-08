<template>
  <div class="gradient"></div>
  <header>
      <ul class="section">
        <li><a href="#">Books</a></li>
        <li><a href="#">Quotes</a></li>
      </ul>
      <i class="fas fa-book">Your Book Review</i>
      <ul class="sign-up">
        <li><a @click="toggleModal">Sign Up</a></li>
        <li><a @click="toggleModalTwo">Log In</a></li>
      </ul>
  </header>

  <Book />

  <!--Sign up-->
  <teleport to=".modals" v-if="showModal">
    <Modal theme="normal" @close="toggleModal">
      
      <h1>Sign Up:</h1>
      <form>
        <!--E-mail-->
        <input name="e-mail" type="text" placeholder="Email Adress">
        <!--Name-->
        <input name="Name" type="text" placeholder="Name">
        <!--Password-->
        <input name="password" type="password" placeholder="Password">
      </form>
      <template v-slot:signUp>
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <!--Modal 2-->
  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="modalLogIn" @close="toggleModalTwo">
      <h1>Log In:</h1>
      <form>
        <!--Name-->
        <input name="Name" type="text" placeholder="Name">
        <!--Password-->
        <input name="password" type="password" placeholder="Password">
      </form>
      <template v-slot:logIn>
        <a href="#">Log In</a> <br>
        <a class="forgotten" href="#">Forgot Your Password?</a>
      </template>
    </Modal>
  </teleport>

</template>

<script>
import Modal from "./components/Modal.vue";
import Book from "./components/Book.vue";

export default {
  name: "App",
  components: {
    Modal,
    Book,
  },
  data() {
    return {
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
