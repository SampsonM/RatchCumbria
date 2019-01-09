<template>
  <div class="about">
    <div class="banner">
      <h1>This is a website for local businesses to advertise without the huge advertising costs of google or yell!</h1>
    </div>
    
    <div class="add-business">
      <router-link to="/signup" >Add your business now here.</router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
@import '../styles/colours';

.about {
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

.add-business {
  margin-top: 10px;
  background-color: $lighter-green;
  padding: 20px;
}
</style>

