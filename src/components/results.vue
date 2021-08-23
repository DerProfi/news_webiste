<template>
<div>
  <p>This page will show the results</p>
    <!--  API key: 53459456819c4042b7cae0f9610b0a51
      Documentation: https://newsapi.org/docs -->
      <button @click="getNews">Click</button>
</div>
</template>

<script>
export default {
  methods: {
    getNews: function getNews(e) {
    e.preventDefault()

    const apiKey = '53459456819c4042b7cae0f9610b0a51'
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`

    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }
}



</script>

<style>

</style>