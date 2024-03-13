"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import data from "../../messages/fr.json";
import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { syne } from "@/constants/constants";

interface Project {
	slug: string;
	name: string;
	image: string;
	description: string;
	github: string;
	siteWeb: string;
}

const DetailProjectModal = () => {
	const searchParams = useSearchParams();
	const modal = searchParams.get("projects");
	const pathname = usePathname();
	console.log({ modal });
	const [project, setProject] = useState<Project>();
	console.log({ project });
	useEffect(() => {
		const item = data.project.list.find(
			(project) => project.slug === modal
		);
		setProject(item);
		if (modal) {
			document.body.style.overflow = "hidden";
		}
	}, [modal]);
	const close = () => {
		searchParams.get("");
		document.body.style.overflow = "auto";
	};
	return (
		<>
			{modal && (
				<dialog className="w-full bg-black h-full bg-opacity-50 z-50 overflow-x-hidden overflow-hidden backdrop-blur fixed top-0 left-0 flex justify-center items-center pt-10 pb-20">
					<div className="w-auto my-6 mx-auto max-w-lg md:min-w-[40rem] min-w-[98%] xl:min-w-[50rem]">
						<div className="bg-dark p-8 text-white rounded h-[94vh] overflow-y-auto custom-scrollbar">
							<div className="">
								<div className="flex justify-between items-start">
									<div>
										<h1
											className={`${syne.className} font-bold text-3xl mb-2`}
										>
											{
												project?.name
											}
										</h1>
										<p className="text-greyText text-base">
											Detail du
											projet
										</p>
									</div>
									<Link
										href={`${pathname}#projects`}
										onClick={close}
									>
										<X />
									</Link>
								</div>
								<hr className="border-[#949494] mt-6 mb-4" />
								<div>
									<Image
										// @ts-ignore
										src={project?.image}
										alt={`Photo de couverture de $project?.name`}
										width={500}
										height={500}
										className="w-full"
									/>
								</div>
								<hr className="border-[#949494] mt-5 mb-8" />
								<div className="mb-10">
									<h3
										className={`${syne.className} font-bold text-xl mb-2`}
									>
										Project Description
									</h3>
									<div className="flex gap-3 flex-wrap">
										<p className="text-white opacity-80 text-base">
											{
												project?.description
											}
										</p>
									</div>
								</div>
								<div>
									<h3
										className={`${syne.className} font-bold text-xl mb-5`}
									>
										Technologies
										utilisées
									</h3>
									<div className="flex gap-3 flex-wrap">
										{[...Array(12)].map(
											(
												item,
												index
											) => (
												<button
													key={
														index
													}
													className="button_link py-1"
												>
													React
												</button>
											)
										)}
									</div>
								</div>
								<hr className="border-[#949494] my-8" />
								{project && (
									<div className="flex justify-between">
										<Link
											// @ts-ignore
											href={
												project?.siteWeb
											}
											className="button_link py-2 flex items-center gap-2"
										>
											Voir le site
											<ExternalLink
												size={
													18
												}
											/>
										</Link>
										<Link
											// @ts-ignore
											href={
												project?.github
											}
											target="_blank"
											className="button_link py-2 flex items-center gap-2"
										>
											<span>
												Github
											</span>
											<ExternalLink
												size={
													18
												}
											/>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
};

export default DetailProjectModal;
