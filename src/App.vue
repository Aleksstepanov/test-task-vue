<template>
	<v-app>
		<v-theme-provider root>
			<VueExtendLayout />
		</v-theme-provider>
	</v-app>
</template>

<script>
import VueExtendLayout from "vue-extend-layout";

export default {
	name: "App",

	components: {
		VueExtendLayout,
	},
};
</script>
<style lang="scss"></style>
