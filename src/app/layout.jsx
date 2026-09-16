import "./global.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import AppShell from "@/components/app-shell/AppShell";

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="dark">
					<AppShell>{children}</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
