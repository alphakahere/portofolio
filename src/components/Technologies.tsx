import React from "react";
import SectionTitle from "./SectionTitle";
import react from "../../public/images/react.svg";
import Image from "next/image";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import { syne } from "@/constants/constants";

const Technologies = () => {
	const t = useTranslations("technologie");
	return (
		<section className="mb-20">
			<SectionTitle title={t("title")} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
				{data.technologie.list.map((item, i) => (
					<div
						className="flex items-center rounded-lg gap-4 mb-3 bg-dark3 p-3"
						key={i}
					>
						<div className="bg-dark flex justify-center  items-center p-3 rounded-lg w-44 h-24  min-w-[100px]">
							<Image
								src={item.image}
								alt="react-icon"
								width={150}
								height={100}
								// className="w-20 h-20"
							/>
						</div>
						<div>
							<h3
								className={`${syne.className} text-xl font-semibold text-white mb-1`}
							>
								{t(`list.${i}.name`)}
							</h3>
							<p className="text-base text-white opacity-80">
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
