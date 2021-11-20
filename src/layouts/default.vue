<template>
	<v-content tag="div">
		<NavBar />
		<router-view />
		<v-footer />
	</v-content>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
	components: {
		NavBar,
	},
};
</script>

<style></style>
