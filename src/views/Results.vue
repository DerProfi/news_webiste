<template>
<div>
  <p>This page will show the results</p>
  <p></p>
      <button @click="getNews">Click</button>
      <ul class="newsList">
        <li></li>
      </ul>
</div>
</template>

<script>
import { getNewsFactory } from "../services/Call";

export default {
  data (){
    return {
      searchResults: {},
      searchRequest: this.$route.query.search,
    }
  },
  methods: {
    getNews: async () => { 
      // eslint-disable-next-line no-debugger
      debugger
      const news = await getNewsFactory(this.searchRequest);
      this.searchResults = news;
      console.log(news);
    }
  },
}

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
