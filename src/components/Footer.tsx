import { syne } from "@/constants/constants";
import { Facebook, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
	const t = useTranslations("footer");

	return (
		<footer className={`${syne.className} bg-dark3 w-full`}>
			<div className="container py-16">
				<div className="flex flex-col items-center gap-5 mb-10 lg:mb-32">
					<p className=" text-lg lg:text-2xl text-primary text-center font-bold">
						{t("ctaText")}
					</p>
					<a
						href="mailto:hello@alphakahere.dev"
						className=" text-2xl lg:text-5xl text-white text-center font-bold underline underline-offset-8"
					>
						hello@alphakahere.dev
					</a>
				</div>
				<div className="flex flex-col justify-center md:flex-row md:justify-between mb-10 text-white gap-4">
					<div className="flex flex-col items-center md:items-start">
						<h5 className="text-white text-lg lg:text-3xl font-bold uppercase leading-normal mb-3">
							Alphakahere.dev
						</h5>
						<address className="text-white text-lg font-bold leading-normal">
							{t("address")}
						</address>
					</div>
					<div className="flex flex-col items-center">
						<a
							href="tel:+221785340264"
							className="text-white  text-lg font-bold  leading-normal"
						>
							+221 77 528 06 93
						</a>
						<ul className="flex items-center gap-5 mt-3">
							<li className="bg-[#C4C4C4] w-8 h-8 flex items-center justify-center rounded-sm">
								<Link href="https://www.linkedin.com/in/alphakahere/">
									<Linkedin
										absoluteStrokeWidth
										color="#131313"
									/>
								</Link>
							</li>
							<li className="bg-[#C4C4C4] w-8 h-8 flex items-center justify-center rounded-sm">
								<Link href="https://github.com/alphakahere">
									<Github
										absoluteStrokeWidth
										color="#131313"
									/>
								</Link>
							</li>
							<li className="bg-[#C4C4C4] w-8 h-8 flex items-center justify-center rounded-sm">
								<Link href="https://www.facebook.com/alphakahere">
									<Facebook
										absoluteStrokeWidth
										color="#131313"
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t-2 border-t-[#949494] pt-6">
					<p className="text-white text-sm lg:text-lg font-bold text-center leading-normal">
						© {new Date().getFullYear()}. Alpha Amadou
						Diallo. {t("copyright")}.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
