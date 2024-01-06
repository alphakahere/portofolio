import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const menus = [
	{ label: "Home", path: "home" },
	{ label: "About me", path: "resume" },
	{ label: "My Works", path: "my-works" },
	{ label: "Blog", path: "blog" },
	// { label: "Contact", path: "contact" },
];

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between mb-40">
			<div className="flex items-center gap-2">
				<button className="text-white">
					<Menu />
				</button>
				<Link
					href="/"
					className="text-white text-2xl leading-8"
				>
					ALPHAKAHERE.DEV
				</Link>
			</div>
			<ul className="flex items-center gap-12">
				{menus?.map(({ label, path }, i) => (
					<li key={i}>
						<Link
							href={path}
							className="text-grey uppercase font-medium leading-normal text-sm"
						>
							{label}
						</Link>
					</li>
				))}
				<li>
					<Link
						href="/contact"
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
