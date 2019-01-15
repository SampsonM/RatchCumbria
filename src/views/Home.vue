<template>
  <div class="home">
    <div class="banner">
      <h1>Search for tradesmen across Cumbria</h1>
    </div>

    <div v-for="company in companies"
      :key="company._id">
      <CompanyResult :company="company"/>
    </div>

  </div>
</template>

<script>
import CompanyResult from '../components/companyResult'

export default {
  components: {
    CompanyResult
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
