import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
	project: Project;
	category: string;
	placeholderLabel: string;
	priority?: boolean;
};

export default function ProjectCard({ project, category, placeholderLabel, priority }: Props) {
	const { name, image, tech, href } = project;

	const body = (
		<>
			<div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-secondary">
				{image ? (
					<Image
						src={image}
						alt={name}
						fill
						priority={priority}
						sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
						className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
					/>
				) : (
					<div className="flex h-full flex-col items-center justify-center gap-2 bg-[linear-gradient(rgb(var(--border))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]">
						<span className="font-serif text-3xl text-foreground/70">{name}</span>
						<span className="font-mono text-xs uppercase tracking-wider text-muted">
							{placeholderLabel}
						</span>
					</div>
				)}
			</div>
			<div className="flex items-center gap-3 p-4">
				<span
					aria-hidden="true"
					className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 font-serif text-xl text-accent"
				>
					{name.charAt(0)}
				</span>
				<div className="min-w-0 flex-1">
					<h3 className="font-medium text-foreground">{name}</h3>
					<p className="truncate text-xs text-muted">{category}</p>
					{tech.length > 0 && (
						<p className="mt-1 truncate font-mono text-xs text-muted">{tech.join(" · ")}</p>
					)}
				</div>
				{href && (
					<span
						aria-hidden="true"
						className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-150 group-hover:border-accent group-hover:text-accent"
					>
						<ChevronRight size={16} />
					</span>
				)}
			</div>
		</>
	);

	const classes =
		"group block overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150";

	return href ? (
		<a href={href} className={`${classes} hover:border-foreground/30`}>
			{body}
		</a>
	) : (
		<article className={classes}>{body}</article>
	);
}
