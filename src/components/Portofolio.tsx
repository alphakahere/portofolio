import { syne } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Portofolio = () => {
	return (
		<section className="mb-24">
			<h3
				className={`${syne.className} title-text text-5xl mb-12 text-center`}
			>
				My Projects Highlight
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{[...Array(6)].map((item, i) => (
					<div className="" key={i}>
						<div className="mb-3">
							<Image
								src="/images/fantasy.jpg"
								width={560}
								height={620}
								alt="photo profil"
								className="rounded-2xl"
							/>
						</div>
						<div className="flex flex-col">
							<h5
								className={`${syne.className} text-xl font-bold leading-8 text-white opacity-80 relative after:w-8 after:h-1 after:bg-primary after:absolute after:top-4 after:-right-14`}
							>
								Brand Journey Improvements
							</h5>
							<p>
								Lorem ipsum dolor sit amet,
								consectetur adipisicing elit.
								Cum facilis vitae nostrum odio
								ducimus quibusdam eum. Dolores
								aut consectetur doloribus
								incidunt. At nisi, dolores
								delectus vero quasi magni iusto
								reiciendis!
							</p>
							<div className="flex gap-3">
								{[...Array(10)].map(
									(item, i) => (
										<div key={i}>
											key
										</div>
									)
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portofolio;
