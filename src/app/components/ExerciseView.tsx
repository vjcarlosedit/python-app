import { X, Heart } from 'lucide-react';
import { useState } from 'react';
import { getModuleData } from '../data/modulesData';

interface ExerciseViewProps {
  moduleId: number;
  exerciseIndex: number;
  onBack: () => void;
  onVerify: (isCorrect: boolean) => void;
}

export function ExerciseView({ moduleId, exerciseIndex, onBack, onVerify }: ExerciseViewProps) {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<null | { ok: boolean; message: string }>(null);

  const moduleData = getModuleData(moduleId);
  
  if (!moduleData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Módulo no encontrado</p>
      </div>
    );
  }
  
  const { lesson } = moduleData;
  const currentExercise = lesson.exercises[exerciseIndex];
  const totalQuestions = lesson.exercises.length;
  const currentQuestion = exerciseIndex + 1;
  const lives = 5;

  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Ejercicio no encontrado</p>
      </div>
    );
  }

  const handleVerify = () => {
    const trimmed = code.trim().toLowerCase();

    // Normalizar las respuestas válidas a minúsculas para comparar
    const validAnswers = currentExercise.validAnswers.map(ans => ans.toLowerCase());

    const isCorrect = validAnswers.includes(trimmed);

    if (isCorrect) {
      setFeedback({
        ok: true,
        message: currentExercise.successMessage
      });

      onVerify(true);
    } else {
      setFeedback({
        ok: false,
        message: currentExercise.errorMessage
      });

      // Vibración ligera en móviles al fallar
      if (navigator.vibrate) {
        navigator.vibrate(150);
      }

      onVerify(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <h2 className="text-gray-900 dark:text-gray-100 flex-1 text-center">
            {lesson.title}
          </h2>

          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
            <span className="text-gray-800 dark:text-gray-200">{lives}</span>
          </div>
        </div>
      </div>

      {/* Ejercicio */}
      <div className="max-w-md mx-auto px-5 py-8">
        <h1 className="text-gray-900 dark:text-gray-100 mb-8">
          {currentExercise.question}
        </h1>
        
        {currentExercise.hint && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-xl">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Pista:</strong> {currentExercise.hint}
            </p>
          </div>
        )}

        <p className="text-gray-700 dark:text-gray-300 mb-3">Tu código</p>

        {/* Editor */}
        <div className="mb-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="# Escribe tu código aquí"
            className={`w-full h-64 bg-gray-50 dark:bg-gray-800 border rounded-2xl p-4 font-mono text-sm text-gray-800 dark:text-gray-200 resize-none focus:outline-none 
              ${feedback?.ok === false ? "border-red-500 focus:ring-red-400" : ""}
              ${feedback?.ok === true ? "border-green-500 focus:ring-green-400" : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"}`}
          />
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`
              mb-4 p-3 rounded-xl text-sm font-medium
              ${feedback.ok ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"}
            `}
          >
            {feedback.message}
          </div>
        )}

        {/* Botón Verificar */}
        <button 
          onClick={handleVerify}
          className="w-full bg-blue-600 dark:bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!code.trim()}
        >
          Verificar
        </button>
      </div>
    </div>
  );
}