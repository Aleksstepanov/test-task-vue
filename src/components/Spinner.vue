<template>
	<div class="progress-circular-wrap" :style="{ background: this.background }">
		<v-progress-circular
			:size="50"
			color="amber"
			indeterminate
		></v-progress-circular>
	</div>
</template>

<script>
export default {
	name: "Spinner",

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

<style>
.progress-circular-wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
