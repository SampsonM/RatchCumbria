<template>
	<div class="signup">
		<div class="banner">
		<h1>Sign up here</h1>

		<form>
			<span class="question">
			<label for="first-name">First Name:</label>
			<input type="text" placeholder="first name" name="first-name">
			</span>
			<span class="question">
			<label for="last-name">last Name:</label>
			<input type="text" placeholder="last name" name="last-name">
			</span>
			<span class="question">
			<label for="company-name">company Name:</label>
			<input type="text" placeholder="company name" name="company-name">
			</span>
			<span class="question">
			<label for="trade">Trade:</label>
			<dropdown class="dropdown" name="trade" placeholder="Select trade..." :data="trades"></dropdown>
			</span>

			<p>Address</p>
			<span class="question">
			<label for="number">number:</label>
			<input type="number" placeholder="number" name="number">
			</span>
			<span class="question">
			<label for="street">street:</label>
			<input type="text" placeholder="street" name="street">
			</span>
			<span class="question">
			<label for="town">town:</label>
			<input type="text" placeholder="town" name="town">
			</span>
			<span class="question">
			<label for="county">county:</label>
			<input type="text" placeholder="county" name="county">
			</span>
			<span class="question">
			<label for="post code">post code:</label>
			<input type="text" placeholder="post code" name="post code">
			</span>

			<p>contact info</p>
			<span class="question">
			<label for="Phone-number">Phone number:</label>
			<input type="text" placeholder="Phone number" name="Phone-number">
			</span>
			<span class="question">
			<label for="Email">Email:</label>
			<input type="text" placeholder="Email" name="Email">
			</span>
			<span class="question">
			<label for="Website">Website:</label>
			<input type="text" placeholder="Website" name="Website">
			</span>
			
			<button type="submit" @click.enter.prevent="handleSubmit">Submit</button>
		</form>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import Dropdown from "../components/dropdown";

export default {
	name: "signup",
	data() {
			return {};
	},
	components: {
			Dropdown
	},
	computed: {
			...mapState(["trades"])
	},
	action: {
		// spread actions here with map actions
	},
	methods: {
		handleSubmit() {
			console.log("handleSubmit action here!!!");
		}
	}
};
</script>
<style lang="scss">
@import "../styles/colours";

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

	.question {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
		width: 350px;

		label {
		font-size: 14px;
		}

		input {
		border-radius: 3px;
		border: 2px solid $light-green;
		color: $text-blue;
		font-size: 14px;
		margin-left: auto;
		padding: 8px 5px 10px 10px;
		width: 200px;

			&::placeholder {
				color: $placeholder-blue;
			}
		}
	}
}
</style>
