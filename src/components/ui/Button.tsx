import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary";

const base =
	"inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
	primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
	secondary: "border border-foreground/80 text-foreground hover:bg-foreground/5",
};

type Props = {
	href: string;
	children: React.ReactNode;
	variant?: Variant;
	/** Show the ↗ arrow. Defaults to true, matching the design. */
	arrow?: boolean;
	external?: boolean;
	className?: string;
};

/** The only button style of the site: primary (filled) or secondary (outlined). */
export default function ButtonLink({
	href,
	children,
	variant = "primary",
	arrow = true,
	external = false,
	className = "",
}: Props) {
	const content = (
		<>
			{children}
			{arrow && <ArrowUpRight size={16} aria-hidden="true" />}
		</>
	);
	const classes = `${base} ${variants[variant]} ${className}`;

	if (external || href.startsWith("mailto:")) {
		return (
			<a
				href={href}
				className={classes}
				{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			>
				{content}
			</a>
		);
	}
	return (
		<Link href={href} className={classes}>
			{content}
		</Link>
	);
}
