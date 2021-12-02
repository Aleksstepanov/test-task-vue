import { onLogout, apolloClient } from "@/vue-apollo";
import { LOGGED_IN_USER } from "@/graphql/queries";
import { LOGIN_USER, REGISTER_USER, REFRESH_TOKEN } from "@/graphql/mutation";
// import { INVALID_PASSWORD } from "../../utils/constError";

const state = {
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

			localStorage.setItem("auth-token", token);
			localStorage.setItem("refresh-token", refreshToken);

			commit("setError", null);
			commit("setInformation", { status: "ok", message: "user logged" });

			await dispatch("setUser");
			commit("setLoading", false);
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

		localStorage.setItem("refresh-token", refreshToken);
		commit("loginUser", payload);
	},
	async refreshToken({ commit, dispatch }) {
		commit("setLoading", true);
		try {
			const oldRefreshToken = localStorage.getItem("refresh-token");
			const { data } = await apolloClient.mutate({
				mutation: REFRESH_TOKEN,
				variables: { refreshToken: oldRefreshToken },
			});

			commit("setLoading", false);
			const token = JSON.stringify(data.refresh.accessToken);
			const refreshToken = JSON.stringify(data.refresh.refreshToken);

			localStorage.setItem("auth-token", token);
			localStorage.setItem("refresh-token", refreshToken);

			await dispatch("setUser");
		} catch (error) {
			commit("setLoading", false);
			dispatch("logOut");
			console.log("user logout");
			throw new Error(error);
		}
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
	loginUser(state, val) {
		state.authStatus = true;
		state.userProfile = { ...val };
	},
	logoutUser(state) {
		state.authStatus = false;
		localStorage.removeItem("auth-token");
		localStorage.removeItem("refresh-token");
	},
};
const getters = {
	isAuthenticated: (state) => !!state.authStatus,
	getUserProfile: (state) => state.userProfile,
};

export default { state, actions, mutations, getters };
