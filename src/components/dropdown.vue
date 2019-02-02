<template>
  <div class="dropdown">
    <div class="dropdown__placeholder"
      tabindex="0"
      @keydown="toggleDropdown"
      @click="toggleDropdown">
      <p :class="{'no-placeholder' : dataValue !== ''}">
        {{placeholderValue}}
      </p>
      <i class="fas fa-angle-down"></i>
    </div>

    <ul class="dropdown__container-list"
      tabindex="0"
      :class="isDropdownOpen ? 'dropdown__container-list--open' : 'dropdown__container-list--closed'">
      <li
        v-for="(value, index) in data"
        :key="index"
        tabindex="0"
        @keydown.enter="() => handleClick(value)"
        @click="() => handleClick(value)">
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
@import '../styles/colours';

.dropdown {
  height: 39px;
  width: 200px;
  border: 2px solid $light-green;
  border-radius: 3px;
  background-color: $bg-blue;
  display: flex;
  flex-direction: column;
  align-content: center;

  &__placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 15px;
    height: 49px;
    align-content: center;
    cursor: pointer;

    & p {
      color: $placeholder-blue;
      margin: 0;
    }

    & .no-placeholder {
      color: $text-blue;
    }
  }
  
  .fa-angle-down {
    font-size: 20px;
  }

  &__container-list {
    position: fixed;
    width: 199px;
    margin-top: 38px;
    text-align: left;
    margin-left: -1px;
    padding: 0;
    cursor: default;
    border-radius: 3px;

    &--open {
      background-color: gainsboro;
      max-height: 215px;
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
