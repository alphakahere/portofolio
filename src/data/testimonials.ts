/**
 * Quotes are translated in messages under `testimonials.items.<id>`.
 *
 * ⚠️ PLACEHOLDER: `placeholder1` is NOT a real testimonial (copied from the design mockup).
 * Replace it with authentic, authorized quotes before deploying — see docs/DESIGN_SYSTEM.md §10.06.
 */
export type Testimonial = {
	id: string;
	name: string;
	role: string;
	/** Optional authorized photo in /public; initials are shown otherwise. */
	avatar?: string;
};

export const testimonials: Testimonial[] = [
	{ id: "placeholder1", name: "Mamadou Condé", role: "CEO, Wekomkom" },
];
