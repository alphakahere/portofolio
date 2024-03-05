import { syne } from "@/constants/constants";
import React from "react";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";

const Services = () => {
	const t = useTranslations("service");
	return (
		<section className="mb-32">
			<h3 className={`${syne.className} title-text text-4xl mb-5`}>
				How i can help
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
				{data.service.map((item, i) => (
					<div key={i}>
						<h5 className="font-bold text-xl mb-1 text-white ">
							{t(`${i}.title`)}
						</h5>
						<div className="text-sm leading-6 text-justify opacity-80 hover:opacity-100 ease-in-out duration-100">
							<p className="text">
								{t(`${i}.description`)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
