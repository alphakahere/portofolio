import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function AboutPreview() {
	const t = useTranslations("about");

	return (
		<article
			id="about"
			aria-labelledby="about-title"
			className="relative grid h-full overflow-hidden rounded-xl border border-border bg-surface-secondary/60 sm:grid-cols-[1fr_auto]"
		>
			<div className="relative z-10 p-6 sm:p-8">
				<p className="eyebrow mb-4">{t("eyebrow")}</p>
				<h2 id="about-title" className="mb-4 max-w-xs font-serif text-2xl md:text-3xl text-foreground">
					{t("title")}
				</h2>
				<p className="mb-5 max-w-xs text-sm text-foreground/80">
					{t.rich("text", {
						b: (chunks) => <strong className="font-semibold text-foreground">{chunks}</strong>,
					})}
				</p>
				<a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
					{t("link")}
					<ArrowUpRight size={16} aria-hidden="true" />
				</a>
			</div>
			<div className="relative h-64 sm:h-auto sm:w-44 xl:w-52">
				<Image
					src="/images/profile.png"
					alt={t("portraitAlt")}
					fill
					sizes="(min-width: 640px) 208px, 100vw"
					className="object-cover object-top grayscale"
				/>
			</div>
		</article>
	);
}
