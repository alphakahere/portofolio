import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import LocaleLayout from "@/components/intl/LocaleLayout";

export default function Home() {
	return (
		<>
			<About />
			<Services />
			<Projects />
			<Technologies />
			<LocaleLayout>
				<Testimonials />
			</LocaleLayout>
		</>
	);
}
