export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const site = {
	url: "https://alphakahere.dev",
	name: "AlphaKahere",
	author: "Alpha Amadou Diallo",
	email: "hello@alphakahere.dev",
	blog: "https://blog.alphakahere.dev/",
	linkedin: "https://www.linkedin.com/in/alphakahere/",
	github: "https://github.com/alphakahere",
};

/** Header/footer navigation. `key` maps to `nav.<key>` in messages. */
export const navItems = [
	{ key: "about", href: "#about" },
	{ key: "projects", href: "#work" },
	{ key: "expertise", href: "#expertise" },
	{ key: "insights", href: site.blog, external: true },
	{ key: "contact", href: "#contact" },
] as const;
