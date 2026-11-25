import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Arcs from "@/components/ui/Arcs";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
	const t = useTranslations("testimonials");
	if (testimonials.length === 0) return null;

	const items = testimonials.map((item) => ({ ...item, quote: t(`items.${item.id}`) }));

	return (
		// Always rendered with the dark tokens, in both themes (see the design mockups).
		<section aria-labelledby="testimonials-title" className="dark border-y border-border bg-background text-foreground">
			<div className="page-container relative grid gap-10 overflow-hidden py-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-16">
				<Arcs className="absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-border" />
				<SectionHeading
					id="testimonials-title"
					eyebrow={t("eyebrow")}
					title={t("title")}
					className="relative lg:col-span-5"
				/>
				<div className="relative lg:col-span-7">
					<TestimonialCarousel
						items={items}
						previousLabel={t("previous")}
						nextLabel={t("next")}
					/>
				</div>
			</div>
		</section>
	);
}
