<template>
  <div>
    {{company}}
  </div>
</template>
<script>
export default {
  name: 'companyCard',
  data() {
    return {
    }
  },
  props: {
    company: {
      type: Object,
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
