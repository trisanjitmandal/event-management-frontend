import { Outlet } from "react-router-dom";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import AppSidebar from "@/components/common/AppSidebar";
import AppNavbar from "@/components/common/AppNavbar";

import { adminMenu } from "@/config/menuConfig";

function AdminLayout() {
  return (
    <SidebarProvider>

      <AppSidebar menu={adminMenu} />

      <SidebarInset>

        <AppNavbar />

        <main className="flex-1 p-6 bg-slate-50 min-h-screen">

          <Outlet />

        </main>

      </SidebarInset>

    </SidebarProvider>
  );
}

export default AdminLayout;