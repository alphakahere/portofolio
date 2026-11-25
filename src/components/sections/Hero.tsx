import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Arcs from "@/components/ui/Arcs";
import { site } from "@/data/site";

export default function Hero() {
	const t = useTranslations("hero");

	return (
		<section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-border">
			<div className="page-container grid items-center gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-0 lg:pt-20">
				<div className="lg:col-span-7 lg:pb-24">
					<p className="eyebrow mb-6">{t("eyebrow")}</p>
					<h1
						id="hero-title"
						className="mb-6 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-foreground"
					>
						{t.rich("headline", {
							em: (chunks) => <em className="italic text-accent">{chunks}</em>,
						})}
					</h1>
					<p className="mb-8 max-w-xl text-lg text-foreground/80">{t("text")}</p>
					<div className="mb-8 flex flex-wrap gap-3">
						<ButtonLink href="#work">{t("primaryCta")}</ButtonLink>
						<ButtonLink href={`mailto:${site.email}`} variant="secondary">
							{t("secondaryCta")}
						</ButtonLink>
					</div>
					<p className="flex items-center gap-2 text-sm text-foreground/80">
						<MapPin size={16} aria-hidden="true" className="text-primary" />
						{t("location")}
					</p>
				</div>

				<div className="relative lg:col-span-5 lg:self-end">
					<Arcs className="absolute -right-24 top-0 hidden h-[480px] w-[480px] text-border sm:block lg:-right-40" />
					<div
						aria-hidden="true"
						className="absolute inset-x-10 bottom-0 top-1/4 hidden rounded-full bg-primary/20 blur-3xl dark:block"
					/>
					<Image
						src="/images/profile.png"
						alt={t("portraitAlt")}
						width={492}
						height={598}
						priority
						sizes="(min-width: 1024px) 420px, 80vw"
						className="relative mx-auto w-full max-w-[360px] rounded-t-xl object-cover lg:ml-auto lg:mr-0 lg:max-w-[420px]"
					/>
				</div>
			</div>
		</section>
	);
}
