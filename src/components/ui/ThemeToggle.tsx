"use client";
import { Moon, Sun } from "lucide-react";

type Props = { labelToDark: string; labelToLight: string };

/**
 * Light/dark switch. The initial class on <html> is set by the inline script in the
 * root layout; this only flips it and persists the choice. Icons and labels are
 * switched with CSS (`dark:`), so server and client markup always match.
 */
export default function ThemeToggle({ labelToDark, labelToLight }: Props) {
	const toggle = () => {
		const isDark = document.documentElement.classList.toggle("dark");
		try {
			localStorage.setItem("theme", isDark ? "dark" : "light");
		} catch {}
	};

	return (
		<button
			type="button"
			onClick={toggle}
			className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-150 hover:bg-surface-secondary"
		>
			<Moon size={18} aria-hidden="true" className="dark:hidden" />
			<Sun size={18} aria-hidden="true" className="hidden dark:block" />
			<span className="sr-only dark:hidden">{labelToDark}</span>
			<span className="sr-only hidden dark:inline">{labelToLight}</span>
		</button>
	);
}
