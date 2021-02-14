<template>
    <div id="quote-section">
        <div class="quote-text">
            <h2>Quote Generator</h2>
            <p :class="{ animate: animating }" :disabled="animating">
            <em>"{{ currentQuote }}"</em>
            </p>
            <p :class="{ animate: animating }" :disabled="animating">
            - {{ currentQuoteAuthor }}
            </p>
            <a class="changeQuote" @click="newQuote()">New Quote</a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [],
      currentQuote: "",
      currentQuoteAuthor: "",
      animating: false,
      quotes_api_url: "https://type.fit/api/quotes",
    };
  },
   methods: {
    newQuote: function () {
      this.randomizeQuote()
      this.animating = true
      setTimeout(() => {
        this.animating = false
      }, 1000)
    },
    randomizeQuote: function() {
      const num = Math.floor(Math.random() * this.quotes.length)
      this.currentQuote = this.quotes[num].text
      this.currentQuoteAuthor = this.quotes[num].author
    }
  },
  mounted: function() {
   fetch(this.quotes_api_url)
    .then(response => response.json())
    .then(quotes => {
      this.quotes = quotes
      this.randomizeQuote()
    });
  }
};
</script>