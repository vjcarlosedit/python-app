import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LessonContent } from '../components/LessonContent';
import { DuolingoExercise } from '../components/DuolingoExercise';
import { useApp } from '../contexts/AppContext';

export function Module3Page() {
  const navigate = useNavigate();
  const { onModuleComplete } = useApp();
  const [currentView, setCurrentView] = useState<'lesson' | 'exercise'>('lesson');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const totalExercises = 3;

  const handleStartExercise = () => {
    setCurrentView('exercise');
  };

  const handleBackToPath = () => {
    navigate('/');
  };

  const handleVerify = (isCorrect: boolean) => {
    // El feedback ahora se maneja inline en DuolingoExercise
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex + 1 >= totalExercises) {
      // Completar módulo y volver al camino
      onModuleComplete(3);
      navigate('/');
    } else {
      // Avanzar al siguiente ejercicio
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {currentView === 'lesson' && (
        <LessonContent
          moduleId={3}
          onBack={handleBackToPath}
          onContinue={handleStartExercise}
        />
      )}
      {currentView === 'exercise' && (
        <DuolingoExercise
          moduleId={3}
          exerciseIndex={currentExerciseIndex}
          onBack={() => setCurrentView('lesson')}
          onVerify={handleVerify}
          onNextExercise={handleNextExercise}
          totalExercises={totalExercises}
        />
      )}
    </div>
  );
}