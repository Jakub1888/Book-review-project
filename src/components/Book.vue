<template>
  <!--Book review section-->
  <section id="book-review">
    <div class="book-description">
      <img :src="image" :alt="alt" />
      <!--Book description-->
      <div class="book-description-text">
        <p><strong>Author: </strong> {{ author }}</p>
        <p><strong>Title: </strong> {{ title }}</p>
        <p><strong>Published: </strong> {{ year }}</p>
        <p><strong>About: </strong> {{ description }}</p>
      </div>
      <!--Book selection-->
      <ul class="book-list">
        <li
          class="book-select"
          v-for="book in books"
          :key="book.id"
          @click="
            updateBook(
              book.image,
              book.author,
              book.title,
              book.year,
              book.description
            )
          "
        >
          {{ book.title }}
        </li>
      </ul>
    </div>

    <!--Review List-->
    <review-list :reviews="reviews" class="review-list"> </review-list>
  </section>

  <!--Review Form-->
  <section class="review-form">
    <div class="review-form-bg">
      <h1>Inspire others with your review</h1>
      <!--<p>...or get inspired by some of the quotes below.</p>-->
    </div>
    <review-form @review-submitted="addReview" class="form"></review-form>
  </section>
  <!--<quote-generator></quote-generator> -->
  <a><router-link to="/">Go Back</router-link></a>
</template>

<script>
import ReviewForm from "./ReviewForm.vue";
import ReviewList from "./ReviewList.vue";
import QuoteGenerator from "./QuoteGenerator.vue";

export default {
  components: {
    ReviewForm,
    ReviewList,
    QuoteGenerator,
  },
  data() {
    return {
      image:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141185224.jpg",
      author: "Carson McCullers",
      title: "The Heart Is a Lonely Hunter",
      year: "1940",
      alt: "title page of the novel",
      description:
        "The Heart Is a Lonely Hunter is the debut novel by the American author Carson McCullers; she was 23 at the time of publication. It is about a deaf man named John Singer and the people he encounters in a 1930s mill town in the US state of Georgia.",
      books: [
        {
          id: 1,
          title: "The Heart Is a Lonely Hunter",
          author: "Carson McCullers",
          year: "1940",
          alt: "title page of the novel",
          description:
            "The Heart Is a Lonely Hunter is the debut novel by the American author Carson McCullers; she was 23 at the time of publication. It is about a deaf man named John Singer and the people he encounters in a 1930s mill town in the US state of Georgia.",
          image:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141185224.jpg",
        },
        {
          id: 2,
          title: "Wise Blood",
          author: "Flannery O'Connor",
          year: "1952",
          alt: "title page of the novel",
          description:
            "Wise Blood, Flannery O’Connor’s astonishing and haunting first novel, is a classic of twentieth-century literature. It is a story of Hazel Motes, a twenty-two-year-old caught in an unending struggle against his innate, desperate faith. ",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434558270l/25744644._SY475_.jpg",
        },
        {
          id: 3,
          title: "No Country for Old Men",
          author: "Cormac McCarthy",
          year: "2005",
          alt: "...",
          description:
            "The story occurs in the vicinity of the Mexico–United States border in 1980 and concerns an illegal drug deal gone awry in the Texas desert back country.",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Cormac_McCarthy_NoCountryForOldMen.jpg/220px-Cormac_McCarthy_NoCountryForOldMen.jpg",
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addReview(review) {
      this.reviews.push(review);
    },
    updateBook(
      variantImage,
      variantAuthor,
      variantTitle,
      variantYear,
      variantDescription,
      variantAlt
    ) {
      this.image = variantImage;
      this.author = variantAuthor;
      this.title = variantTitle;
      this.year = variantYear;
      this.description = variantDescription;
      this.alt = variantAlt;
    },
  },
};
</script>