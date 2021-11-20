import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: "#5BE584",
				main: "#00AB55",
				secondary: "#84A9FF",
				accent: "#AAF27F",
				error: "#FFA48D",
				info: "#74CAFF",
				success: "#AAF27F",
				warning: "#FFE16A",
				auth: {
					primary: "#f5f5f5",
				},
			},
			dark: {
				primary: "#007B55",
				main: "#005249",
				secondary: "#1939B7",
				accent: "#FF4081",
				error: "#B72136",
				info: "#0C53B7",
				success: "#229A16",
				warning: "#B78103",
				contrastText: "#fff",
				auth: {
					primary: "#212121",
				},
			},
		},
	},
});
