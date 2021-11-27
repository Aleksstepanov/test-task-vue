import { apolloClient } from "@/vue-apollo";
import { ALL_ACCOUNTS } from "@/graphql/queries";

const state = {
	totalCount: null,
};
const actions = {
	async fetchTotalAccounts({ commit }) {
		commit("setLoading", true);
		try {
			const { data } = await apolloClient.query({
				query: ALL_ACCOUNTS,
			});

			const { totalCount } = await data.accounts;

			commit("setTotalAccount", totalCount);
			commit("setLoading", false);
			commit("setError", null);
			commit("setInformation", { status: "ok", message: "data received" });
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
};
const getters = {
	getTotalCount: (state) => state.totalCount,
};

export default { state, actions, mutations, getters };
