import { syne } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center mb-24">
			<div className="lg:w-1/2">
				<h3 className={`${syne.className} title-text text-4xl`}>
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
				<div className="position-relative">
					<Image
						src="/images/profile.png"
						height={506}
						width={454}
						alt="photo profil"
						className="rounded-4xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
