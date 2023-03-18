"use client";

import { FooterComponent } from "@/components/common/Footer";
import { HeaderComponent } from "@/components/common/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("SESSION", session);
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      <HeaderComponent />
      <h1>APP CONTENT</h1>
      <FooterComponent />
    </>
  );
}
