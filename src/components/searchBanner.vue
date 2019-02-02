<template>
  <div class="search-banner">
    <h1>Search for tradesmen across Cumbria</h1>

    <div class="search-box">
      <p for="location">Location: </p>
      <dropdown 
        name="location"
        :data="locations"
        @clicked="handleClick"
        :currentValue="location"
        placeholder="select location...">
      </dropdown>

      <p for="trade">Trade: </p>
      <dropdown
        name="trade"
        :data="trades"
        @clicked="handleClick"
        :currentValue="trade"
        placeholder="select trade...">
      </dropdown>

      <router-link to="/results">
        <button
          @click="search"
          @keydown.enter="search"
          tabindex="0">
          <i class="fas fa-search"></i>
        </button>
      </router-link>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import dropdown from './dropdown'

export default {
  name: 'SearchBox',
  data() {
    return {
    }
  },
  components: {
    dropdown
  },
  computed: {
    ...mapState([
      'trades',
      'locations'
    ]),
    ...mapState({
      location: state => state.searchParameters.location,
      trade: state =>  state.searchParameters.trade
    })

  },
  methods: {
    search() {
      this.$store.dispatch('searchTrades')
    },
    handleClick(data) {
      this.$store.dispatch(`update${data.dataType}`, data)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/colours';
@import '../styles/breakpoints';

.search-banner {
  width: 100%;
  height: 200px;
  background: $lighter-green;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  h1 {
    margin: 0;
  }
}

.search-box {
  display: flex;
  margin: 5px;
  z-index: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    margin: auto 7px auto 25px;
  }

  button {
    color: $white;
    background-color: $light-green;
    outline: none;
    border-radius: 5px;
    border: 2px solid $white;
    padding: 10px 12px;
    height: 39px;
    margin-left: 10px;
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
