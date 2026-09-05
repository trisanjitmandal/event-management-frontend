import { Outlet } from "react-router-dom";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import AppSidebar from "@/components/common/AppSidebar";
import AppNavbar from "@/components/common/AppNavbar";

import { attendeeMenu } from "@/config/menuConfig";

function AttendeeLayout() {
  return (
    <SidebarProvider>

      <AppSidebar menu={attendeeMenu} />

      <SidebarInset>

        <AppNavbar />

        <main className="flex-1 p-6 bg-slate-50 min-h-screen">

          <Outlet />

        </main>

      </SidebarInset>

    </SidebarProvider>
  );
}

export default AttendeeLayout;