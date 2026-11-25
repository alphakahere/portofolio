import { useTranslations } from "next-intl";
import { navItems } from "@/data/site";
import Wordmark from "@/components/ui/Wordmark";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
	const t = useTranslations("nav");
	const links = navItems.map((item) => ({ ...item, label: t(item.key) }));

	return (
		<header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
			<div className="page-container relative flex h-16 items-center justify-between gap-6 lg:h-20">
				<Wordmark />

				<nav aria-label={t("mainLabel")} className="hidden lg:block">
					<ul className="flex items-center gap-8">
						{links.map(({ key, href, label, ...rest }) => (
							<li key={key}>
								<a
									href={href}
									{...("external" in rest
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className="rounded-sm text-sm text-foreground/80 transition-colors duration-150 hover:text-foreground"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex items-center gap-3 sm:gap-4">
					<LanguageSwitcher />
					<ThemeToggle labelToDark={t("switchToDark")} labelToLight={t("switchToLight")} />
					<MobileMenu
						links={links.map(({ key, href, label, ...rest }) => ({
							key,
							href,
							label,
							external: "external" in rest,
						}))}
						openLabel={t("openMenu")}
						closeLabel={t("closeMenu")}
					/>
				</div>
			</div>
		</header>
	);
}
