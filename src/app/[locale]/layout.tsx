import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://alphakahere.dev"),
	title: "alphakahere.dev",
	description:
		"Alpha Amadou Diallo - Full Stack Developer | Javascript | React | Next.js | Node.js | Express",
	keywords: [
		"Full Stack Developer",
		"JavaScript",
		"React",
		"Next.js",
		"Node.js",
		"Express",
		"Web Development",
		"Portfolio",
		"Frontend",
		"Backend",
		"Software Engineer",
	],
	authors: [{ name: "Alpha Amadou Diallo" }],
	creator: "Alpha Amadou Diallo",
	publisher: "Alpha Amadou Diallo",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://alphakahere.dev",
		title: "alphakahere.dev - Full Stack Developer Portfolio",
		description:
			"Alpha Amadou Diallo - Full Stack Developer specializing in JavaScript, React, Next.js, Node.js, and Express",
		siteName: "alphakahere.dev",
		images: [
			{
				url: "/images/profile.png",
				width: 1200,
				height: 630,
				alt: "Alpha Amadou Diallo - Full Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "alphakahere.dev - Full Stack Developer Portfolio",
		description:
			"Alpha Amadou Diallo - Full Stack Developer specializing in JavaScript, React, Next.js, Node.js, and Express",
		images: ["/images/profile.png"],
		creator: "@alphakahere",
		site: "@alphakahere",
	},
	manifest: "/manifest.json",
	icons: {
		icon: [
			{ url: "/favicon.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.png", sizes: "16x16", type: "image/png" },
		],
		apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
		other: [{ url: "/favicon.png", rel: "mask-icon", color: "#000000" }],
	},
	alternates: {
		canonical: "https://alphakahere.dev",
		languages: {
			"en-US": "https://alphakahere.dev/en",
			"fr-FR": "https://alphakahere.dev/fr",
		},
	},
	category: "technology",
	classification: "Portfolio",
	referrer: "origin-when-cross-origin",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};
const locales = ["en", "fr"];

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Props) {
	unstable_setRequestLocale(locale);
	return (
		<html lang={locale}>
			<body
				className={`${rubik.className} bg-dark snap-y snap-mandatory overflow-x-hidden`}
			>
				<div className="px-5 lg:px-20">
					<Header />
					<main className="snap-y snap-mandatory">{children}</main>
				</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
