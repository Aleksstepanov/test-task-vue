import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Vuelidate from "vuelidate";
import { createProvider } from "./vue-apollo";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	apolloProvider: createProvider(),
	render: (h) => h(App),
}).$mount("#app");
