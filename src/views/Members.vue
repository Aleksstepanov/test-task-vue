<template>
	<Spinner v-if="getLoading" />
	<v-container v-else>
		<h3>Members page</h3>
		<v-data-table
			v-if="returnAccountList"
			:headers="headers"
			:items="returnAccountList"
			:items-per-page="10"
			class="elevation-1"
		></v-data-table>
	</v-container>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { mapGetters, mapActions } from "vuex";
import dayjs from "dayjs";

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
		...mapActions(["fetchAccountList", "fetchAccountListSort"]),
	},

	async created() {
		await this.fetchAccountList();
	},

	computed: {
		...mapGetters(["getAccountList", "getLoading"]),
		returnAccountList() {
			const { list } = this.getAccountList?.accounts || [];
			return (
				list?.map(
					(item) =>
						(item = {
							login: item.login,
							createdAt: dayjs(item.createdAt).format("DD-MM-YYYY HH:mm:ss"),
						})
				) || ""
			);
		},
	},
};
</script>

<style></style>
