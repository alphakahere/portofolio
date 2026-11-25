import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Expertise from "@/components/sections/Expertise";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

// Section order: docs/DESIGN_SYSTEM.md §10
export default function Home({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale);
	return (
		<>
			<Hero />
			<SelectedProjects />
			<Expertise />
			<Testimonials />
			<ContactCTA />
		</>
	);
}
