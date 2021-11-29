<template>
	<v-app>
		<v-theme-provider root>
			<VueExtendLayout />
		</v-theme-provider>
	</v-app>
</template>

<script>
import VueExtendLayout from "vue-extend-layout";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "App",

	components: {
		VueExtendLayout,
	},

	methods: {
		...mapActions(["refreshToken"]),
	},

	async created() {
		await this.refreshToken();
	},

	computed: {
		...mapGetters(["getLoading"]),
	},
};
</script>
<style lang="scss"></style>
