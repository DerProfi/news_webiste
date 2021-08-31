<template>
<div>
      <ul class="newsList">
        <li v-for="article in searchResults" :key="article">{{article.title}}</li>
      </ul>
</div>
</template>

<script>
//import { getNewsFactory } from "../services/Call";

export default {
  data (){
    return {
      searchResults: {},
      searchRequest: this.$route.query.search,
    }
  },
  created: function () { 
      const apiKey = '53459456819c4042b7cae0f9610b0a51'
      let url = `https://newsapi.org/v2/everything?q=${this.searchRequest}&apiKey=${apiKey}`

    fetch(url)
      .then(res => res.json())
      .then((news) => {this.searchResults = news.articles})
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
