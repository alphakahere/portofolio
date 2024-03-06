"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import data from "../../messages/fr.json";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { syne } from "@/constants/constants";

const Testimonials = () => {
	const t = useTranslations("testimonial");

	return (
		<section className="mb-20 relative">
			<div className="flex justify-between">
				<SectionTitle title="Testimonials" />
				<div>
					<Quote color="#FF9142" size={56} />
				</div>
			</div>
			<div className="swipper w-2/3">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 5000,
					}}
					modules={[Autoplay, EffectFade]}
				>
					{data.testimonial.list.map((item, index) => (
						<SwiperSlide key={index}>
							<p className="text-white opacity-80 mb-3 text-base">
								{t(`list.${index}.testimonial`)}
							</p>
							<h3
								className={`${syne.className} text-white font-semibold text-2xl`}
							>
								- {item?.name}
							</h3>
							<p className="pl-4 text-white opacity-80 text-sm font-normal">
								{t(`list.${index}.function`)}
							</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="w-28 h-16 bg-grey inset-0 absolute -left-14 top-0 filter blur-3xl" />
		</section>
	);
};

export default Testimonials;
