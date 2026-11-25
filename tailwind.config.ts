import type { Config } from "tailwindcss";

// Colors are semantic tokens backed by CSS variables (see src/app/globals.css).
// Values are space-separated RGB channels so Tailwind opacity modifiers work.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
	darkMode: "class",
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// Radius scale from docs/DESIGN_SYSTEM.md §6
		borderRadius: {
			none: "0",
			sm: "4px",
			md: "8px",
			lg: "12px",
			xl: "16px",
			full: "9999px",
		},
		extend: {
			colors: {
				background: token("background"),
				foreground: token("foreground"),
				surface: {
					DEFAULT: token("surface"),
					secondary: token("surface-secondary"),
				},
				muted: token("muted"),
				border: token("border"),
				primary: {
					DEFAULT: token("primary"),
					hover: token("primary-hover"),
					foreground: token("primary-foreground"),
				},
				accent: token("accent"),
				success: token("success"),
			},
			fontFamily: {
				serif: ["var(--font-serif)", "Georgia", "serif"],
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
			// Type scale from docs/DESIGN_SYSTEM.md §4
			fontSize: {
				xs: ["12px", { lineHeight: "16px" }],
				sm: ["14px", { lineHeight: "20px" }],
				base: ["16px", { lineHeight: "26px" }],
				lg: ["18px", { lineHeight: "28px" }],
				xl: ["20px", { lineHeight: "28px" }],
				"2xl": ["28px", { lineHeight: "1.15" }],
				"3xl": ["36px", { lineHeight: "1.1" }],
				"4xl": ["48px", { lineHeight: "1.05" }],
				"5xl": ["64px", { lineHeight: "1" }],
			},
			maxWidth: {
				page: "1320px",
			},
		},
	},
	plugins: [],
};
export default config;
