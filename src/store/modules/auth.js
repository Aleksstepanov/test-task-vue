import axios from "../../utils/axios";

const state = {
	userProfile: null,
};
const actions = {
	async login({ commit, dispatch }, payload) {
		commit("setLoading", true);
		const { email, password } = payload;
		try {
			const user = await axios.post(
				"https://jsonplaceholder.typicode.com/users/1",
				{
					email,
					password,
				}
			);
			dispatch("fetchUser", user);
			commit("setInformation", { code: "success", message: "user login" });
			commit("setErrors", null);
			commit("setLoading", false);
		} catch (error) {
			commit("setError", error);
			commit("setLoading", false);
			throw new Error(error);
		}
	},
	async register() {},
	async logOut({ dispatch }) {
		dispatch("fetchUser", null);
		await fetch("/");
	},
	fetchUser({ commit }, payload) {
		commit("setUserProfile", payload);
	},
};
const mutatios = {
	setUserProfile(state, val) {
		state.userProfile = val;
	},
};
const getters = {
	getUserProfile: (state) => state.userProfile,
};

export default { state, actions, mutatios, getters };
