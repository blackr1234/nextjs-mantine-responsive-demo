"use client";

import {
	AppShell as MantineAppShell,
	Stack,
	Title,
	Text,
	SimpleGrid,
	Card,
	Group,
	RingProgress,
	Divider,
	Table,
	Badge,
} from "@mantine/core";

const projects = [
	{ name: "Alder & Finch — Rebrand", client: "Alder & Finch", status: "In progress", hours: 42 },
	{ name: "Marrow Coffee — Packaging", client: "Marrow Coffee", status: "Review", hours: 18 },
	{ name: "Northbound — Site refresh", client: "Northbound Trail", status: "In progress", hours: 27 },
	{ name: "Petrel Books — Catalog", client: "Petrel Books", status: "Done", hours: 63 },
];

const statusColor = { "In progress": "blue", Review: "yellow", Done: "teal" };

export default function Page() {
	return (
		<MantineAppShell.Main>
			<Stack gap="xl">
				<div>
					<Title order={2} style={{ letterSpacing: -0.5 }}>
						Good afternoon, Michael
					</Title>
					<Text c="dimmed" size="sm" mt={4}>
						Here is where things stand across the studio.
					</Text>
				</div>

				<SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
					<Card withBorder radius="md" padding="lg">
						<Text size="sm" c="dimmed">
							Active projects
						</Text>
						<Text size="32px" fw={700} mt={4}>
							7
						</Text>
					</Card>
					<Card withBorder radius="md" padding="lg">
						<Text size="sm" c="dimmed">
							Hours this week
						</Text>
						<Text size="32px" fw={700} mt={4}>
							112
						</Text>
					</Card>
					<Card withBorder radius="md" padding="lg">
						<Group justify="space-between" align="flex-start">
							<div>
								<Text size="sm" c="dimmed">
									Capacity used
								</Text>
								<Text size="32px" fw={700} mt={4}>
									82%
								</Text>
							</div>
							<RingProgress size={64} thickness={6} sections={[{ value: 82, color: "orange" }]} />
						</Group>
					</Card>
				</SimpleGrid>

				<Card withBorder radius="md" padding="lg">
					<Group justify="space-between" mb="md">
						<Text fw={600}>Current projects</Text>
						<Text size="sm" c="dimmed">
							{projects.length} total
						</Text>
					</Group>
					<Divider mb="sm" />
					<Table.ScrollContainer minWidth={560}>
						<Table verticalSpacing="sm">
							<Table.Thead>
								<Table.Tr>
									<Table.Th>Project</Table.Th>
									<Table.Th>Client</Table.Th>
									<Table.Th>Status</Table.Th>
									<Table.Th>Hours</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{projects.map((p) => (
									<Table.Tr key={p.name}>
										<Table.Td>{p.name}</Table.Td>
										<Table.Td>{p.client}</Table.Td>
										<Table.Td>
											<Badge color={statusColor[p.status]} variant="light">
												{p.status}
											</Badge>
										</Table.Td>
										<Table.Td>{p.hours}h</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				</Card>
			</Stack>
		</MantineAppShell.Main>
	);
}
