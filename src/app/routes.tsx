import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { ModulesPage } from "./pages/ModulesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { HelpPage } from "./pages/HelpPage";
import { SubModuleExercisePage } from "./pages/SubModuleExercisePage";
import { DailyPracticePage } from "./pages/DailyPracticePage";
import { EditProfilePage } from "./pages/EditProfilePage";
import { AppearanceSettingsPage } from "./pages/settings/AppearanceSettingsPage";
import { AccountSettingsPage } from "./pages/settings/AccountSettingsPage";
import { NotificationsSettingsPage } from "./pages/settings/NotificationsSettingsPage";

export const router = createBrowserRouter([
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
        children: [
          {
            path: "appearance",
            element: <AppearanceSettingsPage />,
          },
          {
            path: "account",
            element: <AccountSettingsPage />,
          },
          {
            path: "notifications",
            element: <NotificationsSettingsPage />,
          },
        ]
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