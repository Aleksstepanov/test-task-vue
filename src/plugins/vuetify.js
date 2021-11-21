import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.green.lighten1,
				main: colors.green.lighten5,
				secondary: colors.green.lighten2,
				accent: "#AAF27F",
				error: "#FFA48D",
				info: "#74CAFF",
				success: "#AAF27F",
				warning: "#FFE16A",
			},
			dark: {
				primary: colors.green.darken1,
				main: colors.green.darken4,
				secondary: colors.green.darken2,
				accent: "#FF4081",
				error: "#B72136",
				info: "#0C53B7",
				success: "#229A16",
				warning: "#B78103",
				contrastText: "#fff",
			},
		},
	},
});
