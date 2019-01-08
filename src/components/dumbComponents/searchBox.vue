<template>
  <div class="search-box">
    <input :type="type" :name="name">
    <button @click="handleClick">
      <i class="fas fa-search"/>
    </button>
  </div>

</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('search', event)
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/colours';

.search-box {
  display: flex;
  margin: 5px;

  button {
    color: white;
    background-color: $lightgreen;
    outline: none;
    border-radius: 0 5px 5px 0;
    border: 2px solid white;
  }

  input {
    border-style: none;
  }
}
</style>
