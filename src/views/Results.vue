<template>
  <div>
    <form action="">
      <input
        type="text"
        id="searchRequest"
        placeholder="new search"
        v-model="searchRequest"
      />
      <button @click="search(searchRequest)">Search!</button>
      <button @click="searchAsync(searchRequest)">Async Search!</button>
      <router-link
        @click.native="search()"
        :to="{ name: 'Results', query: { search: searchRequest } }"
        tag="button"
        >Search with URL
      </router-link>
    </form>
    <ul class="newsList">
      <li v-for="article in searchResults" :key="article">
        <a :href="article.url" target="_blank">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getNewsFactory, getNewsFactoryAsync } from "../services/Call";

export default {
  data() {
    return {
      searchResults: {},
      searchRequest: this.$route.query.search,
    };
  },
  methods: {
    search(param) {
      //       const apiKey = '53459456819c4042b7cae0f9610b0a51'
      //   let url = `https://newsapi.org/v2/everything?q=${this.searchRequest}&apiKey=${apiKey}`

      // fetch(url)
      //   .then(res => res.json())
      //   .then((news) => {this.searchResults = news.articles})
      // eslint-disable-next-line no-debugger
      if (param) this.$router.replace({ query: { search: param } });

      getNewsFactory({ filter: this.$route.query.search }).then((news) => {
        this.searchResults = news.articles;
      });
    },
    async searchAsync(param) {
      if (param) this.$router.replace({ query: { search: param } });
      const news = await getNewsFactoryAsync(this.$route.query.search);
      this.searchResults = news.articles;
    },
  },
  mounted() {
    this.search();
  },
};
</script>

<style lang="sass">
.newsList
  width: 60%
  margin: 0 auto
  list-style: none
  margin-top: 3%

li
  text-align: left
  margin: .5rem
</style>
