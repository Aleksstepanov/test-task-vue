import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("../views/Dashboard.vue"),
		meta: {
			requiredAuth: true,
		},
	},
	{
		path: "/members",
		name: "Members",
		component: () => import("../views/Members.vue"),
		meta: {
			requiredAuth: true,
		},
	},
	{
		path: "/",
		name: "SignIn",
		component: () => import("../views/SignIn.vue"),
		meta: {
			layout: "auth",
		},
	},
	{
		path: "/register",
		name: "SignUp",
		component: () => import("../views/SignUp.vue"),
		meta: {
			layout: "auth",
		},
	},
	{
		path: "*",
		component: { render: (h) => h("div", ["404! Page Not Found!"]) },
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

const storeLoggedIn = () => store.getters.isAuthenticated;
const loadSessionFromLocalStorage = async () => {
	const token = localStorage.getItem("refresh-token");

	if (token) {
		return await store
			.dispatch("refreshToken")
			.then(() => true)
			.catch(() => false);
	}
	return false;
};
const isAuthenticated = storeLoggedIn || loadSessionFromLocalStorage;
router.beforeEach(async (to, from, next) => {
	if (to.matched.some((route) => route.meta?.requiredAuth)) {
		if (!isAuthenticated()) {
			next("/");
		} else {
			next();
		}
	}
	next();
});
// if (to.matched.some((route) => route.meta?.requiredAuth)) {
// 	if (!isAuthenticated) {
// 		next({
// 			path: "/",
// 			params: { nextUrl: to.fullPath },
// 		});
// 	} else {
// 		next();
// 	}
// } else {
// 	next();
// }

export default router;
