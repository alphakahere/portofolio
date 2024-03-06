import React from "react";
import Navbar from "./Navbar";
import { MoveRight } from "lucide-react";
import { syne } from "@/constants/constants";
import { useTranslations } from "next-intl";

const Header = () => {
	const t = useTranslations("header");
	return (
		<header className="mb-24 pt-5">
			<Navbar />
			<div className="px-5 md:px-20 lg:px-52">
				<div className="flex flex-col items-center space-y-16 relative text-white">
					<div className="flex flex-col items-center space-y-4">
						<p className="text-lg lg:text-xl whitespace-nowrap">
							{t("greetings")} 👋
						</p>
						<h1
							className={`${syne.className} title-text text-2xl lg:text-6xl leading-snug lg:leading-normal text-center`}
						>
							{t("title")}
						</h1>
					</div>
					<button className="bg-primary text-xs font-bold flex items-center gap-3 text-grey_light px-5 py-2 rounded-4xl -tracking-tighter uppercase">
						<span>{t("buttonText")}</span>
						<MoveRight width={14} />
					</button>
					<div className="w-40 h-32 bg-grey blur-[100px]  absolute right-0 -top-10" />
				</div>
			</div>
		</header>
	);
};

export default Header;
