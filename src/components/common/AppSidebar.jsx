import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

function AppSidebar({ menu }) {
  return (
    <Sidebar>

      {/* Logo */}
      <SidebarHeader className="border-b">
        <h2 className="text-xl font-bold">
          🎟 AU Event
        </h2>
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent>

        <SidebarGroup>

          <SidebarGroupLabel>
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>

            <SidebarMenu>

              {menu.map((item) => {

                const Icon = item.icon;

                return (

                  <SidebarMenuItem key={item.path}>

                    <SidebarMenuButton asChild>

                      <NavLink to={item.path}>

                        <Icon className="h-5 w-5" />

                        <span>{item.title}</span>

                      </NavLink>

                    </SidebarMenuButton>

                  </SidebarMenuItem>

                );

              })}

            </SidebarMenu>

          </SidebarGroupContent>

        </SidebarGroup>

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t text-sm text-muted-foreground">

        AU Event v1.0

      </SidebarFooter>

    </Sidebar>
  );
}

export default AppSidebar;