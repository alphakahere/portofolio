import { syne } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import { ExternalLink } from "lucide-react";

const Projects = () => {
	const t = useTranslations("project");
	return (
		<section className="mb-32">
			<div className="relative">
				<SectionTitle title={t("title")} align="text-center" />
				<div className="w-24 h-12 bg-grey  absolute left-2/3 -translate-x-1/2  -top-5 filter blur-2xl" />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
				{data.project.list.map((item, i) => (
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
								{t(`list.${i}.name`)}
							</h5>
						</div>
						<div className="overlay text-white bg-dark3 p-5 absolute top-0 left-0 h-full rounded-2xl hidden hover:scale-[1.01] overflow-hidden">
							<div className="flex flex-col justify-between h-full">
								<div className="mb-5">
									<h5 className="mb-3 text-2xl font-semibold">
										{t(
											`list.${i}.name`
										)}
									</h5>
									<p className="mb-3 text-white opacity-80 text-base">
										{t(
											`list.${i}.description`
										)}
										Lorem ipsum dolor
										sit amet consectetur
										adipisicing elit. Et
										eaque fugit
										distinctio, fuga
										exercitationem
										deserunt accusamus
										possimus nisi amet.
										Nemo quam dolorem
										voluptates in beatae
										aliquam. Aliquam eum
										excepturi natus.
										Lorem ipsum dolor
										sit amet,
										consectetur
										adipisicing elit.
										Adipisci, laboriosam
										in labore excepturi
										iusto vel dicta
										nihil tempora iure,
										modi beatae
										consectetur?
										Repellendus
										voluptate voluptates
										cupiditate
										doloribus. Nulla,
										sunt ab?
									</p>
								</div>
								<div className="flex justify-between">
									<Link
										href={`projects/${1}`}
										className="button_link"
									>
										More Details
									</Link>
									<Link
										href={item.github}
										target="_blank"
										className="button_link flex items-center gap-2"
									>
										<span>Github</span>
										<ExternalLink
											size={18}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <div className="flex justify-center">
				<button className="border border-primary text-xs font-bold flex items-center gap-3 text-grey_light px-8 py-3 rounded-4xl -tracking-tighter uppercase">
					<span>Explore works</span>
					<MoveRight width={14} />
				</button>
			</div> */}
		</section>
	);
};

export default Projects;
