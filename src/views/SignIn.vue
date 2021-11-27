<template>
	<Spinner v-if="getLoading" />
	<v-form
		v-else
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
		>
		</v-text-field>
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
		<v-row>
			<v-col sm="4" offset="8" class="mt-12">
				<v-btn
					color="primary"
					:style="'width: 100%'"
					type="submit"
					:disabled="$v.$invalid"
					>Sign In</v-btn
				>
			</v-col>
		</v-row>
		<SnackBar
			:snackbar="getInformation.status === 'error'"
			:text="returnErrorText"
		/>
	</v-form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

import Spinner from "@/components/Spinner.vue";
import SnackBar from "@/components/SnackBar.vue";

import { ErrMessage } from "../utils/constError";

export default {
	name: "Login",

	validations: {
		email: { required, email },
		password: { required, minLength: minLength(6) },
	},

	components: {
		Spinner,
		SnackBar,
	},

	data() {
		return {
			email: "",
			password: "",
			showPassword: false,
		};
	},

	methods: {
		...mapActions(["login"]),
		async signInClickHandler() {
			if (!this.$v.$invalid) {
				this.login({
					login: this.email,
					password: this.password,
				}).then(() => this.$router.push("/dashboard"));
			}
		},
		iconEyeClickHandler() {
			this.showPassword = !this.showPassword;
		},
	},

	computed: {
		...mapGetters(["getLoading", "getInformation"]),
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
		returnErrorText() {
			return ErrMessage(this.getInformation.message);
		},
	},
};
</script>
