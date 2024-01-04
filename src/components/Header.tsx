import React from "react";
import Navbar from "./Navbar";
import { syne } from "@/app/layout";
import { ArrowRightIcon } from "lucide-react";

const Header = () => {
	return (
		<header>
			<Navbar />
			<div className="px-20">
				<div className="flex flex-col items-center space-y-16 relative text-white">
					<div className="flex flex-col items-center space-y-4">
						<p>Hi, I’m Alpha Amadou Diallo 👋</p>
						<h1
							className={`${syne.className} text-center text-white text-6xl font-bold leading-normal`}
						>
							Web Developer working with <br />{" "}
							JavaScript, TypeScript and PHP
						</h1>
						<p className="text-center">
							I'm a full stack developer (React.js &
							Node.js) with a focus on creating (and
							occasionally designing) exceptional
							digital experiences that are fast,
							accessible, visually appealing, and
							responsive. Even though I have been
							creating web applications for over 2
							years, I still love it as if it was
							something new.
						</p>
					</div>
					<button className="bg-primary text-xs font-bold flex items-center gap-3 text-grey_light px-5 py-2 rounded-4xl -tracking-tighter uppercase">
						<span>Explore works</span>
						<ArrowRightIcon width={14} />
					</button>
					<div className="w-44 h-40 bg-grey blur-[100px]  absolute right-52 -top-10" />
				</div>
			</div>
		</header>
	);
};

export default Header;
