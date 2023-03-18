"use client";

import { useState } from "react";
import { createStyles, UnstyledButton, Menu, Group, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";

const data = [
  { label: "English", image: "/images/en.png" },
  { label: "Türkçe", image: "/images/tr.png" },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export function LangPicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="default"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image
              src={selected.image}
              width={22}
              height={22}
              alt={selected.label}
            />
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {data.map((item) => (
          <Menu.Item
            key={item.label}
            onClick={() => {
              setSelected(item);
              setOpened(false);
            }}
          >
            <Group spacing="xs" w={rem(120)}>
              <Image src={item.image} width={22} height={22} alt={item.label} />
              <span className={classes.label}>{item.label}</span>
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
