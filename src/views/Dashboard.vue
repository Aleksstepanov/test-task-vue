<template>
	<Spinner v-if="getLoading" />
	<v-main v-else>
		<v-container v-if="getUserProfile">
			<v-card outlined shaped class="pl-10">
				<v-card-title>Hi, Friend!</v-card-title>
				<v-list>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-email</v-icon>
						</v-list-item-icon>
						<v-list-item-title>email:</v-list-item-title>
						<v-list-item-subtitle>{{ returnLoginUser }}</v-list-item-subtitle>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account-plus</v-icon>
						</v-list-item-icon>
						<v-list-item-title>account created:</v-list-item-title>
						<v-list-item-subtitle>{{ returnCreatedAcc }}</v-list-item-subtitle>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account-check</v-icon>
						</v-list-item-icon>
						<v-list-item-title>account updated:</v-list-item-title>
						<v-list-item-subtitle>{{ returnUpdateAcc }}</v-list-item-subtitle>
					</v-list-item>
				</v-list>
				<v-list>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-human</v-icon>
						</v-list-item-icon>
						<v-list-item-title
							>Number of members in your circle:</v-list-item-title
						>
						<v-list-item-subtitle
							><v-card-text class="text-text-h2">{{
								getTotalCount
							}}</v-card-text></v-list-item-subtitle
						>
					</v-list-item>
				</v-list>

				<v-container>
					<v-card-text
						>Your members list.
						<a @click="linkClickHanlder"> Click here!</a></v-card-text
					>
				</v-container>
			</v-card>
		</v-container>
	</v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";
import dayjs from "dayjs";

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
			return (
				dayjs(this.getUserProfile.createdAt).format("DD-MM-YYYY HH:mm:ss") || ""
			);
		},
		returnUpdateAcc() {
			return (
				dayjs(this.getUserProfile.updatedAt).format("DD-MM-YYYY HH:mm:ss") || ""
			);
		},
	},
};
</script>

<style></style>
