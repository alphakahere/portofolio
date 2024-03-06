import React from "react";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

const Services = () => {
	const t = useTranslations("service");
	return (
		<section className="mb-32 relative">
			<SectionTitle title={t("title")} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
				{data.service.list.map((item, i) => (
					<div key={i}>
						<h5 className="font-bold text-xl mb-1 text-white ">
							{t(`list.${i}.title`)}
						</h5>
						<div className="text-sm leading-6 text-justify opacity-80 hover:opacity-100 ease-in-out duration-100">
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
