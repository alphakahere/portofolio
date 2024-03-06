import { NextIntlClientProvider, useMessages } from "next-intl";

type Props = {
	children: React.ReactNode;
};

export default function LocaleLayout({ children }: Props) {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
