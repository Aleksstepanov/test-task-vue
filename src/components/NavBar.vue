<template>
	<v-app-bar
		flat
		color="main"
		max-width="100%"
		class="d-flex flex-row"
		dark
		app
	>
		<v-app-bar-nav-icon
			@click="drawer = true"
			:style="this.theme.isDark ? 'color: #fff' : 'color: black'"
		></v-app-bar-nav-icon>

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
					<router-link to="/dashboard">
						<v-list-item>
							<v-list-item-icon>
								<v-icon>mdi-home</v-icon>
							</v-list-item-icon>
							<v-list-item-title>Dashboard</v-list-item-title>
						</v-list-item>
					</router-link>
					<router-link to="/members">
						<v-list-item>
							<v-list-item-icon>
								<v-icon>mdi-account</v-icon>
							</v-list-item-icon>
							<v-list-item-title>Members</v-list-item-title>
						</v-list-item>
					</router-link>

					<v-list-item @click="logOutClickHandler">
						<v-list-item-icon>
							<v-icon>mdi-exit-to-app</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Log out</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<SwitchTheme />
	</v-app-bar>
</template>

<script>
import SwitchTheme from "./SwitchTheme.vue";
import { mapActions } from "vuex";

export default {
	name: "NavBar",

	data: () => ({
		drawer: false,
		group: null,
	}),

	inject: ["theme"],

	components: {
		SwitchTheme,
	},

	methods: {
		...mapActions(["logOut"]),
		async logOutClickHandler() {
			this.logOut().then(() => this.$router.push("/"));
		},
	},
};
</script>

<style>
.v-toolbar__content {
	width: 100%;
	justify-content: space-between;
}
</style>
