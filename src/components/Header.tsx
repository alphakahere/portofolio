import React from "react";
import Navbar from "./Navbar";
import { MoveRight } from "lucide-react";
import { syne } from "@/constants/constants";
import { useTranslations } from "next-intl";

const Header = () => {
	const t = useTranslations("header");
	return (
		<header className="mb-24 pt-5">
			<Navbar />
			<div className="px-5 md:px-20">
				<div className="flex flex-col items-center space-y-16 relative text-white">
					<div className="flex flex-col items-center space-y-4">
						<p className="text-lg whitespace-nowrap">
							{t("greetings")}👋
						</p>
						<h1
							className={`${syne.className} title-text text-2xl leading-snug text-center`}
							// variants={textVariant(1.4)}
						>
							Web Developer working with JavaScript,
							TypeScript and PHP
						</h1>
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
					<div className="w-40 h-32 bg-grey blur-[100px]  absolute right-0 -top-10 hidden" />
				</div>
			</div>
		</header>
	);
};

export default Header;
