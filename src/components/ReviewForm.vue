<template>
  <form @submit.prevent="onSubmit">
    <label>Name:</label>
    <input v-model="name" /><br />

    <label>Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label>Would you recommend this book?:</label>
    <select v-model="recommend">
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
      recommend: null,
      rating: 5,
    };
  },
  methods: {
    onSubmit() {
        if(this.name === '' || this.review === '' || this.rating === null) {
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
      this.rating = 5
      this.recommend = ''
    },
  },
};
</script>

