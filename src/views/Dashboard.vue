<template>
	<Spinner v-if="getLoading" />
	<v-main v-else>
		<h3>This is Dashboard page!</h3>
		<v-container v-if="getUserProfile">
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
			<a @click="linkClickHanlder">Members</a></v-container
		>
	</v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";

export default {
	name: "Dashboard",

	components: {
		Spinner,
	},

	methods: {
		...mapActions(["fetchTotalAccounts"]),
		linkClickHanlder() {
			this.$router.push("/members");
		},
	},

	async created() {
		await this.fetchTotalAccounts();
	},

	computed: {
		...mapGetters(["getUserProfile", "getLoading", "getTotalCount"]),
		returnLoginUser() {
			return this.getUserProfile.login || "";
		},
		returnCreatedAcc() {
			return this.getUserProfile.createdAt || "";
		},
		returnUpdateAcc() {
			return this.getUserProfile.updatedAt || "";
		},
	},
};
</script>

<style></style>
