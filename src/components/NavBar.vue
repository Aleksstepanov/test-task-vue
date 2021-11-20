<template>
	<v-app-bar flat>
		<SwitchTheme />
	</v-app-bar>
</template>

<script>
import SwitchTheme from "./SwitchTheme.vue";
export default {
	name: "NavBar",

	components: {
		SwitchTheme,
	},
};
</script>

<style></style>
