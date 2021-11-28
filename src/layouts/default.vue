<template>
	<v-main tag="div" :style="{ background: this.background }">
		<NavBar />
		<router-view />
	</v-main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
	components: {
		NavBar,
	},

	inject: ["theme"],

	computed: {
		background() {
			const { isDark } = this.theme;
			return isDark
				? this.$vuetify.theme.themes["dark"].main
				: this.$vuetify.theme.themes["light"].main;
		},
	},
};
</script>

<style></style>
