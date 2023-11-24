"use client";
import { particlesOptions } from "@/utils/particlesConfig";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export function Background() {
	const particlesInit = (engine: Engine) => {
		loadFull(engine);
	};

	return (
		<div className="Background">
			{/* @ts-ignore */}
			<Particles init={particlesInit} options={particlesOptions} />
		</div>
	);
}
