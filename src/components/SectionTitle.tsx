import { syne } from "@/constants/constants";
import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
	return (
		<h3
			className={`${syne.className} title-text text-5xl mb-12 text-center`}
		>
			{title}
		</h3>
	);
};

export default SectionTitle;
