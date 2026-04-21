import { createContext, useContext } from 'react';

interface AppContextType {
  completedModules: number[];
  completedSubModules: string[];
  xp: number;
  streak: number;
  onModuleComplete: (moduleId: number) => void;
  onSubModuleComplete: (subModuleId: string) => void;
  addXP: (points: number) => void;
  onLogout: () => void;
}

export const AppContext = createContext<AppContextType>({
  completedModules: [],
  completedSubModules: [],
  xp: 0,
  streak: 0,
  onModuleComplete: () => {},
  onSubModuleComplete: () => {},
  addXP: () => {},
  onLogout: () => {},
});

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppContext.Provider');
  }
  return context;
};