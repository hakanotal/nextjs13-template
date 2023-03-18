"use client";

import { SignupForm } from "@/components/auth/SignupForm";
import { FooterComponent } from "@/components/common/Footer";
import { HeaderComponent } from "@/components/common/Header";
import { Paper, Title, Text, Container, Button } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <HeaderComponent />

      <Container size={420} my={80}>
        <Title align="center">Create your account!</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Link href="/auth/login">
            <Button variant="subtle" compact>
              Login
            </Button>
          </Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <SignupForm />
        </Paper>
      </Container>

      <FooterComponent />
    </>
  );
}
