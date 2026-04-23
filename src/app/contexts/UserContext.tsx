import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserStats {
  totalPoints: number;
  lessonsCompleted: number;
  currentStreak: number;
  longestStreak: number;
}

interface UserAchievement {
  title: string;
  description: string;
  icon: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  career: string;
  stats: UserStats;
  achievements: UserAchievement[];
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const defaultUserData: UserData = {
  name: 'Alex Torres',
  email: 'alex.torres@alumno.ujat.mx',
  password: 'password123',
  career: 'Ingeniería en Sistemas Computacionales',
  stats: {
    totalPoints: 1240,
    lessonsCompleted: 18,
    currentStreak: 6,
    longestStreak: 14,
  },
  achievements: [
    {
      title: 'Primer Algoritmo',
      description: 'Completaste tu primera lección con éxito.',
      icon: 'target',
    },
    {
      title: 'Racha Activa',
      description: 'Mantuviste una racha de estudio de 5 días.',
      icon: 'flame',
    },
    {
      title: 'Puntos en Marcha',
      description: 'Superaste los 1000 puntos acumulados.',
      icon: 'trophy',
    },
  ],
};

function normalizeUserData(raw: unknown): UserData {
  if (!raw || typeof raw !== 'object') {
    return defaultUserData;
  }

  const partial = raw as Partial<UserData>;

  return {
    ...defaultUserData,
    ...partial,
    stats: {
      ...defaultUserData.stats,
      ...(partial.stats ?? {}),
    },
    achievements:
      Array.isArray(partial.achievements) && partial.achievements.length > 0
        ? partial.achievements
        : defaultUserData.achievements,
  };
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(() => {
    try {
      const savedData = localStorage.getItem('userData');
      return savedData ? normalizeUserData(JSON.parse(savedData)) : defaultUserData;
    } catch {
      return defaultUserData;
    }
  });

  useEffect(() => {
    // Guardar en localStorage cuando cambie
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
