<template>
	<Spinner v-if="getLoading" />
	<v-content v-else>
		<h3>This is Dashboard page!</h3>
		<v-container>
			<h3>Hi, Friend!</h3>
			<ul>
				<li>email: {{ returnLoginUser }}</li>
				<li>created: {{ returnCreatedAcc }}</li>
				<li>updated: {{ returnUpdateAcc }}</li>
			</ul>
			{{ getTotalCount }}
		</v-container>
		<v-container>
			Your members:
			<router-link to="/members">Members</router-link></v-container
		>
	</v-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";

export default {
	name: "Dashboard",

	components: {
		Spinner,
	},

	data() {
		return {
			totalCount: null,
		};
	},

	methods: {
		...mapActions(["fetchTotalAccounts"]),
	},

	created() {
		this.fetchTotalAccounts();
	},

	computed: {
		...mapGetters(["getUserProfile", "getLoading", "getTotalCount"]),
		returnLoginUser() {
			return this.getUserProfile.login;
		},
		returnCreatedAcc() {
			return this.getUserProfile.createdAt;
		},
		returnUpdateAcc() {
			return this.getUserProfile.updatedAt;
		},
	},
};
</script>

<style></style>
