"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type Link = { key: string; href: string; label: string; external: boolean };
type Props = { links: Link[]; openLabel: string; closeLabel: string };

export default function MobileMenu({ links, openLabel, closeLabel }: Props) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<div className="lg:hidden">
			<button
				type="button"
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? closeLabel : openLabel}
				className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors duration-150 hover:bg-surface-secondary"
			>
				{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
			</button>

			{open && (
				<nav
					id="mobile-menu"
					aria-label={openLabel}
					className="absolute inset-x-0 top-full border-b border-border bg-background"
				>
					<ul className="page-container flex flex-col py-4">
						{links.map(({ key, href, label, external }) => (
							<li key={key}>
								<a
									href={href}
									onClick={() => setOpen(false)}
									{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
									className="block rounded-sm border-b border-border py-4 font-serif text-2xl text-foreground last:border-0"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
}
