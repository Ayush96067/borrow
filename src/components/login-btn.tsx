"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function LoginOut() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button
          className="hover:bg-[#393939]"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Link
        className="border hover:shadow-xl shadow-md p-1 rounded-lg "
        href={"/sign-up"}
      >
        Register
      </Link>
      <Link
        className="border hover:shadow-xl shadow-md p-1 rounded-lg"
        href={"/sign-in"}
      >
        Sign in
      </Link>
    </>
  );
}
