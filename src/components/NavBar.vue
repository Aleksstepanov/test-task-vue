<template>
	<v-app-bar flat color="main" max-width="100%" class="d-flex flex-row">
		<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			height="100vh"
			hide-overlay
		>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Account</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<SwitchTheme />
	</v-app-bar>
</template>

<script>
import SwitchTheme from "./SwitchTheme.vue";
export default {
	name: "NavBar",

	data: () => ({
		drawer: false,
		group: null,
	}),

	components: {
		SwitchTheme,
	},
};
</script>

<style>
.v-toolbar__content {
	width: 100%;
	justify-content: space-between;
}
</style>
