<template>
  <div class="home">
    <div class="banner">
      <h1>Search for tradesmen across Cumbria</h1>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss">
@import '../styles/colours';

.home {
  position: relative;
  padding: 10px;
}

.banner {
  width: 100%;
  height: 200px;
  background: $lighter-green;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
  }
}
</style>
