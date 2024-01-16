"use client";
import React from "react";
import Navbar from "./Navbar";
import { MoveRight } from "lucide-react";
import { syne } from "@/constants/constants";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const Header = () => {
	return (
		<header className="mb-24">
			<Navbar />
			<div className="px-20">
				<motion.div
					className="flex flex-col items-center space-y-16 relative text-white"
					// @ts-ignore
					// variants={staggerContainer}
					// initial="hidden"
					// whileInView="show"
					// viewport={{ once: false, amount: 0.25 }}
				>
					<div className="flex flex-col items-center space-y-4">
						<motion.p
							className="text-lg"
							variants={textVariant(1.5)}
						>
							Hi, I’m Alpha Amadou Diallo 👋
						</motion.p>
						<motion.h1
							className={`${syne.className} title-text text-6xl leading-snug text-center`}
							variants={textVariant(1.4)}
						>
							Web Developer working with JavaScript,
							TypeScript and PHP
						</motion.h1>
						{/* <p className="text-center">
							I&apos;m a full stack developer
							(React.js & Laravel) with a focus on
							creating (and occasionally designing)
							exceptional digital experiences that
							are fast, accessible, visually
							appealing, and responsive. Even though
							I have been creating web applications
							for over 2 years, I still love it as
							if it was something new.
						</p> */}
					</div>
					<button className="bg-primary text-xs font-bold flex items-center gap-3 text-grey_light px-5 py-2 rounded-4xl -tracking-tighter uppercase">
						<span>Explore works</span>
						<MoveRight width={14} />
					</button>
					<div className="w-40 h-32 bg-grey blur-[100px]  absolute right-0 -top-10" />
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
