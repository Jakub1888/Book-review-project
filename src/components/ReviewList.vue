<template>
  <div>
    <h3>Place for your review:</h3>
    <transition name="fade">
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <strong>{{ review.name }}</strong> gave this {{ review.rating }} out
          of 5 <i class="fas fa-star"></i> "{{ review.review }}" <br />
          <strong>Recommended:</strong> {{ review.recommend }}
          <span><i class="fas fa-star"></i></span>
        </li>
      </ul>
    </transition>
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
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 2s ease;
}

.fade-leave-from {
}

.fade-leave-to {
}

.fade-leave-active {
}
</style>