import { Capacitor } from "@capacitor/core";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { ModulesPage } from "./pages/ModulesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { HelpPage } from "./pages/HelpPage";
import { SubModuleExercisePage } from "./pages/SubModuleExercisePage";
import { DailyPracticePage } from "./pages/DailyPracticePage";
import { EditProfilePage } from "./pages/EditProfilePage";

const createAppRouter = Capacitor.isNativePlatform()
  ? createHashRouter
  : createBrowserRouter;

export const router = createAppRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ModulesPage />,
      },
      {
        path: "/leccion/:moduleId/:subModuleId",
        element: <SubModuleExercisePage />,
      },
      {
        path: "/practica-diaria",
        element: <DailyPracticePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/profile/edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
    ],
  },
]);