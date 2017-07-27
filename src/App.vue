<template>
  <div id="app">
    <div class="container">
      <header>
        <h1>Invite people join Dribbble</h1>
        <available-number></available-number>
        <search-bar></search-bar>
      </header>

      <main>
        <user-list></user-list>
      </main>

      <footer>
        <email-invite></email-invite>
      </footer>
    </div>
  </div>
</template>

<script>
  import UserList from './components/UserList.vue'
  import SearchBar from './components/SearchBar.vue'
  import EmailInvite from './components/EmailInvite.vue'
  import AvailableNumber from './components/AvailableNumber.vue'

  export default {
    components: {UserList, SearchBar, EmailInvite, AvailableNumber},
    name: 'app'
  }
</script>

<style lang="scss">
  @import "assets/style/common";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  * {
    box-sizing: border-box;
  }

  html, body, div {
    margin: 0;
    padding: 0;
  }

  header {
    padding-top: 3.5em;
    text-align: center;

    h1 {
      margin: 0;
      font-weight: 300;
      letter-spacing: .01em;
      color: $title;
    }

    p {
      margin-top: .5em;
      color: $title-info;
    }
  }

  input, button {
    outline: none;
  }

  body {
    background: $bg-color;
    margin: 0;
    padding: 2.5em 0 0 0;
    font-family: "Frutiger Neue W02 Book", Arial, Helvetica, sans-serif;
  }

  .container {
    margin: 0 auto;
    width: 37.5em;
    background: white;
    border-radius: .2em;
    padding: 0 3.1em 2.5em;
  }

  main {
    display: block;
    padding-top: .8em;
  }
</style>
