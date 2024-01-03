import { Background } from "@/components/Background";
import Profile from "@/components/Profile";
import {
	BookText,
	Briefcase,
	Menu,
	Pencil,
	Send,
	Settings,
	Sidebar,
	User2,
} from "lucide-react";
import Link from "next/link";

const menus = [
	{ label: "A propos", path: "a-propos", icon: <User2 /> },
	{ label: "Resumé", path: "resume", icon: <BookText /> },
	{ label: "Projets", path: "projets", icon: <Briefcase /> },
	{ label: "Blog", path: "blog", icon: <Pencil /> },
	{ label: "Contact", path: "contact", icon: <Send /> },
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
			<Background />
			<section className="border border-gray-900 bg-gray-900 h-[80vh] w-5/6 rounded-xl">
				<div className="flex gap-3 p-2 h-full">
					<nav className="relative">
						<ul className="h-full flex flex-col">
							<button className="flex flex-col items-center mb-5">
								<Menu />
							</button>
							{menus?.map(
								({ label, icon, path }, i) => (
									<li key={i}>
										<Link
											href={path}
											className="flex flex-col items-center py-4 border-b border-b-gray-700"
										>
											{icon}
											<span>
												{label}
											</span>
										</Link>
									</li>
								)
							)}
							<button className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-5 ">
								<Settings />
							</button>
						</ul>
					</nav>
					<Profile />
					<section className="flex-1">Page</section>
				</div>
			</section>
		</main>
	);
}
