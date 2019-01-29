<template>
  <div class="dropdown">
    <div class="dropdown__placeholder"
      @click="toggleDropdown">
      <p>
        {{placeholderValue}}
      </p>
      <i class="fas fa-angle-down"></i>
    </div>

    <ul class="dropdown__list"
      :class="isDropdownOpen ? 'dropdown__list--open' : 'dropdown__list--closed'">
      <li
        v-for="(value, index) in data"
        :key="index"
        @click="(event) => handleClick(value, event)">
          {{value.title}}
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: 'dropdown',
  data() {
    return {
      isDropdownOpen: false,
      dataValue: ''
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick(data, event) {
      this.dataValue = data.title
      this.toggleDropdown()
      this.$emit('clicked', event)
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  },
  computed: {
    placeholderValue() {
      if (this.dataValue !== '') {
        return this.dataValue
      }

      return this.placeholder;
    }
  },
}
</script>
<style lang="scss" scoped>
.dropdown {
  height: 50px;
  width: 200px;
  border: 2px solid #ff0;
  border-radius: 3px;
  background-color: red;
  display: flex;
  flex-direction: column;

  &__placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 15px;
    cursor: pointer;
  }
  
  .fa-angle-down {
    font-size: 20px;
  }

  &__list {
    background-color: green;
    position: relative;
    top: 1px;
    margin: 0;
    text-align: left;
    padding: 0;
    cursor: default;

    &--open {
      background-color: gainsboro;
    }

    &--closed {
      height: 0;
      overflow: hidden
    }

    li {
      padding: 5px;
      list-style-type: none;
    }
  }
}
</style>
