<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <SearchBox 
      :search="handleSearch"
      type="text"
      name="SearchBox"
    />

  </div>
</template>

<script>
import SearchBox from './dumbComponents/searchBox';

export default {
  name: 'Nav',
  components: {
    SearchBox
  },
  methods: {
    handleSearch: (value) => {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colours';

#nav {
  padding: 15px 30px;
  background-color: $green;
  display: flex;

  a {
    font-weight: bold;
    color: $blue;
    margin: 10px;

    &:first-of-type {
      border-right: 1px solid white;
      padding-right: 10px;
      margin-right: 0;
    }

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
