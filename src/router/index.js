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
		name: "Mambers",
		components: () => import("../views/Members.vue"),
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

router.beforeEach((to, from, next) => {
	const isUserLoggedIn = store.getters.isAuthenticated;
	if (to.matched.some((record) => record.meta.requiredAuth)) {
		if (!isUserLoggedIn) {
			store.dispatch("logOut");
			next({
				path: "/",
				query: { redirect: to.fullPath },
			});
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
