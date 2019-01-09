<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

@media only screen and(max-width: 380px){
  #app {
    overflow: scroll;
  }  
}
</style>
