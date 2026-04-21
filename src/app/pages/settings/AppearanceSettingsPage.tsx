import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';

export function AppearanceSettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <button 
        onClick={toggleTheme}
        className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            )}
          </div>
          <span className="text-gray-800 dark:text-gray-200">Modo Oscuro</span>
        </div>
        <div className={`w-12 h-6 rounded-full transition-colors ${
          theme === 'dark' ? 'bg-purple-600' : 'bg-gray-300'
        } relative`}>
          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </div>
      </button>

      <button 
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            ) : (
              <VolumeX className="w-5 h-5 text-green-600 dark:text-green-400" />
            )}
          </div>
          <span className="text-gray-800 dark:text-gray-200">Efectos de Sonido</span>
        </div>
        <div className={`w-12 h-6 rounded-full transition-colors ${
          soundEnabled ? 'bg-green-600' : 'bg-gray-300'
        } relative`}>
          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
            soundEnabled ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </div>
      </button>
    </div>
  );
}
