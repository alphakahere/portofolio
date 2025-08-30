import type { Metadata } from "next";
import { Inter, Syne, Rubik } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "alphakahere.dev",
	description:
		"Alpha Amadou Diallo - Full Stack Developer | Javascript | React | Next.js | Node.js | Express",
	icons: {
		icon: "/favicon.png",
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
