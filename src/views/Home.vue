<template>
  <div class="home">
    <div class="search-banner">
      <h1>Search for tradesmen across Cumbria</h1>

      <search-box></search-box>
    </div>

    <div v-for="company in companies"
      :key="company._id">
      <CompanyResult :company="company"/>
    </div>

  </div>
</template>

<script>
import CompanyResult from '../components/companyResult'
import SearchBox from '../components/searchBox'

export default {
  components: {
    CompanyResult,
    SearchBox
  },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colours';

.home {
  position: relative;
  padding: 10px;
}

.search-banner {
  width: 100%;
  height: 200px;
  background: $lighter-green;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  h1 {
    margin: 0;
  }
}
</style>
