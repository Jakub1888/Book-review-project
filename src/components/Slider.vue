<template>
  <!--Welcome section-->
  <section class="welcome">
    <div class="inner-section">
      <h1>Welcome</h1>
      <p>
        Have you ever wished to share your ideas and opinions about favourite
        books with other people?
      </p>
      <p>...then this is the place for you.</p>
    </div>
  </section>

  <!--Image slider-->
  <div class="slider">
    <div class="slider-images">
      <transition-group name="fade" tag="div">
        <div v-for="number in [currentNumber]" :key="number">
          <img
            :src="currentImage"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
          />
        </div>
      </transition-group>
      <p class="slider-nav">
        <a
          @click="prev"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
          >Previous</a
        >
        ||
        <a
          @click="next"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
          >Next</a
        >
      </p>
    </div>
    <div class="slider-text">
      <h3>Your favourite books in one spot</h3>
      <p>Website serving as a dedicated place for your book reviews.</p>
      <p>
        Check out our
        <a><router-link to="/review">review</router-link></a> section.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://i.imgur.com/Lp8mXIw.jpg",
        "https://i.imgur.com/NAU1TZn.jpg",
        "https://i.imgur.com/IvfgKQH.jpg",
        "https://i.imgur.com/ORjbcGh.jpg",
        "https://i.imgur.com/RGrQ5JR.jpg",
      ],
      currentNumber: 0,
      timer: null,
    };
  },
  mounted: function () {
    this.startRotation();
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 4000);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      this.currentNumber += 1;
    },
    prev: function () {
      this.currentNumber -= 1;
    },
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    },
  },
};
</script>