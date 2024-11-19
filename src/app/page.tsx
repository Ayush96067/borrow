"use client";

import Home from "./(app)/dashboard/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function page() {
  return (
    <div className="w-full overflow-hidden">
      <Home />
    </div>
  );
}

export default page;
