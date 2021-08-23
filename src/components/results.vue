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
export default {
  methods: {
    getNews: function getNews(e) {
    e.preventDefault()

    const apiKey = '53459456819c4042b7cae0f9610b0a51'
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
    const newsList = document.querySelector('.newsList')

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        data.articles.forEach(article =>{
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.setAttribute('href', article.url);
          a.setAttribute('target', '_blank');
          a.textContent = article.title;
          li.appendChild(a);
          newsList.appendChild(li);

        })
      }
      )

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