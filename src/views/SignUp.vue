<template>
	<v-form
		:style="'width: 400px; height: 400px; margin-top: 60px'"
		@submit.prevent="signInClickHandler"
	>
		<v-text-field
			label="Email"
			v-model="email"
			append-icon="mdi-email"
			type="email"
			:error-messages="emailErrors"
			required
			@input="$v.email.$touch()"
			@blur="$v.email.$touch()"
		></v-text-field>
		<v-text-field
			:type="showPassword ? 'text' : 'password'"
			label="Password"
			v-model="password"
			:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
			@click:append="iconEyeClickHandler"
			:error-messages="passwordErrors"
			required
			@input="$v.password.$touch()"
			@blur="$v.password.$touch()"
		>
		</v-text-field>
		<v-text-field label="Last Name" v-model="lastName" />
		<v-text-field
			label="First Name"
			v-model="firstName"
			:error-messages="firstNameErrors"
			@input="$v.firstName.$touch()"
			@blur="$v.firstName.$touch()"
		/>
		<v-row>
			<v-col sm="4" offset="8" class="mt-12">
				<v-btn
					color="primary"
					:style="'width: 100%'"
					type="submit"
					:disabled="$v.$invalid"
					>Sign Up</v-btn
				>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
	name: "Register",

	components: {},

	data() {
		return {
			email: "",
			password: "",
			lastName: "",
			firstName: "",
			showPassword: false,
		};
	},

	validations: {
		email: { required, email },
		password: { required, minLength: minLength(6) },
		firstName: { required },
	},

	methods: {
		signInClickHandler() {
			if (!this.$v.$invalid) {
				console.log("register!");
			}
		},
		iconEyeClickHandler() {
			this.showPassword = !this.showPassword;
		},
	},

	computed: {
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Must be valid e-mail");
			!this.$v.email.required && errors.push("E-mail is required");
			return errors;
		},
		passwordErrors() {
			const errors = [];
			if (!this.$v.password.$dirty) return errors;
			!this.$v.password.required && errors.push("Password is required");
			!this.$v.password.minLength && errors.push("Password is min");
			return errors;
		},
		firstNameErrors() {
			const errors = [];
			if (!this.$v.firstName.$dirty) return errors;
			!this.$v.firstName.required && errors.push("Password is required");
			return errors;
		},
	},
};
</script>
