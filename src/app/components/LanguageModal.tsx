import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface LanguageModalProps {
  onClose: () => void;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageModal({ onClose, currentLanguage, onLanguageChange }: LanguageModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const languages = [
    { code: 'es', name: 'Español', nativeName: 'Español', icon: '🇲🇽' },
    { code: 'en', name: 'English', nativeName: 'English', icon: '🇺🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', icon: '🇫🇷' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', icon: '🇧🇷' },
  ];

  const handleSave = () => {
    onLanguageChange(selectedLanguage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-gray-900 dark:text-gray-100">Seleccionar Idioma</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Lista de idiomas */}
        <div className="p-5 max-h-96 overflow-y-auto">
          <div className="space-y-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                  selectedLanguage === language.code
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{language.icon}</span>
                  <div className="text-left">
                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                      {language.nativeName}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language.name}
                    </p>
                  </div>
                </div>
                {selectedLanguage === language.code && (
                  <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}