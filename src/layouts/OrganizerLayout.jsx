import AppNavbar from "@/components/common/AppNavbar";
import AppSidebar from "@/components/common/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { organizerMenu } from "@/config/menuConfig";
import { Outlet } from "react-router-dom";


function OrganizerLayout(){

    return (
        <SidebarProvider>

            <AppSidebar menu={organizerMenu} />

            <SidebarInset>
                <AppNavbar/>

                <main className="flex-1 p-6 bg-slate-50">
                    <Outlet/>
                </main>
            </SidebarInset>
        </SidebarProvider>

    );

}

export default OrganizerLayout;