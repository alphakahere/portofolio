import React from "react";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import { syne } from "@/constants/constants";

const Services = () => {
	const t = useTranslations("service");

	// Icons for each service
	const serviceIcons = [
		"🎨", // Frontend Development
		"💻", // Web Applications
		"🎓", // Training & Mentoring
	];

	return (
		<section className="mb-12 lg:mb-32 relative container mx-auto">
			<SectionTitle title={t("title")} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{data.service.list.map((_item, i) => (
					<div
						key={i}
						className="group relative bg-dark3 rounded-2xl p-8 border border-dark3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
					>
						{/* Icon */}
						<div className="relative z-10 mb-6">
							<div className="w-16 h-10 text-3xl group-hover:scale-110 transition-transform duration-300">
								{serviceIcons[i]}
							</div>
						</div>

						{/* Content */}
						<div className="relative z-10">
							<h5
								className={`${syne.className} font-bold text-2xl mb-4 text-white group-hover:text-primary transition-colors duration-300`}
							>
								{t(`list.${i}.title`)}
							</h5>
							<div className="leading-relaxed">
								<p className="text-greyText group-hover:text-white/90 transition-colors duration-300">
									{t(`list.${i}.description`)}
								</p>
							</div>
						</div>

						{/* Decorative element */}
						<div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
