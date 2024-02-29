import React from "react";
import SectionTitle from "./SectionTitle";
import react from "../../public/images/react.svg";
import Image from "next/image";

const Technologies = () => {
	return (
		<section className="mb-20">
			<SectionTitle title="Technologies I Work With" />
			<div className="grid grid-cols-3 gap-5">
				{[...Array(6)].map((item, i) => (
					<div
						className="flex items-center rounded-lg gap-4 mb-3 bg-dark3 p-3"
						key={i}
					>
						<div className="bg-dark flex justify-center  items-center p-3 rounded-lg">
							<Image
								src={react}
								alt="react-icon"
								width={150}
								height={100}
							/>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-white">
								React
							</h3>
							<p className="text-sm text-white opacity-70">
								Lorem ipsum, dolor sit amet
								consectetur adipisicing elit.
								Accusamus quis, fuga consectetur
								ab mollitia saepe sunt. Iusto
								autem error, a inventore tempora
								unde alias aut sapiente illum
								magni cum. Animi.
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Technologies;
