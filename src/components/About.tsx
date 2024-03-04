import { syne } from "@/constants/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const About = () => {
	const t = useTranslations("about");
	return (
		<section className="flex flex-col lg:flex-row items-center mb-24 relative">
			<div className="lg:w-1/2">
				<h3
					className={`${syne.className} title-text text-4xl leading-snug mb-5`}
				>
					{t("title")}
				</h3>
				<p className="text mb-12">{t("text")}</p>
				{/* <button className="button">
					Discover More About Me
				</button> */}
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
				</div>
			</div>
			<div className="w-32 h-20 bg-grey inset-0 absolute -left-14 top-5 filter blur-3xl" />
		</section>
	);
};

export default About;
