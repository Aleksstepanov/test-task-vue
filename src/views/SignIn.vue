<template>
	<v-form
		:style="'width: 400px; height: 400px; margin-top: 60px'"
		@submit.prevent="signInClickHandler"
	>
		<v-text-field label="Email" v-model="form.email" />
		<v-text-field label="Password" v-model="form.password" />
		<v-row>
			<v-col sm="4" offset="8" class="mt-12">
				<v-btn color="primary" :style="'width: 100%'" type="submit"
					>Sign In</v-btn
				>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
export default {
	name: "Login",

	components: {},

	data() {
		return {
			form: {
				email: "",
				password: "",
			},
		};
	},

	methods: {
		signInClickHandler() {
			console.log(this.form);
		},
	},

	computed: {},
};
</script>
