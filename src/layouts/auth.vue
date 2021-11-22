<template>
	<Spinner v-if="false" />
	<v-content
		v-else
		d-flex
		flex-column
		:tag="'div'"
		:style="{ background: this.background }"
	>
		<v-app-bar
			flat
			color="main"
			max-width="100%"
			class="d-flex flex-row justify-sm-end"
			width="100%"
		>
			<SwitchTheme
		/></v-app-bar>
		<v-container
			d-flex
			flex-column
			align-center
			justify-xl-center
			justify-lg-center
			:style="'height: 100vh'"
		>
			<v-app-bar
				tag="div"
				flat
				color="main"
				max-height="30px"
				d-flex
				:style="'margin-bottom: 20px'"
			>
				<v-list color="main">
					<router-link to="/" :class="{ active: this.$route.path === '/' }"
						>Login</router-link
					>
					<router-link
						to="/register"
						:class="{ active: this.$route.path === '/register' }"
						:style="'margin-left: 20px;'"
						>Register</router-link
					>
				</v-list>
			</v-app-bar>
			<router-view />
		</v-container>
	</v-content>
</template>

<script>
import SwitchTheme from "@/components/SwitchTheme.vue";
import Spinner from "@/components/Spinner.vue";

export default {
	components: {
		SwitchTheme,
		Spinner,
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

<style lang="scss" scoped>
.active {
	font-weight: bold;
}
.v-toolbar__content {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}
</style>
