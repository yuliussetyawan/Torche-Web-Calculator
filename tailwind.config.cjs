/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			navy: "#0B122A",
			absorbBlue: "#5885E9",
			molecularWhite: "#D8D8D8",
			molecularPurple: "#9284F1",
			molecularTosca: "#51C1CB",
			molecularOrange: "#FF6442",
			molecularYellow: "#FFAE5F",
		},
		extend: {
			fontFamily: {
				bodycopy: "Cairo",
				headline: "Rajdhani",
			},
		},
	},
	plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
