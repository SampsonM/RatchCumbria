<template>
  <div class="signup">
    <div class="banner">
      <h1>Sign up here</h1>

      <form>
        <span class="label-input">
          <label for="first-name">First Name: </label>
          <input type="text" placeholder="first name" name="first-name">
        </span>
        <span class="label-input">
          <label for="last-name">last Name: </label>
          <input type="text" placeholder="last name" name="last-name">
        </span>
        <span class="label-input">
          <label for="company-name">company Name: </label>
          <input type="text" placeholder="company name" name="company-name">
        </span>
        <span class="label-input">
          <label for="trade">Trade: </label>
          <select name="trade" class="dropdown">
            <option 
              v-for="(trade, index) in trades"
              :key="index">
              {{trade}}
            </option>
          </select>
        </span>

        <p>Address</p>
        <span class="label-input">
          <label for="number">number: </label>
          <input type="number" placeholder="number" name="number">
        </span>
        <span class="label-input">
          <label for="street">street: </label>
          <input type="text" placeholder="street" name="street">
        </span>
        <span class="label-input">
          <label for="town">town: </label>
          <input type="text" placeholder="town" name="town">
        </span>
        <span class="label-input">
          <label for="county">county: </label>
          <input type="text" placeholder="county" name="county">
        </span>
        <span class="label-input">
          <label for="post code">post code: </label>
          <input type="text" placeholder="post code" name="post code">
        </span>

        <p>contact info</p>
        <span class="label-input">
          <label for="Phone-number">Phone number: </label>
          <input type="text" placeholder="Phone number" name="Phone-number">
        </span>
        <span class="label-input">
          <label for="Email">Email: </label>
          <input type="text" placeholder="Email" name="Email">
        </span>
        <span class="label-input">
          <label for="Website">Website: </label>
          <input type="text" placeholder="Website" name="Website">
        </span>

        <button type="submit" @click.enter.prevent="handleSubmit">
          Submit
        </button>

      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'signup',
  data() {
    return {
      trades: [
        'Select trade...',
        'Windows',
        'Plumber',
        'Joiner',
        'Plasterer',
        'Electrician',
        'Bricklayer',
        'Landscaper',
        'Gardener',
        'Carpenter',
        'Gas/ Boiler',
        'Handy Man',
        'Roofer',
        'Removals',
        'Mobile alloy wheels',
        'Insulation',
        'Welder',

      ]
    }
  },
  action: {
    // spread actions here with map actions
  },
  methods: {
    handleSubmit() {
      console.log('handleSubmit action here!!!')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/colours';

.signup {
  position: relative;
  padding: 10px;
}

.banner {
  width: 100%;
  height: auto;
  background: $lighter-green;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .label-input {
    display: flex;
    flex-direction: row;

    input {
      margin-left: auto;
    }

    select {
      margin-left: auto;
      width: 53%;
      margin-top: 2px;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
}

</style>
