import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import ProtectedRoute from "@/components/common/ProtectedRoute";

import AttendeeLayout from "@/layouts/AttendeeLayout";
import OrganizerLayout from "@/layouts/OrganizerLayout";

import AttendeeDashboard from "@/pages/attendee/AttendeeDashboard";
import BrowseEvents from "@/pages/attendee/BrowseEvents";
import MyTickets from "@/pages/attendee/MyTickets";
import TicketDetails from "@/pages/attendee/TicketDetails";
import AttendeeEventDetails from "@/pages/attendee/EventDetails";
import Profile from "@/pages/attendee/Profile";

import OrganizerDashboard from "@/pages/organizer/OrganizerDashboard"
import CreateEvent from "@/pages/organizer/CreateEvent"
import OrganizerEventDetails from "@/pages/organizer/EventDetails"
import MyEvents from "@/pages/organizer/MyEvents"
import EditEvent from "@/pages/organizer/EditEvent"
import StaffManagement from "@/pages/organizer/StaffManagement"
import CreateStaff from "@/pages/organizer/CreateStaff"

import StaffLayout from "@/layouts/StaffLayout";
import StaffDashboard from "@/pages/staff/StaffDashboard"
import ValidationHistory from "@/pages/staff/ValidationHistory";
import StaffProfile from "@/pages/staff/StaffProfile";
import ValidateTicket from "@/pages/staff/ValidateTicket";
import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import OrganizerManagement from "@/pages/admin/OrganizerManagement";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>

        {/* ---------------- Admin ---------------- */}

          <Route
            path="/admin"
            element={ <AdminLayout/> } >

              <Route
                index
                element={ <Navigate to="dashboard" replace/> }
                />
              
              <Route
                path="dashboard"
                element={ <AdminDashboard/> }
              />

              <Route
                path="organizers"
                element={ <OrganizerManagement/> }
              />

            </Route>

        {/* ---------------- Attendee ---------------- */}

          <Route 
            path="/attendee"
            element={<AttendeeLayout />}
          >

            <Route
              index
              element={<Navigate to="dashboard" replace />}
            />

            <Route
              path="dashboard"
              element={<AttendeeDashboard />}
            />

            <Route
              path="events"
              element={<BrowseEvents />}
            />

            <Route 
              path="events/:eventId"
              element={<AttendeeEventDetails /> }
            />


            <Route
              path="tickets"
              element={<MyTickets />}
            />

            <Route
              path="tickets/:ticketId"
              element={<TicketDetails/>}
              />
          


            <Route
              path="profile"
              element={<Profile />}
            />

          </Route>

           {/* ---------------- Organizer ---------------- */}

          <Route path="/organizer" element={<OrganizerLayout />}>

            <Route
              index
              element={<Navigate to="dashboard" replace />}
            />

            <Route
              path="dashboard"
              element={<OrganizerDashboard />}
            />

            <Route
              path="create-event"
              element={<CreateEvent />}
            />

            <Route
              path="my-events"
              element={<MyEvents />}
            />

            <Route
              path="events/:eventId"
              element={<OrganizerEventDetails />}
            />

            <Route
              path="edit-event/:eventId"
              element={<EditEvent />}
            />

            <Route
              path="staff"
              element={<StaffManagement/> }
            />

            <Route
              path="create-staff"
              element={<CreateStaff/>}
            />


          </Route>

          {/* ---------------- Staff---------------- */}

          <Route path = "/staff" element = {<StaffLayout/> } >

          <Route
              index
              element={<Navigate to="dashboard" replace />}
            />

            <Route
              path="dashboard"
              element={<StaffDashboard />}
            />

            <Route 
            path="validate-ticket"
            element= {<ValidateTicket/> }
            />

            <Route
              path="history"
              element = {<ValidationHistory/> }
            />

            <Route
              path="profile"
              element = {<StaffProfile/> }
            />

          </Route>

        </Route>

        {/* Default */}

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;