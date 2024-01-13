import { syne } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center mb-24 relative">
			<div className="lg:w-1/2">
				<h3
					className={`${syne.className} title-text text-4xl leading-snug mb-5`}
				>
					Let’s get know <br /> about me closer
				</h3>
				<p className="text mb-12">
					Aaronn is a New York-based visual designer
					focusing on branding and visual identity. Her
					portfolio showcases her wide range of work,
					spanning books, posters and web design. Aaronn is
					a New York-based visual designer focusing on
					branding and visual identity. Her portfolio
					showcases her wide range of work, spanning books,
					posters and web design. Aaronn is a New York-based
					visual designer focusing on branding and visual
					identity. Her portfolio showcases her wide range
					of work, spanning books, posters and web design.
				</p>
				<button className="button">
					Discover More About Me
				</button>
			</div>
			<div className="lg:w-1/2 flex justify-end">
				<div className="relative">
					<Image
						src="/images/profile.png"
						height={506}
						width={454}
						alt="photo profil"
						className="rounded-4xl filter grayscale hover:filter-none transition-all ease-in duration-300"
					/>
					<div className="w-14 h-44 border-1 border-primary rounded-4xl absolute -left-10 bottom-5" />
					<div className="w-10 h-32 border-1 border-primary rounded-4xl absolute right-10 -top-16 rotate-90" />
				</div>
			</div>
			<div className="w-32 h-20 bg-grey rounded-full absolute -left-14 top-5 blur-[100px]" />
		</section>
	);
};

export default About;
