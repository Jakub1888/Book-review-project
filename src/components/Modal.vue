<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{
        normal: theme === 'normal',
        modalLogIn: theme === 'modalLogIn',
      }"
    >
      <a class="modal-close-x" @click.prevent="closeModal">x</a>
      <slot>default content</slot>

      <!--Modal 2 slot-->
      <div class="actions">
        <slot name="logIn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

