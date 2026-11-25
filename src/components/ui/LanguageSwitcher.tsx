import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/data/site";

export default function LanguageSwitcher() {
	const current = useLocale();
	const t = useTranslations("nav");

	return (
		<nav aria-label={t("languageLabel")} className="flex items-center gap-1 text-xs font-medium">
			{locales
				.slice()
				.reverse() // FR / EN
				.map((locale, i) => (
					<span key={locale} className="flex items-center gap-1">
						{i > 0 && (
							<span aria-hidden="true" className="text-muted">
								/
							</span>
						)}
						<Link
							href={`/${locale}`}
							hrefLang={locale}
							lang={locale}
							aria-current={locale === current ? "true" : undefined}
							className={`rounded-sm px-0.5 uppercase transition-colors duration-150 ${
								locale === current
									? "text-accent"
									: "text-muted hover:text-foreground"
							}`}
						>
							{locale}
						</Link>
					</span>
				))}
		</nav>
	);
}
