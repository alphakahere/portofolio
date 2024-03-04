const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "/**",
			},
		],
	},
	// i18n: {
	// 	locales: ["default", "en-US", "fr"],
	// 	defaultLocale: "default",
	// },
};

module.exports = withNextIntl(nextConfig);
