import { useState } from "react";
import { RouterProvider } from "react-router";
import { LoginView } from "./components/LoginView";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { router } from "./routes";
import { AppContext } from "./contexts/AppContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [completedSubModules, setCompletedSubModules] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(7); // Racha de días

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
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
        <LoginView onLogin={handleLogin} />
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