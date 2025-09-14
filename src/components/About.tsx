import { syne } from "@/constants/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
	const t = useTranslations("about");
	return (
		<section className="mb-24 relative">
			<div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
				<div className="lg:w-1/2">
					<h3
						className={`${syne.className}  title-text text-2xl md:text-4xl 2xl:text-5xl mb-5 lg:mb-8`}
						dangerouslySetInnerHTML={{
							__html: t.raw("title"),
						}}
					/>
					<p className="text-greyText font-normal lg:leading-relaxed lg:text-base xl:text-lg mb-12">
						{t("text")}
					</p>
					<a
						href="mailto:hello@alphakahere.dev"
						className="button w-min whitespace-nowrap"
					>
						{t("button")}
					</a>
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
			</div>
			<div className="w-32 h-20 xl:w-56 xl:h-32 bg-grey inset-0 absolute -left-14 top-14 filter blur-3xl" />
		</section>
	);
};

export default About;
