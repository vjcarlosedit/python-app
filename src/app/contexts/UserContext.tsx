import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  password: string;
  career: string;
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
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(() => {
    // Intentar cargar datos del usuario desde localStorage
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : defaultUserData;
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
