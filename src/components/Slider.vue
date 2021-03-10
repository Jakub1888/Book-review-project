<template>
  <transition appear name="fade">
    <div>
      <!--Welcome section-->
      <section class="welcome">
        <transition
          appear
          tag="div"
          @before-enter="beforeEnterHeader"
          @enter="enterHeader"
          class="inner-section"
        >
          <header>
            <h1>Welcome</h1>
            <p>
              Have you ever wished to share your ideas and opinions about
              favourite books with other people?
            </p>
            <p>...then this is the place for you.</p>
          </header>
        </transition>
      </section>

      <!--Image slider-->
      <transition
        class="slider"
        appear
        tag="div"
        @before-enter="beforeEnterSlider"
        @enter="enterSlider"
      >
        <div>
          <div class="slider-header">
            <span>-</span>
            <i class="far fa-square"></i>
            <i class="far fa-times-circle"></i>
          </div>
          <section class="slider-inner">
            <div class="slider-images">
              <transition-group name="fade-img" tag="div">
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
                <a><router-link to="/review">review</router-link></a
                >, or
                <a><router-link to="/authors">author</router-link></a> section.
              </p>
            </div>
          </section>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
export default {
  //Composition API
  setup() {
    const beforeEnterHeader = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-100px)";
    };

    const enterHeader = (el) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.8,
      });
    };

    const beforeEnterSlider = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enterSlider = (el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      });
    };

    return { beforeEnterHeader, enterHeader, beforeEnterSlider, enterSlider };
  },
  //Options API
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