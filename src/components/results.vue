<template>
<div>
  <p>This page will show the results</p>
    <!--  API key: 53459456819c4042b7cae0f9610b0a51
      Documentation: https://newsapi.org/docs -->
      <button @click="getNews">Click</button>
      <ul class="newsList">
        <li></li>
      </ul>
</div>
</template>

<script>
import { getNewsFactory } from "../services/newsService";

export default {
  methods: {
    getNews: async () => {
      const news = await getNewsFactory('apple');
      console.log(news);
    }
  },
}

</script>

<style>
.newsList{
  width: 60%;
  margin: 0 auto;
  list-style: none;
  margin-top: 3%;
}
li {
  text-align: left;
  margin: .5rem;
}

</style>