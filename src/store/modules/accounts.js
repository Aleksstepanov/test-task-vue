import { apolloClient } from "@/vue-apollo";
import {
	TOTAL_COUNT,
	LIST_ACCOUNT,
	LIST_ACCOUNT_ORDER_ASC,
	LIST_ACCOUNT_ORDER_DESC,
} from "@/graphql/queries";

const state = {
	totalCount: null,
	list: [],
};
const actions = {
	async fetchTotalAccounts({ commit }) {
		commit("setLoading", true);
		try {
			const { data } = await apolloClient.query({
				query: TOTAL_COUNT,
			});
			const { totalCount } = await data.accounts;

			commit("setLoading", false);
			commit("setTotalAccount", totalCount);

			commit("setError", null);
			commit("setInformation", { status: "ok", message: "data received" });
		} catch (error) {
			commit("setLoading", false);
			commit("setError", error);
			commit("setInformation", { status: "error", message: `${error}` });
		}
	},
	async fetchAccountList({ commit }) {
		commit("setLoading", true);
		try {
			const { data } = await apolloClient.query({
				query: LIST_ACCOUNT,
			});
			commit("setAccountList", data);
			commit("setLoading", false);
			commit("setError", null);
			commit("setInformation", {
				status: "ok",
				message: "data received",
			});
		} catch (error) {
			commit("setLoading", false);
			commit("setError", error);
			commit("setInformation", { status: "error", message: `${error}` });
		}
	},
	async fetchAccountListSort({ commit }, payload) {
		commit("setLoading", true);
		const queryConst =
			payload === "ASC" ? LIST_ACCOUNT_ORDER_ASC : LIST_ACCOUNT_ORDER_DESC;
		try {
			const { data } = apolloClient.query({
				query: queryConst,
			});
			commit("setAccountList", data);
			commit("setLoading", false);
			commit("setError", null);
			commit("setInformation", {
				status: "ok",
				message: "data received",
			});
		} catch (error) {
			commit("setLoading", false);
			commit("setError", error);
			commit("setInformation", { status: "error", message: `${error}` });
		}
	},
};
const mutations = {
	setTotalAccount(state, val) {
		state.totalCount = val;
	},
	setAccountList(state, val) {
		state.list = val;
	},
};
const getters = {
	getTotalCount: (state) => state.totalCount,
	getAccountList: (state) => state.list,
};

export default { state, actions, mutations, getters };
