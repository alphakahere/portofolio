import { syne } from "@/constants/constants";
import React from "react";

const SectionTitle = ({ title, align }: { title: string; align?: string }) => {
	return (
		<h3
			className={`${
				syne.className
			} title-text text-2xl md:text-3xl 2xl:text-5xl mb-8 lg:mb-12 ${
				align ? align : "text-left"
			} `}
		>
			{title}
		</h3>
	);
};

export default SectionTitle;
