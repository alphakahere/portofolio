import { useTranslations } from "next-intl";
import SectionHeading, { lineBreak } from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { selectedProjects } from "@/data/projects";

export default function SelectedProjects() {
	const t = useTranslations("work");

	return (
		<section id="work" aria-labelledby="work-title" className="section">
			<div className="page-container">
				<SectionHeading
					id="work-title"
					eyebrow={t("eyebrow")}
					title={t.rich("title", { br: lineBreak })}
					className="mb-10 lg:mb-12"
				/>
				<ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{selectedProjects.map((project, i) => (
						<li key={project.slug}>
							<ProjectCard
								project={project}
								category={t(`items.${project.slug}.category`)}
								placeholderLabel={t("screenshotSoon")}
								priority={i === 1}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
