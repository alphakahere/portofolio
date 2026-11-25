/**
 * Selected projects shown on the homepage (docs/DESIGN_SYSTEM.md §10.03).
 * Translated text lives in messages under `work.items.<slug>`.
 */
export type Project = {
	slug: "wekomkom" | "visitguinea" | "endam360";
	name: string;
	/** Real screenshot in /public. `null` renders a neutral placeholder until one is supplied. */
	image: string | null;
	tech: string[];
	/** Case study or live site. `null` until the page exists. */
	href: string | null;
};

export const selectedProjects: Project[] = [
	{
		slug: "wekomkom",
		name: "Wekomkom",
		image: null, // TODO: add a real screenshot
		tech: [],
		href: null,
	},
	{
		slug: "visitguinea",
		name: "VisitGuinea",
		image: "/images/projects/visitguinea.png",
		tech: [],
		href: null,
	},
	{
		slug: "endam360",
		name: "ENDAM 360",
		image: null, // TODO: add a real screenshot
		tech: [],
		href: null,
	},
];
