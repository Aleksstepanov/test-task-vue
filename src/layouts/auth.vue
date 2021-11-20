<template>
	<v-content
		d-flex
		flex-column
		:tag="'div'"
		:class="{
			dark: this.$vuetify.theme.dark,
			light: this.$vuetify.theme.light,
		}"
	>
		<v-app-bar flat color="auth.primary"> <SwitchTheme /></v-app-bar>
		<v-container
			d-flex
			flex-column
			align-center
			justify-xl-center
			justify-lg-center
			:style="'height: 100vh'"
		>
			<v-app-bar
				flat
				color="white"
				max-height="30px"
				d-flex
				:style="'margin-bottom: 20px'"
			>
				<router-link to="/login" :style="'padding-right: 20px'"
					>Login</router-link
				>
				<router-link to="/register">Register</router-link>
			</v-app-bar>
			<router-view />
		</v-container>
	</v-content>
</template>

<script>
import SwitchTheme from "@/components/SwitchTheme.vue";
export default {
	components: {
		SwitchTheme,
	},
};
</script>

<style lang="scss" scoped>
.dark {
	background: #212121;
}
.light {
	background: #f5f5f5;
}
</style>
