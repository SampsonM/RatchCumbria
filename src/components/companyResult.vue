<template>
  <div class="company-card">
    <p class="name">
      company-name: {{company.companyName}},
    </p>
    <p class="trade">
      trade: {{company.trade}},
    </p>
    <p class="contact">
      contactInfo: {{company.contactInfo}},
    </p>
    <p class="address">
      address: {{company.address}}
    </p>

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
.company-card {
  height: 300px;
  width: 300px;
  background: red;

  &.name {

  }

  &.trade {

  }

  &.contact {

  }

  &.address {

  }
}
</style>
