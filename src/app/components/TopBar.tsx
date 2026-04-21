import { GraduationCap } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export function TopBar() {
  const { userData } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
      <div className="max-w-md mx-auto px-5 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h1 className="text-blue-700 dark:text-blue-300">Programación I</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition-all">
            <span className="text-xs text-white font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </span>
          </button>
      </div>
    </div>
  );
}