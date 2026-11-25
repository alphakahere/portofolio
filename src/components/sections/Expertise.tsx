import { useTranslations } from "next-intl";
import { ArrowUpRight, Code2, Cpu, Layers, Smartphone, Users, type LucideIcon } from "lucide-react";
import SectionHeading, { lineBreak } from "@/components/ui/SectionHeading";
import AboutPreview from "./AboutPreview";

const areas: { key: string; Icon: LucideIcon }[] = [
	{ key: "fullstack", Icon: Code2 },
	{ key: "mobile", Icon: Smartphone },
	{ key: "ai", Icon: Cpu },
	{ key: "architecture", Icon: Layers },
	{ key: "leadership", Icon: Users },
];

export default function Expertise() {
	const t = useTranslations("expertise");

	return (
		<section id="expertise" aria-labelledby="expertise-title" className="section border-t border-border">
			<div className="page-container grid gap-12 lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-4">
					<SectionHeading
						id="expertise-title"
						eyebrow={t("eyebrow")}
						title={t.rich("title", { br: lineBreak })}
						className="mb-6"
					/>
					<p className="mb-6 max-w-sm text-foreground/80">
						{t.rich("text", {
							accent: (chunks) => <span className="text-accent">{chunks}</span>,
						})}
					</p>
					<a href="#about" className="link-arrow">
						{t("link")}
						<ArrowUpRight size={16} aria-hidden="true" />
					</a>
				</div>

				<ul className="flex flex-col justify-center lg:col-span-3">
					{areas.map(({ key, Icon }) => (
						<li
							key={key}
							className="flex items-center gap-4 border-b border-border py-4 last:border-0 lg:border-0 lg:py-3"
						>
							<Icon size={20} aria-hidden="true" className="flex-shrink-0 text-foreground" />
							<span className="text-foreground">{t(`items.${key}`)}</span>
						</li>
					))}
				</ul>

				<div className="lg:col-span-5">
					<AboutPreview />
				</div>
			</div>
		</section>
	);
}
