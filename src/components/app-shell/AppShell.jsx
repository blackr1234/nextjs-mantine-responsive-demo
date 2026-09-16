"use client";

import { useState } from "react";
import { AppShell as MantineAppShell, Stack, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import AppShellHeader from "./AppShellHeader";
import AppShellNavbar from "./AppShellNavbar";

export default function AppShell({ children }) {
	const [opened, { toggle }] = useDisclosure();
	const [openedDesktop, { toggle: toggleDesktop }] = useDisclosure(true);

	return (
		<MantineAppShell
			padding="lg"
			header={{ height: 64 }}
			navbar={{
				width: 260,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !openedDesktop },
			}}
		>
			<AppShellHeader
				opened={opened}
				openedDesktop={openedDesktop}
				toggle={toggle}
				toggleDesktop={toggleDesktop}
			/>

			<AppShellNavbar />

			{children}
		</MantineAppShell>
	);
}
