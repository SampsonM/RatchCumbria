<template>
  <div class="dropdown">
    <div class="dropdown__placeholder"
      @click="toggleDropdown">
      <p>
        {{placeholderValue}}
      </p>
      <i class="fas fa-angle-down"></i>
    </div>

  <div class="dropdown__container">
      <ul class="dropdown__container-list"
        :class="isDropdownOpen ? 'dropdown__container-list--open' : 'dropdown__container-list--closed'">
        <li
          v-for="(value, index) in data"
          :key="index"
          @click="() => handleClick(value)">
            {{value.title}}
        </li>
      </ul>
  </div>
    
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
    handleClick(data) {
      this.dataValue = data.title;
      this.toggleDropdown()
      this.$emit('clicked', data)
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

  &__container {
    position: fixed;
    width: 200px;
    margin-top: 48px;
  }

  &__container-list {
    background-color: green;
    position: relative;
    left: -2px;
    margin: 0;
    text-align: left;
    padding: 0;
    cursor: default;
    border-radius: 3px;

    &--open {
      background-color: gainsboro;
      max-height: 200px;
      overflow: auto;
    }

    &--closed {
      height: 0;
      overflow: hidden
    }

    li {
      padding: 10px 5px 0 10px;
      list-style-type: none;

      &:last-child {
        padding-bottom: 10px;
      }
    }
  }
}

@keyframes openDropdown {
  from {
    height: 0;
  }
  to {
    height: auto;
  }
}
</style>
