"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

const images = ["mountains.jpg", "sea.jpg", "sunset.jpg", "fantasy.jpg"];

const Profile = () => {
	return (
		<section className="w-1/4">
			<div className="swipper">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 2000,
					}}
					modules={[Autoplay, EffectFade]}
				>
					{images?.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={`/images/${item}`}
								alt="carousel"
								width={500}
								height={500}
								className="max-h-80 h-80"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				<div>
					<Image
						src="/images/avatar.png"
						alt="carousel"
						width={80}
						height={80}
					/>
				</div>
				<h1>Alpha Amadou Diallo</h1>
				<p>Frontend enginner</p>
				<div className="">
					<Link href={""}>
						<Twitter />
					</Link>
					<Link href={""}>
						<Github />
					</Link>
					<Link href={""}>
						<Linkedin />
					</Link>
				</div>
				<div>
					<div>
						<a href="">Télécharger mon cv</a>
					</div>
					<div>
						<a href="">Mon Linkedin</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
