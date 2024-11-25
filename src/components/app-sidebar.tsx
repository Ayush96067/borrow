"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Contact,
  Home,
  LampDesk,
  List,
  Settings,
  ShoppingBag,
  UserCheck2,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useSession } from "next-auth/react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingBag,
  },
  {
    title: "Contact us",
    url: "/contact-us",
    icon: Contact,
  },
  {
    title: "Services us",
    url: "/services",
    icon: Settings,
  },
  {
    title: "About us",
    url: "/about-us",
    icon: LampDesk,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const { data } = useSession();

  return (
    <Sidebar variant="floating" side="left" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link onClick={toggleSidebar} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="ml-2">
            {data?.user.username ? (
              <span className="flex gap-2">
                <UserCheck2 />
                {data?.user.username}
              </span>
            ) : (
              "Not logged"
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
