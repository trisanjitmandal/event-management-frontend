import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  User,
  Users,
  PlusCircle,
  QrCode,
  HistoryIcon,
} from "lucide-react";

export const attendeeMenu = [
  {
    title: "AttendeeDashboard",
    path: "/attendee/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Events",
    path: "/attendee/events",
    icon: CalendarDays,
  },
  {
    title: "My Tickets",
    path: "/attendee/tickets",
    icon: Ticket,
  },
  {
    title: "Profile",
    path: "/attendee/profile",
    icon: User,
  },
];

export const organizerMenu = [
  {
    title: "OrganizerDashboard",
    path: "/organizer/dashboard",
    icon: LayoutDashboard,
  },
  // {
  //   title: "Events",
  //   path: "/organizer/events",
  //   icon: ClipboardList,
  // },
  {
    title: "Create Event",
    path: "/organizer/create-event",
    icon: PlusCircle,
  },
  {
    title: "Staff",
    path: "/organizer/staff",
    icon: Users,
  },

  // {
  //   title: "Profile",
  //   path: "/organizer/profile",
  //   icon: User,
  // },
  
  {
    title: "My Events",
    path: "/organizer/my-events",
    icon: CalendarDays,
  }
];

export const adminMenu = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Organizer Management",
    path: "/admin/organizers",
    icon: Users,
  },
  // {
  //   title: "Events",
  //   path: "/admin/events",
  //   icon: CalendarDays,
  // },
  // {
  //   title: "Profile",
  //   path: "/admin/profile",
  //   icon: User,
  // },
  ];

  export const staffMenu = [
    {
      title: "StaffDashborad",
      path: "/staff/dashboard",
      icon: LayoutDashboard,
    },
    {
        title: "Validate Ticket",
        path: "/staff/validate-ticket",
        icon: QrCode,
    },

    {
        title: "History",
        path: "/staff/history",
        icon:  HistoryIcon,
    },

    {
        title: "Profile",
        path: "/staff/profile",
        icon: User,
    },
  ];
