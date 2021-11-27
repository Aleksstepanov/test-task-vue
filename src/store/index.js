import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import accounts from "./modules/accounts";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		error: null,
		isLoading: false,
		information: {},
	},
	mutations: {
		setError(state, val) {
			state.error = val;
		},
		setLoading(state, val) {
			state.isLoading = val;
		},
		setInformation(state, val) {
			state.information = val;
		},
	},
	actions: {},
	getters: {
		getError: (state) => state.error,
		getLoading: (state) => state.isLoading,
		getInformation: (state) => state.information,
	},
	modules: {
		auth,
		accounts,
	},
});
