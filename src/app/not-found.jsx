"use client";

import { AppShell as MantineAppShell, Title } from "@mantine/core";

export default function Page() {
	return (
		<MantineAppShell.Main>
			<Title order={2} style={{ letterSpacing: -0.5 }}>
				404 Page Not Found
			</Title>
		</MantineAppShell.Main>
	);
}
