<template>
  <div>
    <h3>Place for your review:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <strong>{{ review.name }}</strong> gave this {{ review.rating }} out of 5 <i class="fas fa-star"></i>
        "{{ review.review }}" <br>
        <strong>Recommended:</strong> {{ review.recommend }} <span><i class="fas fa-star"></i></span>
      </li>
    </ul>
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
