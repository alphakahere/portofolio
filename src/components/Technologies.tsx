import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import { syne } from "@/constants/constants";

const Technologies = () => {
	const t = useTranslations("technologie");
	return (
		<section className="mb-20 container mx-auto">
			<SectionTitle title={t("title")} />
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{data.technologie.list.map((item, i) => (
					<div
						className="group flex flex-col sm:flex-row items-start gap-4 rounded-2xl bg-dark3 p-6 hover:bg-dark2 transition-all duration-300 hover:shadow-xl border border-dark3"
						key={i}
					>
						<div className="flex-shrink-0 bg-gradient-to-br from-dark2 to-dark3 flex justify-center items-center p-4 rounded-xl w-16 h-16 group-hover:from-dark3 group-hover:to-dark transition-all duration-300">
							<Image
								src={item.image}
								alt="react-icon"
								width={40}
								height={40}
								className="group-hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<h3
								className={`${syne.className} text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300`}
							>
								{t(`list.${i}.name`)}
							</h3>
							<p className="text-sm xl:text-base text-greyText leading-relaxed group-hover:text-white/90 transition-colors duration-300">
								{t(`list.${i}.description`)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Technologies;
