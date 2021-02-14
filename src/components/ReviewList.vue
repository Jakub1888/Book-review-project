<template>
  <div>
    <h3>Place for your review:</h3>
    <transition-group name="review" tag="ul">
      <li v-for="(review, index) in reviews" :key="index">
        <strong>{{ review.name }}</strong> gave {{ review.book }} {{ review.rating }} out of
        5 <i class="fas fa-star"></i> <br>
        "{{ review.review }}" <br />
        <strong>Recommended:</strong> {{ review.recommend }}
        <span><i class="fas fa-star"></i></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.review-enter-active {
  transition: all 0.6s;
}

.review-enter-from {
  opacity: 0;
  transform: scale(0.75);
}
</style>