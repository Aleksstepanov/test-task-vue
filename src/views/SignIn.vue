<template>
	<v-form
		:style="'width: 400px; height: 400px; margin-top: 60px'"
		@submit.prevent="signInClickHandler"
	>
		<v-text-field
			label="Email"
			v-model="form.email"
			append-icon="mdi-email"
			type="email"
		>
		</v-text-field>
		<v-text-field
			:type="showPassword ? 'text' : 'password'"
			label="Password"
			v-model="form.password"
			:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
			@click:append="iconEyeClickHandler"
		>
		</v-text-field>
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
			showPassword: false,
		};
	},

	methods: {
		signInClickHandler() {
			console.log(this.form);
		},
		iconEyeClickHandler() {
			this.showPassword = !this.showPassword;
		},
	},

	computed: {},
};
</script>
