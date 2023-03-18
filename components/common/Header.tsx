"use client";

import {
  Header,
  Group,
  Burger,
  Container,
  Drawer,
  ScrollArea,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconLogin,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";
import { Banner } from "./Banner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mantine/core";

const links = [
  { title: "Home", href: "/", icon: IconHome },
  { title: "About Us", href: "/about", icon: IconUsers },
  { title: "Sign Up", href: "/auth/signup", icon: IconUserPlus },
  { title: "Login", href: "/auth/login", icon: IconLogin },
];

export function HeaderComponent() {
  const [opened, { toggle }] = useDisclosure(false);
  const path = usePathname();

  const buttons = links.map((link) => (
    <Button
      key={link.href}
      radius="md"
      variant={path == link.href ? "light" : "subtle"}
      component={Link}
      href={link.href}
      leftIcon={<link.icon size={20} />}
    >
      {link.title}
    </Button>
  ));

  return (
    <>
      <Header height={84}>
        <Container className="flex h-full items-center justify-between max-sm:justify-start">
          <Burger
            name="Menu"
            opened={opened}
            onClick={toggle}
            size="sm"
            mr="md"
            className="sm:hidden"
          />
          <Link href="/">
            <Banner />
          </Link>

          <Group spacing={6} className="max-sm:hidden" position="right" noWrap>
            {buttons}
          </Group>

          <Group className="absolute right-8 max-lg:hidden"></Group>
        </Container>
      </Header>

      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        className="sm:hidden"
        zIndex={1000000}
        closeButtonProps={{ size: "lg" }}
      >
        <ScrollArea sx={{ height: "calc(100vh - 80px)" }} mx="-md">
          <Group className="flex flex-col text-center">
            {buttons}
            <Divider />
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
