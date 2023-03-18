"use client";

import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    margin: "0 auto",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export function ErrorComponent() {
  const { classes } = useStyles();
  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src="/images/error.svg"
          alt="404 Error"
          width={375}
          height={225}
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="filled"
            size="md"
            mt="xl"
            className={classes.control}
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src="/images/error.svg"
          alt="404 Error"
          width={500}
          height={300}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
}
