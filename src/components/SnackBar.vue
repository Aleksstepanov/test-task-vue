<template>
	<v-snackbar v-model="isOpen" centered timeout="2000">
		{{ text }}

		<template v-slot:action="{ attrs }">
			<v-btn color="pink" text v-bind="attrs" @click="isOpen = false">
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {
	name: "Snackbar",

	props: {
		text: {
			type: String,
		},
		snackbar: {
			type: Boolean,
			require: true,
		},
	},

	data() {
		return {
			isOpen: Boolean,
		};
	},

	created() {
		this.isOpen = this.snackbar;
	},
};
</script>

<style></style>
