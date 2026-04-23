import { useNavigate, useParams } from 'react-router-dom';
import { DuolingoExercise } from '../components/DuolingoExercise';
import { LoadingScreen } from '../components/LoadingScreen';
import { useApp } from '../contexts/AppContext';
import { getExercisesForSubModule } from '../data/exercises';
import { getModuleById, getSubModuleById } from '../data/curriculum';
import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function SubModuleExercisePage() {
  const navigate = useNavigate();
  const { moduleId, subModuleId } = useParams<{ moduleId: string; subModuleId: string }>();
  const { onSubModuleComplete, addXP } = useApp();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);

  const exercises = getExercisesForSubModule(subModuleId || '');
  const module = getModuleById(Number(moduleId));
  const subModule = getSubModuleById(Number(moduleId), subModuleId || '');

  useEffect(() => {
    if (!showCompletionScreen) {
      return;
    }

    const timer = setTimeout(() => {
      navigate('/');
    }, 2600);

    return () => clearTimeout(timer);
  }, [navigate, showCompletionScreen]);

  if (!exercises.length || !subModule) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ejercicios no disponibles para este submódulo
          </p>
          <button
            onClick={() => navigate(`/modulo/${moduleId}`)}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Volver al módulo
          </button>
        </div>
      </div>
    );
  }

  const handleBackToModule = () => {
    navigate('/');
  };

  const handleVerify = (isCorrect: boolean) => {
    if (isCorrect) {
      addXP(10); // 10 XP por ejercicio correcto
    }
  };

  const handleNextExercise = () => {
    const nextIndex = currentExerciseIndex + 1;

    if (nextIndex < exercises.length) {
      setCurrentExerciseIndex(nextIndex);
      return;
    }

    // Marcar submódulo como completado solo al finalizar todos los ejercicios.
    if (subModuleId) {
      onSubModuleComplete(subModuleId);
      addXP(25); // Bonus por completar submódulo
    }

    setShowCompletionScreen(true);
  };

  if (showCompletionScreen) {
    const completionMessages = [
      `${exercises.length}/${exercises.length} ejercicios completados`,
      `Sección ${subModule.id} completada`,
      `Excelente trabajo en ${subModule.title}`,
      'Bien hecho, sigue aprendiendo Python',
      'Regresando al inicio...'
    ];

    return (
      <LoadingScreen
        messages={completionMessages}
        icon={<CheckCircle2 className="w-8 h-8 text-white" />}
        moduleTitle={module?.title}
        subModuleTitle={subModule.title}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DuolingoExercise
        moduleId={Number(moduleId) || 1}
        exerciseIndex={currentExerciseIndex}
        onBack={handleBackToModule}
        onVerify={handleVerify}
        onNextExercise={handleNextExercise}
        totalExercises={exercises.length}
        subModuleId={subModuleId}
        customExercises={exercises}
      />
    </div>
  );
}