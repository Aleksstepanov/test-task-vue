<template>
	<Spinner v-if="getLoading" />
	<v-container v-else>
		<h3>Members page</h3>
		<v-data-table
			:items="returnAccountList"
			:items-per-page="5"
			class="elevation-1"
		></v-data-table>
		{{ returnAccountList }}
	</v-container>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Members",

	components: {
		Spinner,
	},

	data() {
		return {
			headers: [
				{
					text: "Email",
					value: "login",
				},
				{
					text: "CreatedAT",
					value: "createdAt",
				},
			],
		};
	},

	methods: {
		...mapActions(["fetchAccountList"]),
	},

	async created() {
		await this.fetchAccountList();
	},

	computed: {
		...mapGetters(["getAccountList", "getLoading"]),
		returnAccountList() {
			const { list } = this.getAccountList.accounts;
			return list.map(
				(item) => (item = { login: item.login, createdAt: item.createdAt })
			);
		},
	},
};
</script>

<style></style>
