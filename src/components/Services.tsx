import React from "react";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import { syne } from "@/constants/constants";

const Services = () => {
	const t = useTranslations("service");
	return (
		<section className="mb-32 relative">
			<SectionTitle title={t("title")} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{data.service.list.map((item, i) => (
					<div key={i}>
						<h5
							className={`${syne.className} font-bold text-3xl mb-2 text-white`}
						>
							{t(`list.${i}.title`)}
						</h5>
						<div className="text-base leading-6 text-justify text-greyText">
							<p className="text">
								{t(`list.${i}.description`)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
