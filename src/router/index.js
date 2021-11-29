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
		await store.dispatch("refreshToken");
		return true;
	}
	return false;
};
const isAuthenticated = storeLoggedIn || loadSessionFromLocalStorage;
router.beforeEach((to, from, next) => {
	if (to.matched.some((route) => route.meta?.requiredAuth)) {
		if (!isAuthenticated) {
			next({
				path: "/",
				params: { nextUrl: to.fullPath },
			});
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
