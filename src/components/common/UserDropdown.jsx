import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

import { logout, getEmailFromToken } from "@/utils/jwt";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

function UserDropdown() {

  const navigate = useNavigate();

  const email = getEmailFromToken();

  const initials = email
    ? email.charAt(0).toUpperCase()
    : "U";

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full p-0"
        >

          <Avatar>

            <AvatarFallback>

              {initials}

            </AvatarFallback>

          </Avatar>

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem>

          <User className="mr-2 h-4 w-4" />

          {email}

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600"
        >

          <LogOut className="mr-2 h-4 w-4" />

          Logout

        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>

  );
}

export default UserDropdown;