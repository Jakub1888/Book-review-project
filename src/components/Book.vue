<template>
  <!--Welcome section-->
  <section class="welcome">
    <div class="inner-section">
      <h1>Welcome...</h1>
      <p>
        Croissant sweet gummies sweet candy chocolate cake marzipan bear claw.
        Chocolate cake ice cream jelly beans bear claw pie icing marzipan
        gingerbread sweet. Toffee candy donut gingerbread cake donut tiramisu.
      </p>
    </div>
  </section>

  <!--Book review section-->
  <section id="book-review">
    <div class="book-description">
      <img :src="book.image" :alt="book.alt" />
      <div class="book-description-text">
        <p><strong>Author: </strong> {{ book.author }}</p>
        <p><strong>Title: </strong> {{ book.bookTitle }}</p>
        <p><strong>Published: </strong> {{ book.year }}</p>
        <p><strong>About: </strong> {{ book.description }}</p>
      </div>
    </div>

    <!--Review List-->
    <review-list :reviews="reviews" class="review-list"> </review-list>
  </section>

  <!--Review Form-->
  <section class="review-form">
    <div class="review-form-bg">
      <h1>Random text...</h1>
      <p>Much, much longer randomg text talking about nothing.</p>
    </div>
    <review-form @review-submitted="addReview" class="form"></review-form>
  </section>

  <!--Contact-->
  <aside>
    <div class="contact-text">
      <h2>Do you have any questions?</h2>
      <p>Feel free to contact us.</p>
    </div>
    <ul class="contact-links">
      <li>
        <i class="fas fa-map-marker-alt"></i
        ><a href="https://goo.gl/maps/3FNZLQH5e7L5crMS9" target="_blank"
          >Ahu Tongariki, Easters Islands</a
        >
      </li>
      <li>
        <i class="fas fa-envelope-open"></i
        ><a href="mailto:info@ook-project.sk">info@book-project.sk</a>
      </li>
      <li>
        <i class="fas fa-mobile"></i><a href="tel:0910 123 456">0911 123 456</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import ReviewForm from "./ReviewForm.vue";
import ReviewList from "./ReviewList.vue";
export default {
  components: {
    ReviewForm,
    ReviewList,
  },
  data() {
    return {
      title: "Book Review",
      book: {
        bookTitle: "The Heart Is a Lonely Hunter",
        author: "Carson McCullers",
        year: "1940",
        alt: "...",
        description:
          "The Heart Is a Lonely Hunter is the debut novel by the American author Carson McCullers; she was 23 at the time of publication. It is about a deaf man named John Singer and the people he encounters in a 1930s mill town in the US state of Georgia.",
        image:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141185224.jpg",
      },
      reviews: [],
    };
  },
  methods: {
    addReview(review) {
      this.reviews.push(review);
    },
  },
};
</script>



