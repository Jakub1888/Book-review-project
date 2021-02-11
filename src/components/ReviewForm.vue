<template>
  <form @submit.prevent="onSubmit">
    <label>Name:</label>
    <input v-model="name" />

    <label>Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select v-model.number="rating">
      <option value="" disabled selected>Your Rating</option>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label>Would you recommend this book?:</label>
    <select v-model="recommend">
        <option value="" disabled selected>Your Recommendation</option>
        <option>Yes</option>
        <option>No</option>
    </select>

    <input type="submit" value="submit" class="button" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      review: "",
      recommend: "",
      rating: "",
    };
  },
  methods: {
    onSubmit() {
        if(this.name === '' || this.review === '' || this.rating === '' || this.recommend === '') {
            alert('Reviews is incomplete. Please fill out every field.')
            return
        }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = ''
      this.recommend = ''
    },
  },
};
</script>

