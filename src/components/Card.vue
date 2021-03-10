<template>
  <transition appear name="fade">
    <section class="card">
      <transition
        appear
        tag="header"
        @before-enter="beforeEnterHeader"
        @enter="enterHeader"
      >
        <header>
          <h1>Authors</h1>
          <p>Short section dedicated for our favourite authors.</p>
        </header>
      </transition>

      <transition
        appear
        tag="div"
        @before-enter="beforeEnterSlider"
        @enter="enterSlider"
      >
        <div class="card-row">
          <div
            class="flip-card-container"
            v-for="card in cards"
            :key="card.text"
          >
            <div class="flip-card">
              <!--front section of card-->
              <div class="flip-card-front">
                <img :src="card.url" :alt="card.altText" />
                <p>
                  {{ card.textFront }} <br />
                  <span class="birth">{{ card.birth }}</span>
                </p>
              </div>
              <!--back section of card-->
              <div class="flip-card-back">
                <h3>About</h3>
                <p>
                  {{ card.textBack }}
                </p>
                <a :href="card.textSource" target="_blank" rel="noopener"
                  >More about the author</a
                >
              </div>
            </div><!--flip-card-->
          </div><!--flip-card-container-->
        </div><!--card-row-->
      </transition>
    </section>
  </transition>
  <div class="author-route">
    <a><router-link to="/review">Go Back</router-link></a>
  </div>
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
      cards: [
        {
          textFront: "John Steinbeck",
          birth: "27/02/1902 - 20/12/1968",
          textBack:
            "American novelist, best known for The Grapes of Wrath (1939), which summed up the bitterness of the Great Depression decade and aroused widespread sympathy for the plight of migratory farmworkers.",
          textSource: "https://www.britannica.com/biography/John-Steinbeck",
          url:
            "https://cdn.britannica.com/s:290x800/66/9266-004-CD717955/John-Steinbeck.jpg",
          altText: "photo of John Steinbeck",
        },
        {
          textFront: "George Orwell",
          birth: "25/06/1903 - 21/01/1950",
          textBack:
            "English novelist, essayist, and critic famous for his novels Animal Farm (1945) and Nineteen Eighty-four (1949), the latter a profound anti-utopian novel that examines the dangers of totalitarian rule.",
          textSource: "https://www.britannica.com/biography/George-Orwell",
          url:
            "https://cdn.britannica.com/s:1500x700,q:85/68/9768-004-F4E88413/George-Orwell.jpg",
          altText: "photo of George Orwell",
        },
        {
          textFront: "Carson McCullers",
          birth: "19/02/1917 - 29/09/1967",
          textBack:
            " American novelist and short-story writer. Her first novel, The Heart Is a Lonely Hunter (1940), explores the spiritual isolation of misfits and outcasts in a small town of the Southern United States.",
          textSource: "https://en.wikipedia.org/wiki/Carson_McCullers",
          url:
            "https://static01.nyt.com/images/2017/03/05/books/review/05Openbook/05Openbook-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          altText: "photo of Carson McCullers",
        },
        {
          textFront: "Ernest Hemingway",
          birth: "21/07/1899 - 02/07/1961",
          textBack:
            "American novelist and short-story writer, awarded the Nobel Prize for Literature in 1954. He was noted both for the intense masculinity of his writing and for his adventurous and widely publicized life.",
          textSource: "https://www.britannica.com/biography/Ernest-Hemingway",
          url:
            "https://enrichmentondemand.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-14-at-8.44.42-PM.png",
          altText: "photo of Ernest Hemingway",
        },
      ],
    };
  },
};
</script>