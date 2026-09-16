import { AppShell as MantineAppShell, Stack, NavLink } from "@mantine/core";
import Link from "next/link";

import navLinks from "@/config/navLinks.json";
import { usePathname } from "next/navigation";

export default function AppShellNavbar() {
	const pathname = usePathname();

	return (
		<MantineAppShell.Navbar p="md">
			<Stack gap={4}>
				{navLinks.map((item) =>
					item.children ? (
						<NavLink
							key={item.label}
							label={item.label}
							childrenOffset={28}
							defaultOpened={item.children.some((child) => pathname.endsWith(child.path))}
							color="dark"
							variant="filled"
							styles={{ root: { borderRadius: 8 } }}
						>
							{item.children.map((child) => (
								<NavLink
									component={Link}
									key={child.label}
									label={child.label}
									active={pathname.endsWith(child.path)}
									href={child.path}
									color="dark"
									variant="filled"
									styles={{ root: { borderRadius: 8 } }}
								/>
							))}
						</NavLink>
					) : (
						<NavLink
							component={Link}
							key={item.label}
							label={item.label}
							active={pathname.endsWith(item.path)}
							href={item.path}
							color="dark"
							variant="filled"
							styles={{ root: { borderRadius: 8 } }}
						/>
					),
				)}
			</Stack>
		</MantineAppShell.Navbar>
	);
}
