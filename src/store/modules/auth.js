import { onLogout, apolloClient } from "@/vue-apollo";
import { LOGGED_IN_USER } from "@/graphql/queries";
import { LOGIN_USER, REGISTER_USER } from "@/graphql/mutation";
// import { INVALID_PASSWORD } from "../../utils/constError";

const state = {
	token: null,
	refreshToken: null,
	userProfile: null,
	authStatus: false,
};
const actions = {
	async register({ commit, dispatch }, payload) {
		commit("setLoading", true);
		try {
			const { data } = await apolloClient.mutate({
				mutation: REGISTER_USER,
				variables: { ...payload },
			});

			const token = JSON.stringify(data.register.accessToken);
			const refreshToken = JSON.stringify(data.register.refreshToken);

			commit("setToken", token);
			commit("setRefreshToken", refreshToken);

			localStorage.setItem("auth-token", token);
			localStorage.setItem("refresh-token", refreshToken);

			dispatch("setUser");

			commit("setLoading", false);
			commit("setError", null);
			commit("setInformation", { status: "ok", message: "register new user" });
		} catch (error) {
			commit("setLoading", false);
			commit("setError", error);
			commit("setInformation", { status: "error", message: `${error}` });
		}
	},
	async login({ commit, dispatch }, payload) {
		commit("setLoading", true);
		try {
			const { data } = await apolloClient.mutate({
				mutation: LOGIN_USER,
				variables: { ...payload },
			});

			const token = JSON.stringify(data.authenticate.accessToken);
			const refreshToken = JSON.stringify(data.authenticate.refreshToken);

			commit("setToken", token);
			commit("setRefreshToken", refreshToken);

			localStorage.setItem("auth-token", token);
			localStorage.setItem("refresh-token", refreshToken);

			commit("setLoading", false);
			commit("setError", null);
			commit("setInformation", { status: "ok", message: "user logged" });

			dispatch("setUser");
		} catch (error) {
			commit("setLoading", false);
			commit("setError", error);
			commit("setInformation", {
				status: "error",
				message: `${error.message}`,
			});
		}
	},
	async setUser({ commit }) {
		const { data } = await apolloClient.query({ query: LOGGED_IN_USER });
		const { login, id, refreshToken, createdAt, updatedAt } = await data.me;
		const payload = { login, id, createdAt, updatedAt };
		commit("setRefreshToken", refreshToken);
		commit("loginUser", payload);
	},
	async logOut({ commit }) {
		commit("logoutUser");
		onLogout(apolloClient);
	},
};
const mutations = {
	setUserProfile(state, val) {
		state.userProfile = val;
	},
	setToken(state, val) {
		state.token = val;
	},
	setRefreshToken(state, val) {
		state.refreshToken = val;
	},
	loginUser(state, val) {
		state.authStatus = true;
		state.userProfile = { ...val };
	},
	logoutUser(state) {
		state.authStatus = false;
		state.token = "" && localStorage.removeItem("auth-token");
		state.refreshToken = "" && localStorage.removeItem("refresh-token");
	},
};
const getters = {
	isAuthenticated: (state) => (state.token ? true : false),
	authStatus: (state) => state.authStatus,
	getUserProfile: (state) => state.userProfile,
};

export default { state, actions, mutations, getters };
