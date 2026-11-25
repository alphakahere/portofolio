/** Subtle concentric circular lines (decorative). Color follows `currentColor`. */
export default function Arcs({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 400 400"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className={`pointer-events-none ${className}`}
		>
			{[60, 100, 140, 180, 220, 260].map((r) => (
				<circle key={r} cx="400" cy="200" r={r} stroke="currentColor" strokeWidth="1" />
			))}
		</svg>
	);
}
