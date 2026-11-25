"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Item = { id: string; name: string; role: string; avatar?: string; quote: string };
type Props = { items: Item[]; previousLabel: string; nextLabel: string };

const initials = (name: string) =>
	name
		.split(" ")
		.map((part) => part[0])
		.slice(0, 2)
		.join("");

export default function TestimonialCarousel({ items, previousLabel, nextLabel }: Props) {
	const [index, setIndex] = useState(0);
	const item = items[index];
	const many = items.length > 1;
	const go = (step: number) => setIndex((i) => (i + step + items.length) % items.length);

	return (
		<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
			<figure aria-live="polite" className="max-w-xl">
				<blockquote className="mb-5 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
					“{item.quote}”
				</blockquote>
				<figcaption className="flex items-center gap-3">
					{item.avatar ? (
						<Image
							src={item.avatar}
							alt=""
							width={40}
							height={40}
							className="h-10 w-10 rounded-full object-cover"
						/>
					) : (
						<span
							aria-hidden="true"
							className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-secondary text-sm font-medium text-foreground"
						>
							{initials(item.name)}
						</span>
					)}
					<span>
						<span className="block text-sm font-medium text-foreground">{item.name}</span>
						<span className="block text-xs text-muted">{item.role}</span>
					</span>
				</figcaption>
			</figure>

			{many && (
				<div className="flex gap-2">
					{[
						{ step: -1, label: previousLabel, Icon: ArrowLeft },
						{ step: 1, label: nextLabel, Icon: ArrowRight },
					].map(({ step, label, Icon }) => (
						<button
							key={step}
							type="button"
							onClick={() => go(step)}
							aria-label={label}
							className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/40 text-foreground transition-colors duration-150 hover:bg-foreground/10"
						>
							<Icon size={16} aria-hidden="true" />
						</button>
					))}
				</div>
			)}
		</div>
	);
}
