<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <SearchBox/>

    <p>Ratch Cumbria</p>

  </div>
</template>

<script>
import SearchBox from './searchBox';

export default {
  name: 'Nav',
  components: {
    SearchBox
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '../styles/colours';
@import '../styles/breakpoints';

#nav {
  padding: 15px 30px;
  background-color: $green;
  display: flex;
  align-items: center;

  a {
    font-weight: bold;
    color: $header-link;
    margin: 10px;

    &:first-of-type {
      border-right: 1px solid $white;
      padding-right: 10px;
      margin-right: 0;
    }

    &:hover {
      color: $hover-link
    }
  }

  p {
    margin: 0;
    margin-left: auto;
    font-size: 20px;
    color: $white;
  }
}
</style>
