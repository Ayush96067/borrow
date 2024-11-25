"use client";
import { toast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  const { data } = useSession();
  if (!data) {
    toast({
      title: "You are not loged in",
      description: "Please Login yourself",
      variant: "destructive",
    });
    redirect("/sign-up");
  }
  return <div>Products</div>;
}

export default page;
