<template>
  <!--Welcome section-->
  <section class="welcome">
    <div class="inner-section">
      <h1>Welcome...</h1>
      <p>
        Croissant sweet gummies sweet candy chocolate cake marzipan bear claw.
        Chocolate cake ice cream jelly beans bear claw pie icing marzipan
        gingerbread sweet.
      </p>
    </div>
  </section>

  <!--Book review section-->
  <section id="book-review">
    <div class="book-description">
      <img :src="image" :alt="books.alt" />
      <div class="book-description-text">
        <p><strong>Author: </strong> {{ author }}</p>
        <p><strong>Title: </strong> {{ title }}</p>
        <p><strong>Published: </strong> {{ year }}</p>
        <p><strong>About: </strong> {{ description }}</p>
      </div>
    </div>

    <!--Review List-->
    <review-list :reviews="reviews" class="review-list"> </review-list>
    <ul class="book-list">
      <li
        class="book-select"
        v-for="book in books"
        :key="book.id"
        @click="
          updateImage(
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
      image:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141185224.jpg",
      author: "Carson McCullers",
      title: "The Heart Is a Lonely Hunter",
      year: "1940",
      alt: "...",
      description:
        "The Heart Is a Lonely Hunter is the debut novel by the American author Carson McCullers; she was 23 at the time of publication. It is about a deaf man named John Singer and the people he encounters in a 1930s mill town in the US state of Georgia.",
      books: [
        {
          id: 1,
          title: "The Heart Is a Lonely Hunter",
          author: "Carson McCullers",
          year: "1940",
          alt: "...",
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
          alt: "...",
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
    updateImage(
      variantImage,
      variantAuthor,
      variantTitle,
      variantYear,
      varianDescription
    ) {
      this.image = variantImage;
      this.author = variantAuthor;
      this.title = variantTitle;
      this.year = variantYear;
      this.description = varianDescription;
    },
  },
};
</script>