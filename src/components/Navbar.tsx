"use client";
import React from "react";
import Link from "next/link";

const menus = [{ label: "Accueil", path: "" }];

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between gap-4 mb-24 md:mb-28">
			<div className="flex items-center gap-2">
				<Link href="/" className="text-white text-xl lg:text-2xl leading-8">
					ALPHAKAHERE.DEV
				</Link>
			</div>
			<ul className="md:flex items-center gap-12">
				{menus?.map(({ label, path }, i) => (
					<li key={i} className="hidden lg:block">
						<Link
							href={path}
							className="text-grey uppercase font-medium leading-normal text-sm"
						>
							{label}
						</Link>
					</li>
				))}
				<li className="hidden lg:block">
					<Link
						href="https://blog.alphakahere.dev/"
						className="text-grey uppercase font-medium leading-normal text-sm"
						target="_blank"
					>
						Blog
					</Link>
				</li>
				<li>
					<Link
						href="mailto:hello.alphakahere.dev"
						className="text-white uppercase font-bold leading-normal text-sm py-3 px-5 bg-dark2 rounded-4xl opacity-80 border-2 border-grey"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
