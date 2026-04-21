import { useState } from 'react';
import { ChevronRight, Languages } from 'lucide-react';
import { LanguageModal } from '../../components/LanguageModal';

export function AccountSettingsPage() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const getLanguageName = (code: string) => {
    const languages: { [key: string]: string } = {
      'es': 'Español',
      'en': 'English',
      'fr': 'Français',
      'pt': 'Português',
    };
    return languages[code] || 'Español';
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // Aquí se podría implementar la lógica de cambio de idioma
  };

  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <button 
          onClick={() => setShowLanguageModal(true)}
          className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
              <Languages className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-gray-800 dark:text-gray-200">Idioma</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">{getLanguageName(currentLanguage)}</span>
            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
        </button>
      </div>
      {showLanguageModal && (
        <LanguageModal 
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onClose={() => setShowLanguageModal(false)}
        />
      )}
    </>
  );
}
