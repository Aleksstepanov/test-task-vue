<template>
	<div class="d-flex flex-row">
		<v-switch v-model="isDark" class="mt-6" @click="switchThemeClickHandler">
		</v-switch>
		<v-icon :color="isDark ? '#fff' : 'black'">{{
			isDark ? "mdi-weather-night" : "mdi-weather-sunny"
		}}</v-icon>
	</div>
</template>

<script>
export default {
	name: "SwitchTheme",

	data() {
		return {
			isDark: false,
		};
	},

	methods: {
		switchThemeClickHandler() {
			this.$vuetify.theme.dark = this.isDark;
			const dark = JSON.stringify({ dark: this.isDark });
			localStorage.setItem("dark-theme", dark);
		},
	},
};
</script>

<style lang="scss" scoped>
.v-icon {
	color: black;
	fill: black;
}
</style>
