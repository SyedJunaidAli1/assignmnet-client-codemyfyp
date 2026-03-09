"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome to ShaadiBio</h1>

      <Button onClick={() => router.push("/editor")}>
        Create / Edit Biodata
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
