<template>
  <form>
    <!--E-mail-->
    <input type="text" placeholder="Email Adress" required v-model="email" />
    <!--Name-->
    <input type="text" placeholder="Name" required v-model="name" />
    <!--Password-->
    <input type="password" placeholder="Password" required v-model="password" />
    <!--Terms and conditions-->
    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>
  </form>
  <!--Modal 1 slot-->
  <div class="actions">
    <slot name="signUp"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      terms: false
    };
  },
};
</script>

<style>
</style>