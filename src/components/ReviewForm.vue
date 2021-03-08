<template>
  <form @submit.prevent="onSubmit">
    <h2>Your Review:</h2>
    <input v-model="name" placeholder="Name" class="form-input" />
    <select v-model="book" class="form-input">
      <option value="" disabled selected>Book</option>
      <option>The Heart is a Lonely Hunter</option>
      <option>Wise Blood</option>
      <option>No Country for Old Men</option>
    </select>

    <textarea
      id="review"
      v-model="review"
      placeholder="Review"
      class="form-input"
    ></textarea>

    <div class="select">
      <select v-model.number="rating" class="form-input">
        <option value="" disabled selected>Rating</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <select v-model="recommend" class="form-input">
        <option value="" disabled selected>Recommended</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <input type="submit" value="submit" class="button" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      book: "",
      review: "",
      recommend: "",
      rating: "",
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === "" ||
        this.recommend === "" ||
        this.book === ""
      ) {
        alert("Reviews is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        book: this.book,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.book = "";
      this.review = "";
      this.rating = "";
      this.recommend = "";
    },
  },
};
</script>

