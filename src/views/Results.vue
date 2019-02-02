<template>
  <div class="results">
    <SearchBanner></SearchBanner>

    <div 
      v-for="company in companies"
      :key="company._id">
      <CompanyResult :company="company"/>
    </div>
  </div>
</template>
<script>
import CompanyResult from '../components/companyResult'
import SearchBanner from '../components/searchBanner'

export default {
  name: 'results',
  components: {
    SearchBanner,
    CompanyResult
  },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/breakpoints';

.results {
  position: relative;
  margin: 10px;

  @include desktop {
    max-width: 1004px;
    margin: 10px auto;
  }
}
</style>
