<template>
  <div class="home">
    <SearchBanner></SearchBanner>

    <div class="">

    </div>
  </div>
</template>

<script>
import SearchBanner from '../components/searchBanner'

export default {
  name: 'home',
  components: {
    SearchBanner
  }
}
</script>

<style lang="scss">
@import '../styles/colours';
@import '../styles/breakpoints';

.home {
  position: relative;
  margin: 10px;

  @include desktop {
    max-width: 1004px;
    margin: 10px auto;
  }
}
</style>
