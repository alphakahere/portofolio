import { syne } from "@/constants/constants";
import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
	return (
		<footer className={`${syne.className} bg-dark3 w-full`}>
			<div className="container py-16">
				<div className="flex flex-col items-center gap-5 mb-32">
					<p className=" text-2xl text-primary text-center font-bold">
						Get in Touch With me
					</p>
					<a
						href="mailto:hello.alphakahere.dev"
						className=" text-5xl text-white text-center font-bold underline underline-offset-8"
					>
						hello.alphakahere.dev
					</a>
				</div>
				<div className="flex items-center flex-col lg:flex-row lg:justify-between mb-10 text-white">
					<div>
						<h5 className="text-white text-3xl font-bold uppercase leading-normal mb-3">
							Alphakahere.dev
						</h5>
						<address className="text-white text-xl font-bold leading-normal">
							Dakar, Sénégal
						</address>
					</div>
					<div>
						<a
							href="tel:+221785340264"
							className="text-white text-xl font-bold  leading-normal"
						>
							+221 78 534 02 64
						</a>
						<ul className="flex items-center gap-5 mt-3">
							<li className="bg-[#C4C4C4] w-8 h-8 flex items-center justify-center rounded-sm">
								<a>
									<Linkedin
										absoluteStrokeWidth
										color="#131313"
									/>
								</a>
							</li>
							<li>
								<a>
									<Github
										absoluteStrokeWidth
									/>
								</a>
							</li>
							<li>
								<a>
									<Facebook
										absoluteStrokeWidth
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t-2 border-t-[#949494] pt-6">
					<p className="text-white text-xl font-bold text-center leading-normal">
						© {new Date().getFullYear()}. Alpha Amadou
						Diallo. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
