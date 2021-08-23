<template>
  <div class="home">
    <div class="header-container">
      <p>Welcome to the page that makes all other news websites irrelevant. The main use of this website is to search through every article published by over 80,000 news sources and blogs in the last 3 years.</p>
      <p>There are a few possibilities how you can look for news. You either enter look for specific topics like "apple", or you can just click on the country which news you would like to read.</p>
    </div>
    <div class="input">
      <form action="">
        <input type="text" name="search" id="search" placeholder="search for topic">
        <router-link to="/results" tag="button">Search</router-link>
      </form>
    <div class="counries-container">
      <button>US</button>
      <button>Germany</button>
      <button>Brazil</button>
      <button>Turkey</button>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
  },
};
</script>

<style lang="sass">
  .header-container
    width: 50%
    margin: 0 auto

  .input
    margin-top: 3%
    

  .counries-container
    margin-top: 3%
</style>
