import type { Metadata } from "next";
import { Inter, Syne, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "alphakahere.dev",
	description: "Generated by create next app",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body
				className={`${rubik.className} bg-dark max-w-screen-2xl mx-auto py-5`}
			>
				<Header />
				<main className="">{children}</main>
			</body>
		</html>
	);
}
