<template>
  <div>
    <div class="search-box">
      <input 
        type="text"
        placeholder="Search">

      <button @click="handleClick">
        <span v-show="isOpen">
          <i class="fas fa-times-circle"/>
        </span>
        <span v-show="!isOpen">
          <i class="fas fa-search"></i>
        </span>
      </button>
    </div>

    <div v-if="isOpen" class="dropdown-search-box">
      <input type="text">
      <button @click="handleClick">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick(event) {
      if (window.innerWidth < 480) {
        if (this.isOpen) {
          this.handleSearch()
        }

        this.toggleSearchBox()
      }

      this.handleSearch()
    },
    handleSearch() {
      // send request here
    },
    toggleSearchBox() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
<style lang="scss">
@import '../styles/colours';
@import '../styles/breakpoints';

.search-box {
  display: flex;
  margin: 5px;

  button {
    color: $white;
    background-color: $light-green;
    outline: none;
    border-radius: 5px;
    border: 2px solid $white;
    padding: 8px 10px;

    @include tablet {
      border-radius: 0 5px 5px 0;
    }
  }

  input {
    border-style: none;
    padding-left: 10px;
    border-radius: 5px 0 0 5px;
    display: none;

    @include tablet {
      display: inline;
      width: 100px;
    }

    @include desktop {
      width: 150px;
    }
  }
}

.dropdown-search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 73px;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: $light-green;
  
  input {
    height: 66%;
    width: 90%;
    border-radius: 6px 0 0 6px;
    border: none;
    padding-left: 10px;
  }

  button {
    color: $white;
    background-color: $light-green;
    outline: none;
    border-radius: 0 5px 5px 0;
    border: 2px solid $white;
    padding: 8px 10px;
  }

  @include tablet {
    display: none;
  }
}
</style>
