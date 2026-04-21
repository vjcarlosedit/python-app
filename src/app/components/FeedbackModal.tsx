import { Check, X } from 'lucide-react';

interface FeedbackModalProps {
  type: 'correct' | 'incorrect';
  progress: number;
  message: string;
  onContinue: () => void;
}

export function FeedbackModal({ type, progress, message, onContinue }: FeedbackModalProps) {
  const isCorrect = type === 'correct';

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-auto rounded-t-3xl overflow-hidden bg-white dark:bg-gray-800">
        {/* Barra superior de color */}
        <div className={`h-2 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />

        <div className="p-8 pb-10">
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
              isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
            }`}>
              {isCorrect ? (
                <Check className="w-12 h-12 text-green-600 dark:text-green-400" strokeWidth={3} />
              ) : (
                <X className="w-12 h-12 text-red-600 dark:text-red-400" strokeWidth={3} />
              )}
            </div>
          </div>

          {/* Título */}
          <h2 className={`text-center mb-4 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isCorrect ? '¡Respuesta Correcta!' : '¡Respuesta Incorrecta!'}
          </h2>

          {/* Mensaje detallado */}
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
            {message}
          </p>

          {/* Progreso de la lección */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Progreso de la lección</span>
              <span className="text-sm text-blue-600 dark:text-blue-400">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Botón continuar */}
          <button
            onClick={onContinue}
            className="w-full bg-blue-900 dark:bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-950 dark:hover:bg-blue-700 transition-colors shadow-md"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}