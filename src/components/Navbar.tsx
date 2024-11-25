"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import LoginOut from "./login-btn";
import { useSession } from "next-auth/react";
import Logo from "./Logo";

export function NavbarDemo() {
  return (
    <div className="relative  w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { data } = useSession();
  return (
    <div
      className={cn(
        "fixed  top-10 max-w-xs  inset-x-0 md:max-w-md mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center gap-5">
          <Logo />
          <LoginOut />
          <h1 className="font-bold italic">
            {" "}
            {data ? `Welcome ${data.user.username}` : ""}
          </h1>
        </div>
      </Menu>
    </div>
  );
}
