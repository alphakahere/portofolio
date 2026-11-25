import Link from "next/link";
import { useLocale } from "next-intl";

export default function Wordmark({ className = "" }: { className?: string }) {
	const locale = useLocale();
	return (
		<Link
			href={`/${locale}`}
			className={`rounded-sm text-lg font-semibold tracking-tight text-foreground ${className}`}
		>
			ALPHAKAHERE<span className="text-primary">.</span>
		</Link>
	);
}
