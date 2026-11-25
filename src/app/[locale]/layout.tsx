import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { locales, site } from "@/data/site";

const serif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-serif",
	display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

// Runs before first paint: stored theme, else system preference (no flash).
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "meta" });
	const url = `${site.url}/${locale}`;
	return {
		metadataBase: new URL(site.url),
		title: t("title"),
		description: t("description"),
		authors: [{ name: site.author }],
		creator: site.author,
		alternates: {
			canonical: url,
			languages: { en: `${site.url}/en`, fr: `${site.url}/fr` },
		},
		openGraph: {
			type: "website",
			locale: locale === "fr" ? "fr_FR" : "en_US",
			url,
			title: t("title"),
			description: t("description"),
			siteName: site.name,
			images: [{ url: "/images/profile.png", alt: site.author }],
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: ["/images/profile.png"],
			creator: "@alphakahere",
		},
		icons: { icon: "/favicon.png", apple: "/favicon.png" },
		robots: { index: true, follow: true },
	};
}

export default async function RootLayout({ children, params: { locale } }: Props) {
	unstable_setRequestLocale(locale);
	const t = await getTranslations("nav");
	return (
		<html
			lang={locale}
			className={`${serif.variable} ${sans.variable} ${mono.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className="overflow-x-hidden">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
				>
					{t("skipToContent")}
				</a>
				<Navbar />
				<main id="main">{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
