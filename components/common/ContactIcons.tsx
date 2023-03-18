"use client";

import { createStyles, Text, Box, Stack } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage: "none",
    backgroundColor: "transparent",
  },

  title: {
    color: theme.colors[theme.primaryColor][0],
  },

  description: {
    color: theme.white,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <Box mr="md">
        <Icon size="1.5rem" />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const data = [
  { title: "Email", description: "hello@mantine.dev", icon: IconAt },
  { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
  { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun },
];

export function ContactIconsList() {
  return (
    <Stack>
      {data.map((item, index) => (
        <ContactIcon key={index} {...item} />
      ))}
    </Stack>
  );
}
