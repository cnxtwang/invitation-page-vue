<template>
  <div class="search-bar">
    <input id="search">
    <label for="search">
      <img src="../assets/static/search.png" alt="search">
    </label>
  </div>
</template>

<script>
  export default {
    name: 'search-bar'
  }
</script>

<style lang="scss">
  @import "../assets/style/common";

  .search-bar {
    padding-top: .95em;
    position: relative;
    height: 4em;

    input {
      border: none;
      border-bottom: 0.03em solid #EAEBEC;
      width: 100%;
      opacity: .5;
      font-size: 1em;
      margin-top: 0;
      transition: margin-top .5s ease-in-out;

      &:focus {
        margin-top: 1em;
      }
    }

    img {
      position: absolute;
      right: 0;
      top: 1.6em;
      background: white;
      width: 1.25em;
      height: 1.25em;
    }
  }

</style>
