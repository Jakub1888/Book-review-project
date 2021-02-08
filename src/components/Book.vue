<template>

  <section class="welcome">
    <div class="inner-section">
      <h1>Welcome...</h1>
      <p>
        Croissant sweet gummies sweet candy chocolate cake marzipan bear claw. Chocolate cake ice cream jelly beans 
        bear claw pie icing marzipan gingerbread sweet. Toffee candy donut gingerbread cake donut tiramisu.
      </p>
    </div>
  </section>

  <h1>{{ title }}</h1>
  <section class="book-description">
    
    <img :src="book.image" alt="..."/>
    <p>
      <strong>Author: </strong> {{ book.author }} <br>
      <strong>Title: </strong> {{ book.bookTitle }} <br>
      <strong>Published: </strong> {{ book.year }} <br>
      <strong>About: </strong> {{ book.description }}
    </p>
  </section>

  <footer>
    <div class="gradient"></div>
    <div class="contact-text">
      <h2>Do you have any questions?</h2>
      <p>Feel free to contact us.</p>
    </div>
     <ul class="contact-links">
        <li>
          <i class="fas fa-map-marker-alt"></i
          ><a
            href="https://goo.gl/maps/3FNZLQH5e7L5crMS9"
            target="_blank"
            >Ahu Tongariki, Easters Islands</a
          >
        </li>
        <li>
          <i class="fas fa-envelope-open"></i
          ><a href="mailto:info@ook-project.sk">info@book-project.sk</a>
        </li>
        <li>
          <i class="fas fa-mobile"></i
          ><a href="tel:0910 123 456">0911 123 456</a>
        </li>
      </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: "Book Review",
      book: {
          bookTitle: "The Heart Is a Lonely Hunter", 
          author: "Carson McCullers", 
          year: "1940",
          description: "hi", 
          image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141185224.jpg"
        }
    };
  },
};
</script>

<style>
  .welcome {
    height: 25em;
    background: url('../assets/img/bg.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 560px;
    background-position: 0 0;
  }
</style>>

