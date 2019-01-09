<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'companyCard',
  created() {
    // THIS WILL BE A HTTP REQUEST
    this.companies = JSON.parse('../../data/companies.json');
  },
  data() {
    return {
      companies: []
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
