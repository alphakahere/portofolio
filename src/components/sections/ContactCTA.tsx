import { useTranslations } from "next-intl";
import ButtonLink from "@/components/ui/Button";
import Arcs from "@/components/ui/Arcs";
import { site } from "@/data/site";

export default function ContactCTA() {
	const t = useTranslations("contact");

	return (
		<section id="contact" aria-labelledby="contact-title" className="section">
			<div className="page-container">
				<div className="relative overflow-hidden rounded-xl border border-border bg-primary/[0.07] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
					<Arcs className="absolute -right-20 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-primary/25 md:block" />
					<div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="eyebrow mb-4">{t("eyebrow")}</p>
							<h2 id="contact-title" className="mb-3 font-serif text-3xl text-foreground md:text-4xl">
								{t("title")}
							</h2>
							<p className="max-w-lg text-foreground/80">{t("text")}</p>
						</div>
						<ButtonLink href={`mailto:${site.email}`} className="self-start md:self-center md:mr-24">
							{t("cta")}
						</ButtonLink>
					</div>
				</div>
			</div>
		</section>
	);
}
