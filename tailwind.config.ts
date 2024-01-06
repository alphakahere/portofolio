import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FF9142",
				dark: "#1A1A1A",
				dark2: "#03030480",
				grey: "#A8A8A8",
				grey_light: "#F4F7FA",
				greyText: "#A8A8A8",
			},
			borderRadius: {
				"4xl": "30px",
			},
		},
	},
	plugins: [],
};
export default config
