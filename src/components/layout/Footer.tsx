import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";
import Wordmark from "@/components/ui/Wordmark";

const socials = [
	{ label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
	{ label: "GitHub", href: site.github, Icon: Github },
	{ label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export default function Footer() {
	const t = useTranslations("footer");
	const nav = useTranslations("nav");

	return (
		<footer className="border-t border-border">
			<div className="page-container flex flex-col items-center gap-6 py-10 text-center lg:flex-row lg:justify-between lg:text-left">
				<Wordmark className="text-base" />

				<nav aria-label={nav("mainLabel")}>
					<ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
						{navItems.map((item) => (
							<li key={item.key}>
								<a
									href={item.href}
									{...("external" in item
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className="rounded-sm text-sm text-foreground/80 transition-colors duration-150 hover:text-foreground"
								>
									{nav(item.key)}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<ul aria-label={t("socialLabel")} className="flex items-center gap-4">
					{socials.map(({ label, href, Icon }) => (
						<li key={label}>
							<a
								href={href}
								aria-label={label}
								{...(href.startsWith("http")
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
								className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors duration-150 hover:bg-surface-secondary hover:text-accent"
							>
								<Icon size={18} aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>

				<p className="text-xs text-muted">
					© {new Date().getFullYear()} {site.name}. {t("rights")}
				</p>
			</div>
		</footer>
	);
}
