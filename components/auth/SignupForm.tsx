"use client";

import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { FormEventHandler, useState } from "react";

export function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO fill

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <LoadingOverlay visible={loading} overlayOpacity={0} overlayBlur={2} />

      <TextInput
        label="Name"
        placeholder="example"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, name: e.target.value })
        }
      />
      <TextInput
        label="Email"
        placeholder="example@mail.com"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <PasswordInput
        label="Password"
        placeholder="********"
        required
        mt="md"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Group position="apart" mt="lg">
        <Checkbox label="I accept the Terms & Conditions" />
      </Group>
      <Button fullWidth mt="xl">
        Sign Up
      </Button>
    </form>
  );
}
