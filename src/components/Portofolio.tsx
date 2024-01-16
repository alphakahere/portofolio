import { syne } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MoveRight } from "lucide-react";

const Portofolio = () => {
	return (
		<section className="mb-24">
			<h3
				className={`${syne.className} title-text text-5xl mb-12 text-center`}
			>
				My Projects Highlight
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
				{[...Array(6)].map((item, i) => (
					<div
						className="project__card_item mb-8 relative"
						key={i}
					>
						<div className="mb-3">
							<Image
								src="/images/fantasy.jpg"
								width={560}
								height={620}
								alt="photo profil"
								className="rounded-2xl h-[350px] w-full"
							/>
						</div>
						<div className="flex flex-col">
							<h5
								className={`${syne.className} text-xl font-bold leading-8 text-white opacity-80 relative after:w-10 after:h-[1px] after:bg-primary after:absolute after:top-4 after:right-0`}
							>
								Brand Journey Improvements
							</h5>
						</div>
						<div className="overlay text-white bg-dark3 p-5 absolute top-0 left-0 h-full rounded-2xl hidden hover:scale-105 overflow-hidden">
							<div className="flex flex-col justify-center h-full">
								<div>
									<h5 className="mb-3">
										Brand Journey
										Improvements
									</h5>
									<p className="mb-3">
										Lorem ipsum dolor
										sit amet consectetur
										adipisicing elit.
										Voluptas corrupti
										maxime cumque
										quibusdam
										praesentium ex. Ipsa
										dicta molestias
										facere beatae sed
										quae illo, tenetur
										voluptatibus
										incidunt optio, esse
										nobis dolore?
									</p>
								</div>
								<div className="flex justify-between">
									<Link
										href={`projects/${1}`}
									>
										More Details
									</Link>
									<Link
										href={`projects/${1}`}
									>
										Github
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center">
				<button className="border border-primary text-xs font-bold flex items-center gap-3 text-grey_light px-8 py-3 rounded-4xl -tracking-tighter uppercase">
					<span>Explore works</span>
					<MoveRight width={14} />
				</button>
			</div>
		</section>
	);
};

export default Portofolio;
