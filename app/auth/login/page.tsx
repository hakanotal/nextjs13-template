"use client";

import { LoginForm } from "@/components/auth/LoginForm";
import { FooterComponent } from "@/components/common/Footer";
import { HeaderComponent } from "@/components/common/Header";
import { Paper, Title, Text, Container, Button } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <HeaderComponent />

      <Container size={420} my={80}>
        <Title align="center">Welcome back!</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Link href="/auth/signup">
            <Button variant="subtle" compact>
              Sign Up
            </Button>
          </Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <LoginForm />
        </Paper>
      </Container>

      <FooterComponent />
    </>
  );
}
