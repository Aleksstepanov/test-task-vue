<template>
	<v-switch
		v-model="isDark"
		class="mt-6"
		@click="switchThemeClickHandler"
		:append-icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
		><v-icon>{{
			isDark ? "mdi-weather-night" : "mdi-weather-sunny"
		}}</v-icon></v-switch
	>
</template>

<script>
export default {
	name: "SwitchTheme",

	data() {
		return {
			isDark: false,
		};
	},

	created() {
		this.isDark = JSON.parse(localStorage.getItem("dark-theme"))?.dark || false;
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
