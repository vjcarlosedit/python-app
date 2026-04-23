import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { LoginView } from "./components/LoginView";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { router } from "./routes";
import { AppContext } from "./contexts/AppContext";

type AuthScreen = "login" | "register";

const TEST_EMAIL = "test@alumon.ujat.mx";
const TEST_PASSWORD = "ujat2026";

function getAuthScreenFromPath(pathname: string): AuthScreen {
  return pathname === "/register" ? "register" : "login";
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authScreen, setAuthScreen] = useState<AuthScreen>(() =>
    getAuthScreenFromPath(window.location.pathname)
  );
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [completedSubModules, setCompletedSubModules] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(7); // Racha de días

  useEffect(() => {
    const handlePopState = () => {
      if (!isLoggedIn) {
        setAuthScreen(getAuthScreenFromPath(window.location.pathname));
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isLoggedIn]);

  const navigateAuth = (screen: AuthScreen) => {
    const path = screen === "register" ? "/register" : "/login";
    setAuthScreen(screen);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
  };

  const handleLogin = () => {
    window.history.replaceState({}, "", "/");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    window.history.replaceState({}, "", "/login");
    setAuthScreen("login");
    setIsLoggedIn(false);
    setCompletedModules([]);
    setCompletedSubModules([]);
    setXp(0);
  };

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const handleSubModuleComplete = (subModuleId: string) => {
    if (!completedSubModules.includes(subModuleId)) {
      setCompletedSubModules([...completedSubModules, subModuleId]);
    }
  };

  const addXP = (points: number) => {
    setXp(prev => prev + points);
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <LoginView
          onLogin={handleLogin}
          authScreen={authScreen}
          onNavigateAuth={navigateAuth}
          defaultEmail={TEST_EMAIL}
          defaultPassword={TEST_PASSWORD}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <UserProvider>
        <AppContext.Provider value={{ 
          completedModules,
          completedSubModules,
          xp,
          streak,
          onModuleComplete: handleModuleComplete,
          onSubModuleComplete: handleSubModuleComplete,
          addXP,
          onLogout: handleLogout 
        }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </UserProvider>
    </ThemeProvider>
  );
}