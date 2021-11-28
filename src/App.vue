<template>
	<v-app>
		<v-theme-provider root>
			<VueExtendLayout />
		</v-theme-provider>
	</v-app>
</template>

<script>
import VueExtendLayout from "vue-extend-layout";
import { mapActions } from "vuex";

export default {
	name: "App",

	components: {
		VueExtendLayout,
	},

	methods: {
		...mapActions(["refreshToken"]),
	},

	// async created() {
	// 	await this.refreshToken();
	// },
};
</script>
<style lang="scss"></style>
