import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";

import ForgetPass from "../Auth/ForgetPass";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";
import Notification from "../page/Notification/Notification";

import Login from "../Auth/Login";
import { MessageMail } from "../page/messageMail/MessageMail";
import { OrderManagement } from "../page/orderManagement/OrderManagement";

import { Services } from "../page/Services/Services";

import { ServicesCategories } from "../page/ServiceCategories/ServicesCategories";

import { InvoiceOrder } from "../page/invoiceOrder/InvoiceOrder";
import { TeamMember } from "../page/TeamMember/TeamMember";
import { TaskManagement } from "../page/TaskManagement/TaskManagement";

import CreateServices from "../page/createOrder/CreateServices";
import { OrderDetailsPage } from "../page/orderManagement/OrderDetailsPage";
import { AllServiceTask } from "../page/TaskManagement/AllServiceTask";
import { ProjectFile } from "../page/TaskManagement/ProjectFile";
import { UserDetailsPage } from "../page/messageMail/UserDetailsPage";
import { EditOrder } from "../page/orderManagement/EditOrder";
import { EditServices } from "../page/orderManagement/EditServices";
import { AddServicePage } from "../page/orderManagement/AddServicePage";

import { TaskManagementPage } from "../page/TaskManagement/TaskManagementPage";
import Settings from "../page/Settings/Settings";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import TermsCondition from "../page/Settings/TermsCondition";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/message-mail",
        element: <MessageMail></MessageMail>,
      },
      // {
      //   path: "/dashboard/message-mail/user-details",
      //   element: <UserDetailsPage></UserDetailsPage>
      // },

      {
        path: "/dashboard/create-services",
        element: <CreateServices></CreateServices>,
      },
      {
        path: "/dashboard/order-management",
        element: <OrderManagement />,
      },

      {
        path: "/dashboard/order-management/order-details/:id",
        element: <OrderDetailsPage />,
      },
      {
        path: "/dashboard/order-management/order-details/edit-order",
        element: <EditOrder></EditOrder>,
      },
      {
        path: "/dashboard/order-management/order-details/edit-services",
        element: <EditServices></EditServices>,
      },
      {
        path: "/dashboard/order-management/order-details/add-services",
        element: <AddServicePage></AddServicePage>,
      },

      {
        path: "/dashboard/services",
        element: <Services></Services>,
      },

      {
        path: "/dashboard/service-categories",
        element: <ServicesCategories></ServicesCategories>,
      },

      {
        path: "/dashboard/invoice-order",
        element: <InvoiceOrder></InvoiceOrder>,
      },
      {
        path: "/dashboard/team-member",
        element: <TeamMember></TeamMember>,
      },
      {
        path: "/dashboard/task-managementPage",
        element: <TaskManagementPage></TaskManagementPage>,
      },
      {
        path: "/dashboard/task-management",
        element: <TaskManagement></TaskManagement>,
      },
      {
        path: "/dashboard/task-management/all-Services",
        element: <AllServiceTask></AllServiceTask>,
      },
      {
        path: "/dashboard/task-management/all-Services/project-file",
        element: <ProjectFile></ProjectFile>,
      },
      {
        path: "/dashboard/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/dashboard/Settings/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/dashboard/Settings/terms",
        element: <TermsCondition></TermsCondition>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPass></ForgetPass>,
  },
  {
    path: "/verify",
    element: <Verify></Verify>,
  },
  {
    path: "/reset",
    element: <ResetPass></ResetPass>,
  },
]);
