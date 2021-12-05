<template>
	<Spinner v-if="getLoading" />
	<v-container v-else>
		<h3>Members page</h3>
		<v-data-table
			v-if="returnAccountList"
			:loading="isLoadingDataTable"
			:headers="headers"
			:items="returnAccountListOnPage"
			:items-per-page="10"
			:server-items-length="returnAccountList.length"
			@update:sort-by="sortByClickHanlder"
			@update:sort-desc="sortDescClickHandler"
			:page="options.page"
			@update:page="paginationClickHandler"
			@update:items-per-page="pageClick"
			class="elevation-1"
		>
			<template v-slot:top>
				<v-text-field
					v-model="search"
					@input="searchEmeil"
					label="Search..."
					class="mx-4"
				></v-text-field>
			</template>
		</v-data-table>
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
			search: "",
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
			isLoadingDataTable: false,
			options: {
				sortBy: false,
				sortDesc: false,
				page: 1,
			},
			isSortDesc: false,
		};
	},

	methods: {
		...mapActions([
			"fetchAccountList",
			"fetchAccountListSort",
			"fetchSearchAccounts",
		]),
		async searchEmeil(value) {
			this.isLoadingDataTable = true;
			await this.fetchSearchAccounts(value).then(
				() => (this.isLoadingDataTable = false)
			);
		},
		async sortByClickHanlder() {
			this.options = { ...this.options, sortBy: !this.options.sortBy };
			const { sortBy, sortDesc } = this.options;
			if (sortBy && !sortDesc) {
				this.isLoadingDataTable = true;
				await this.fetchAccountListSort("ASC").then(
					() => (this.isLoadingDataTable = false)
				);
			}
		},
		async sortDescClickHandler() {
			this.isSortDesc = !this.isSortDesc;
			if (this.options.sortBy && this.isSortDesc) {
				return;
			}
			if (!this.options.sortBy) {
				this.options = { ...this.options, sortDesc: false };
				return;
			}
			this.options = { ...this.options, sortDesc: !this.options.sortDesc };
			const { sortBy, sortDesc } = this.options;
			if (sortBy && sortDesc) {
				this.isLoadingDataTable = true;
				await this.fetchAccountListSort("DESC").then(
					() => (this.isLoadingDataTable = false)
				);
			}
		},
		paginationClickHandler(currentpage) {
			this.options = { ...this.options, page: currentpage };
		},
		pageClick() {
			console.log("click");
		},
	},
	watch: {
		search() {
			const { pathname } = window.location;
			window.history.pushState(
				null,
				document.title,
				`${pathname}?search=${this.search}`
			);
		},
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
		returnAccountListOnPage() {
			const itemsPerPage = Math.round(this.returnAccountList.length / 10);
			const { page } = this.options;
			return this.returnAccountList.slice(
				(page - 1) * itemsPerPage,
				page * itemsPerPage
			);
		},
	},
};
</script>

<style></style>
