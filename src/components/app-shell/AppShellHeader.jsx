"use client";

import { AppShell as MantineAppShell, Burger, Group, Text, Avatar, Menu, UnstyledButton } from "@mantine/core";

export default function AppShellHeader({ opened, openedDesktop, toggle, toggleDesktop }) {
	return (
		<MantineAppShell.Header>
			<Group h="100%" px="lg" justify="space-between">
				<Group gap="sm">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
					<Burger opened={openedDesktop} onClick={toggleDesktop} visibleFrom="sm" />
					<Group gap={6}>
						<Text fw={700} size="lg" style={{ letterSpacing: -0.3 }}>
							Norr Studio
						</Text>
					</Group>
				</Group>

				<Menu shadow="md" width={180} position="bottom-end">
					<Menu.Target>
						<UnstyledButton>
							<Group gap={8}>
								<Avatar radius="xl" color="dark" size={32}>
									MC
								</Avatar>
								<Text size="sm" visibleFrom="sm">
									Michael C.
								</Text>
							</Group>
						</UnstyledButton>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item>Account</Menu.Item>
						<Menu.Item>Billing</Menu.Item>
						<Menu.Divider />
						<Menu.Item color="red">Sign out</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Group>
		</MantineAppShell.Header>
	);
}
