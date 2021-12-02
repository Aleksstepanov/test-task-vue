<template>
	<v-app>
		<v-theme-provider root>
			<Spinner v-if="isLoading" />
			<VueExtendLayout v-else />
		</v-theme-provider>
	</v-app>
</template>

<script>
import VueExtendLayout from "vue-extend-layout";
import { mapActions, mapGetters } from "vuex";
import Spinner from "@/components/Spinner.vue";

export default {
	name: "App",

	components: {
		VueExtendLayout,
		Spinner,
	},

	data() {
		return {
			isLoading: true,
		};
	},

	methods: {
		...mapActions(["refreshToken"]),
	},

	async created() {
		await this.refreshToken()
			.then(() => {
				this.isLoading = false;
				this.$router.push("/dashboard");
			})
			.catch(() => (this.isLoading = false));
	},

	computed: {
		...mapGetters(["getLoading"]),
	},
};
</script>
<style lang="scss"></style>
