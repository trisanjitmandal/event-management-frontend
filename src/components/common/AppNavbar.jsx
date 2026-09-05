import { SidebarTrigger } from "@/components/ui/sidebar";

import UserDropdown from "./UserDropdown";

function AppNavbar() {

  return (

    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div className="flex items-center gap-4">

        <SidebarTrigger />

        <h1 className="text-xl font-semibold">

          AU Event

        </h1>

      </div>

      <UserDropdown />

    </header>

  );

}

export default AppNavbar;