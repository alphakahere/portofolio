import { syne } from "@/constants/constants";
import React from "react";

const Services = () => {
	return (
		<section className="mb-24">
			{/* <h1>Services</h1> */}
			<h3 className={`${syne.className} title-text text-4xl mb-5`}>
				How i can help
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
				{[...Array(3)].map((item, i) => (
					<div key={i}>
						<h5 className="font-bold text-xl mb-1 text-white ">
							Frontend
						</h5>
						<div className="text-sm leading-6 text-justify opacity-80 hover:opacity-100 ease-in-out duration-100">
							<p className="text">
								Lorem ipsum dolor sit, amet
								consectetur adipisicing elit.
								Eaque quo unde ullam quos atque
								eveniet aliquam nam. Lorem ipsum
								dolor sit, amet consectetur
								adipisicing elit. Eaque quo unde
								ullam quos atque eveniet aliquam
								nam.
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
