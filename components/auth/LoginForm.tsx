"use client";

import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    setLoading(false);
    console.log("LOGIN", res);
    if (res?.ok) {
      router.push("/panel");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <LoadingOverlay visible={loading} overlayOpacity={0} overlayBlur={2} />
      <TextInput
        label="Email"
        placeholder="you@mantine.dev"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Group position="apart" mt="lg">
        <Checkbox label="Remember me" />
        <Button variant="subtle" compact>
          Forgot password?
        </Button>
      </Group>
      <Button type="submit" fullWidth mt="xl">
        Login
      </Button>
    </form>
  );
}
