import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { DuolingoExercise } from '../components/DuolingoExercise';
import { LoadingScreen } from '../components/LoadingScreen';
import { Sparkles, Zap, Brain, Target, Code } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

// Función para obtener ejercicios aleatorios de diferentes módulos
function getRandomExercises(count: number = 5) {
  // IDs de submódulos disponibles
  const availableSubModules = [
    '1.1', '1.2', '1.3', '1.4', '1.5', '1.6',
    '2.1', '2.2', '2.3', '2.4', '2.5',
    '3.1', '3.2', '3.3',
    '4.1', '4.2', '4.3', '4.4',
    '5.1', '5.2', '5.3',
    '6.1', '6.2', '6.3'
  ];

  const selectedExercises: Array<{ subModuleId: string; exerciseIndex: number }> = [];

  // Mezclar submódulos
  const shuffled = [...availableSubModules].sort(() => Math.random() - 0.5);

  for (let i = 0; i < count && i < shuffled.length; i++) {
    const subModuleId = shuffled[i];
    
    // Número aleatorio de ejercicio (0-3, ya que la mayoría tienen 3-5 ejercicios)
    const randomExerciseIndex = Math.floor(Math.random() * 4);

    selectedExercises.push({
      subModuleId,
      exerciseIndex: randomExerciseIndex
    });
  }

  return selectedExercises;
}

export function DailyPracticePage() {
  const navigate = useNavigate();
  const { addXP } = useApp();
  const [isGenerating, setIsGenerating] = useState(true);
  const [exercises, setExercises] = useState<Array<{ subModuleId: string; exerciseIndex: number }>>([]);
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(0);

  useEffect(() => {
    // Simular generación de ejercicios con IA
    const timer = setTimeout(() => {
      const randomExercises = getRandomExercises(5);
      setExercises(randomExercises);
      setIsGenerating(false);
    }, 2500); // 2.5 segundos de animación

    return () => clearTimeout(timer);
  }, []);

  const handleBackToPath = () => {
    navigate('/');
  };

  const handleVerify = (isCorrect: boolean) => {
    if (isCorrect) {
      addXP(5); // 5 XP por ejercicio correcto en práctica diaria
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIdx + 1 >= exercises.length) {
      // Completó todos los ejercicios
      setCompletedExercises(exercises.length);
      addXP(20); // Bonus por completar práctica diaria
      
      // Mostrar modal de celebración y volver
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setCurrentExerciseIdx(currentExerciseIdx + 1);
    }
  };

  // Pantalla de generación con IA
  if (isGenerating) {
    const loadingMessages = [
      'Generando ejercicios con IA...',
      'La IA está analizando tu progreso...',
      'Personalizando tu práctica...',
      'La IA está seleccionando preguntas...',
      'Adaptando nivel de dificultad...',
      'Creando ejercicios únicos...',
      'La IA está mezclando conceptos...',
      'Optimizando con inteligencia artificial...',
      'Casi listos...'
    ];

    return (
      <LoadingScreen
        messages={loadingMessages}
        icon={<Brain className="w-8 h-8 text-white" />}
        moduleTitle="Programación I"
        subModuleTitle="Práctica Diaria con IA"
        onBack={handleBackToPath}
        colorScheme="purple"
      />
    );
  }

  // Pantalla de completado
  if (completedExercises === exercises.length && exercises.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-5">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-green-200/40 dark:bg-green-800/40 rounded-full animate-ping" />
            </div>
            <div className="relative text-9xl animate-bounce">🎉</div>
          </div>
          
          <h1 className="text-gray-900 dark:text-white text-4xl font-bold mb-4">
            ¡Práctica Completada!
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-xl mb-8">
            Has completado {exercises.length} ejercicios variados
          </p>

          <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-4">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">+{5 * exercises.length + 20} XP</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Bonus de práctica diaria incluido</p>
          </div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Regresando al camino de aprendizaje...
          </p>
        </div>
      </div>
    );
  }

  // Ejercicios
  const currentExercise = exercises[currentExerciseIdx];

  if (!currentExercise) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DuolingoExercise
        subModuleId={currentExercise.subModuleId}
        exerciseIndex={currentExercise.exerciseIndex}
        onBack={handleBackToPath}
        onVerify={handleVerify}
        onNextExercise={handleNextExercise}
        totalExercises={exercises.length}
        currentQuestionOverride={currentExerciseIdx + 1}
        skipLoadingScreen={true}
        colorScheme="purple"
      />
    </div>
  );
}