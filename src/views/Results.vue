<template>
  <div>
    <form action="">
      <input 
      type="text" 
      id="searchRequest" 
      placeholder="new search" 
      v-model="searchRequest">
    <router-link 
          @click.native="search"
          :to="`/results?search=${searchRequest}`"
          tag="button" 
          >Search</router-link>
    </form>
    <ul class="newsList">
      <li v-for="article in searchResults" :key="article"><a :href="article.url" target="_blank">{{article.title}}</a></li>
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
    search: function () { 
          getNewsFactory(this.searchRequest)
          .then((news) => {this.searchResults = news.articles})
    },
  },
  mounted() {
    this.search()
  }
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
