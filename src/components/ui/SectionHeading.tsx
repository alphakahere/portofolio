/** For `<br></br>` in rich messages: a line break from `sm` up, a plain space below. */
export const lineBreak = () => (
	<>
		{" "}
		<br className="hidden sm:block" />
	</>
);

type Props = {
	eyebrow: string;
	title: React.ReactNode;
	id?: string;
	className?: string;
};

/** Eyebrow label + serif section title (h2). */
export default function SectionHeading({ eyebrow, title, id, className = "" }: Props) {
	return (
		<div className={className}>
			<p className="eyebrow mb-4">{eyebrow}</p>
			<h2 id={id} className="font-serif text-3xl md:text-4xl text-foreground">
				{title}
			</h2>
		</div>
	);
}
