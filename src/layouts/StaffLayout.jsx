import AppNavbar from "@/components/common/AppNavbar";
import AppSidebar from "@/components/common/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { staffMenu } from "@/config/menuConfig";
import { Outlet } from "react-router-dom";



function StaffLayout(){

    return(
        <SidebarProvider>
        <AppSidebar menu = {staffMenu} />

        <SidebarInset>
        <AppNavbar/>

        <main className="flex-1 p-6 bg-slate-50 min-h-screen">

            <Outlet/> 

        </main>

        </SidebarInset>

        </SidebarProvider>
    );
}

export default StaffLayout;