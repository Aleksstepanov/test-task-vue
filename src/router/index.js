import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: () => import("../views/Dashboard.vue"),
		meat: {
			auth: true,
		},
	},
	{
		path: "/members",
		name: "Mambers",
		components: () => import("../views/Members.vue"),
		mata: {
			auth: true,
		},
	},
	{
		path: "/login",
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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
