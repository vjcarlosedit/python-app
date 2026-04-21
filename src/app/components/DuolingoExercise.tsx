import { useState, useEffect } from 'react';
import { X, RotateCcw, CheckCircle2, XCircle, Code, Sparkles } from 'lucide-react';
import { exercisesBySubModule } from '../data/exercises';
import { LoadingScreen } from './LoadingScreen';
import { getSubModuleById, getModuleById } from '../data/curriculum';

interface DuolingoExerciseProps {
  moduleId?: number; // Opcional: para compatibilidad
  exerciseIndex: number;
  onBack: () => void;
  onVerify: (isCorrect: boolean) => void;
  onNextExercise: () => void;
  totalExercises: number;
  currentQuestionOverride?: number; // Opcional: para práctica diaria
  subModuleId?: string; // Requerido: ID del submódulo
  customExercises?: any[]; // Opcional: ejercicios customizados
  skipLoadingScreen?: boolean; // Opcional: para práctica diaria que ya tiene su propia carga
  colorScheme?: 'blue' | 'purple'; // Opcional: esquema de colores (purple para IA)
}

interface IntroNoteContent {
  definition: string;
  practice: string;
  example: string;
}

function getIntroNoteContent(
  subModuleId: string | undefined,
  subModuleTitle: string | undefined,
  subModuleDescription: string | undefined,
  totalExercises: number
): IntroNoteContent {
  const specificNotes: Record<string, IntroNoteContent> = {
    '1.1': {
      definition:
        'Python es un lenguaje de programacion de alto nivel, interpretado y de sintaxis clara. Se utiliza en desarrollo web, ciencia de datos, inteligencia artificial, automatizacion y educacion por su facilidad para aprender y su gran ecosistema de librerias.',
      practice:
        `En esta seccion resolveras ${totalExercises} ejercicios para reconocer que es Python, su origen, sus usos principales y por que es ideal para empezar a programar.`,
      example: '# Introduccion a Python\nprint("Python es claro y poderoso")\nprint("Estoy listo para practicar 1.1")'
    }
  };

  if (subModuleId && specificNotes[subModuleId]) {
    return specificNotes[subModuleId];
  }

  const modulePrefix = subModuleId?.split('.')[0];
  const moduleDefinitions: Record<string, string> = {
    '1': 'En Fundamentos de Python aprenderas la base del lenguaje: sintaxis, variables, tipos de datos y operaciones esenciales para escribir programas simples y correctos.',
    '2': 'En Estructuras de Control aprenderas a tomar decisiones con condiciones para controlar el flujo del programa segun distintas situaciones.',
    '3': 'En Estructuras Repetitivas aprenderas a automatizar tareas usando ciclos para repetir instrucciones de manera controlada.',
    '4': 'En Estructuras de Datos aprenderas a organizar informacion con listas, tuplas, diccionarios y conjuntos segun el tipo de problema.',
    '5': 'En Funciones aprenderas a reutilizar codigo, definir parametros y retornar valores para crear soluciones mas limpias y mantenibles.',
    '6': 'En Manejo de Errores aprenderas a detectar, capturar y manejar excepciones para construir programas mas robustos y seguros.'
  };

  return {
    definition:
      moduleDefinitions[modulePrefix || ''] ||
      (subModuleDescription || 'En esta seccion reforzaras conceptos clave de programacion en Python.'),
    practice: `Trabajaras ${totalExercises} ejercicios para comprender ${subModuleTitle || 'esta seccion'} y aplicarla con confianza en situaciones reales de codigo.`,
    example: subModuleId && subModuleTitle
      ? `# ${subModuleTitle}\nprint("Iniciando practica ${subModuleId}")`
      : 'print("Iniciando practica")'
  };
}

export function DuolingoExercise({ moduleId, exerciseIndex, onBack, onVerify, onNextExercise, totalExercises, currentQuestionOverride, subModuleId, customExercises, skipLoadingScreen = false, colorScheme = 'blue' }: DuolingoExerciseProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntroNote, setShowIntroNote] = useState(true);

  // Definir colores según el esquema
  const colors = {
    blue: {
      progressBar: 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
      button: 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800',
      buttonDisabled: 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
      wordSelected: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/60',
      border: 'border-blue-500',
      hintBg: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
      hintText: 'text-blue-800 dark:text-blue-200',
      optionSelected: 'border-blue-500 bg-blue-50 dark:bg-blue-900/30',
      optionHover: 'hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      optionBadge: 'border-blue-500 bg-blue-500 text-white',
      optionTextSelected: 'text-blue-700 dark:text-blue-300 font-semibold',
    },
    purple: {
      progressBar: 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600',
      button: 'bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800',
      buttonDisabled: 'bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700',
      wordSelected: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-2 border-purple-300 dark:border-purple-700 hover:bg-purple-200 dark:hover:bg-purple-900/60',
      border: 'border-purple-500',
      hintBg: 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800',
      hintText: 'text-purple-800 dark:text-purple-200',
      optionSelected: 'border-purple-500 bg-purple-50 dark:bg-purple-900/30',
      optionHover: 'hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20',
      optionBadge: 'border-purple-500 bg-purple-500 text-white',
      optionTextSelected: 'text-purple-700 dark:text-purple-300 font-semibold',
    }
  };

  const currentColors = colors[colorScheme];
  const module = moduleId ? getModuleById(moduleId) : null;
  const subModule = moduleId && subModuleId ? getSubModuleById(moduleId, subModuleId) : null;
  
  // Datos del ejercicio actual - usar subModuleId si está disponible
  const exercises = customExercises || (subModuleId ? exercisesBySubModule[subModuleId] : getExercisesForModule(moduleId || 1)) || [];
  const currentExercise = exercises?.[exerciseIndex] || exercises?.[0]; // Fallback al primer ejercicio si no existe
  const introNote = getIntroNoteContent(subModuleId, subModule?.title, subModule?.description, totalExercises);
  
  // Estado para opción múltiple
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Mostrar loading solo al entrar al submodulo, no en cada ejercicio.
  useEffect(() => {
    if (skipLoadingScreen) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos de carga

    return () => clearTimeout(timer);
  }, [moduleId, subModuleId, skipLoadingScreen]);

  // Mostrar la nota inicial cada vez que se entra a un submodulo nuevo.
  useEffect(() => {
    setShowIntroNote(true);
  }, [moduleId, subModuleId]);
  
  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">No hay ejercicios disponibles</p>
          <button onClick={onBack} className="mt-4 text-blue-600 hover:underline">
            Volver
          </button>
        </div>
      </div>
    );
  }
  
  const currentQuestion = currentQuestionOverride || (exerciseIndex + 1);

  const [wordButtons, setWordButtons] = useState<WordButton[]>(
    currentExercise?.wordBank?.map((word, idx) => ({
      id: `word-${idx}`,
      text: word,
      position: 'bank'
    })) || []
  );

  const [answerSlots, setAnswerSlots] = useState<(WordButton | null)[]>(
    currentExercise?.correctAnswer ? new Array(currentExercise.correctAnswer.length).fill(null) : []
  );

  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  // Resetear el estado cuando cambia el exerciseIndex (solo usar exerciseIndex como dependencia)
  useEffect(() => {
    const exercise = exercises[exerciseIndex];

    if (!exercise) return;

    // Solo procesar wordBank si el ejercicio lo tiene (no es opción múltiple)
    if (exercise.wordBank && exercise.correctAnswer) {
      // Mezclar aleatoriamente el banco de palabras
      const shuffledBank = [...exercise.wordBank].sort(() => Math.random() - 0.5);

      setWordButtons(
        shuffledBank.map((word, idx) => ({
          id: `word-${idx}`,
          text: word,
          position: 'bank'
        }))
      );
      setAnswerSlots(new Array(exercise.correctAnswer.length).fill(null));
    }

    setShowFeedback(null);
    setIsChecked(false);
    setSelectedOption(null); // Reset opción múltiple
    // No establecer isLoading aquí, lo maneja el primer useEffect
  }, [exerciseIndex, moduleId, subModuleId]); // Solo dependencias primitivas

  const handleWordClick = (word: WordButton) => {
    // No permitir cambios si ya se verificó como correcto
    if (showFeedback === 'correct') return;
    
    if (word.position === 'bank') {
      // Mover palabra del banco a la respuesta
      const emptySlotIndex = answerSlots.findIndex(slot => slot === null);
      if (emptySlotIndex !== -1) {
        const newAnswerSlots = [...answerSlots];
        newAnswerSlots[emptySlotIndex] = { ...word, position: 'answer', index: emptySlotIndex };
        
        setAnswerSlots(newAnswerSlots);
        setWordButtons(wordButtons.map(w => 
          w.id === word.id ? { ...w, position: 'answer', index: emptySlotIndex } : w
        ));
      }
    } else {
      // Devolver palabra de la respuesta al banco
      const newAnswerSlots = [...answerSlots];
      if (word.index !== undefined) {
        newAnswerSlots[word.index] = null;
      }
      
      setAnswerSlots(newAnswerSlots);
      setWordButtons(wordButtons.map(w => 
        w.id === word.id ? { ...w, position: 'bank', index: undefined } : w
      ));
    }
  };

  const handleReset = () => {
    if (currentExercise?.wordBank && currentExercise?.correctAnswer) {
      setWordButtons(
        currentExercise.wordBank.map((word, idx) => ({
          id: `word-${idx}`,
          text: word,
          position: 'bank'
        }))
      );
      setAnswerSlots(new Array(currentExercise.correctAnswer.length).fill(null));
    }
    setShowFeedback(null);
    setIsChecked(false);
  };

  const handleVerify = () => {
    // Para opciones múltiples
    if (currentExercise.type === 'multiple-choice') {
      const isCorrect = selectedOption === currentExercise.correctOption;
      
      setIsChecked(true);
      
      if (isCorrect) {
        setShowFeedback('correct');
        onVerify(true);
        
        // Auto-avanzar después de 1.5 segundos
        setTimeout(() => {
          onNextExercise();
        }, 1500);
      } else {
        setShowFeedback('incorrect');

        // Vibración en móviles
        if (navigator.vibrate) {
          navigator.vibrate(150);
        }

        onVerify(false);
      }
      return;
    }
    
    // Para completar palabras
    const userAnswer = answerSlots.map(slot => slot?.text || '').join(' ');
    const isCorrect = currentExercise?.correctAnswer ? currentExercise.correctAnswer.join(' ') === userAnswer : false;

    setIsChecked(true);

    if (isCorrect) {
      setShowFeedback('correct');
      onVerify(true);
      
      // Auto-avanzar después de 1.5 segundos
      setTimeout(() => {
        onNextExercise();
      }, 1500);
    } else {
      setShowFeedback('incorrect');

      // Vibración en móviles
      if (navigator.vibrate) {
        navigator.vibrate(150);
      }

      onVerify(false);
    }
  };

  const handleContinue = () => {
    onNextExercise();
  };

  const isAnswerComplete = currentExercise.type === 'multiple-choice' ? selectedOption !== null : answerSlots.every(slot => slot !== null);

  // Pantalla de carga
  if (isLoading) {
    const loadingMessages = [
      'Cargando ejercicio...',
      'Preparando contenido...',
      'Organizando preguntas...',
      'Configurando respuestas...',
      'Ajustando dificultad...',
      'Todo listo...'
    ];

    return (
      <LoadingScreen
        messages={loadingMessages}
        icon={<Code className="w-8 h-8 text-white" />}
        moduleTitle={module?.title}
        subModuleTitle={subModule?.title}
        onBack={onBack}
      />
    );
  }

  if (showIntroNote) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
          <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
            <button
              onClick={onBack}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            <h2 className="text-gray-900 dark:text-gray-100 flex-1 text-center">Antes de empezar</h2>

            <span className="text-sm text-gray-600 dark:text-gray-400 w-10 text-right">0/{totalExercises}</span>
          </div>
        </div>

        <div className="fixed top-16 left-1/2 -translate-x-1/2 max-w-md w-full px-5 py-6 z-10">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className={`${currentColors.progressBar} h-full rounded-full transition-all`} style={{ width: '0%' }} />
          </div>
        </div>

        <div className="flex-1 flex flex-col max-w-md mx-auto px-5 py-8 w-full pt-32">
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">{module?.title}</p>
          <h2 className="text-gray-900 dark:text-gray-100 mb-3">{subModule?.id} {subModule?.title}</h2>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p className="text-gray-900 dark:text-gray-100 font-semibold mb-1">Definicion</p>
              <p className="text-gray-600 dark:text-gray-300">
                  {introNote.definition}
              </p>
            </div>

            <div>
              <p className="text-gray-900 dark:text-gray-100 font-semibold mb-1">Que practicaras</p>
              <p className="text-gray-600 dark:text-gray-300">
                  {introNote.practice}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="text-blue-900 dark:text-blue-200 font-semibold mb-2">Ejemplo rapido</p>
                <pre className="text-blue-900 dark:text-blue-100 text-xs overflow-x-auto"><code>{introNote.example}</code></pre>
            </div>
          </div>

          <div className="mt-auto pt-4">
            <button
              onClick={() => setShowIntroNote(false)}
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md font-medium"
            >
              Comenzar ejercicios
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
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
            {currentExercise.title}
          </h2>

          <span className="text-sm text-gray-600 dark:text-gray-400 w-10 text-right">{currentQuestion}/{totalExercises}</span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 max-w-md w-full px-5 py-6 z-10">
        <div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className={`${currentColors.progressBar} h-full rounded-full transition-all`}
              style={{ width: `${(currentQuestion / totalExercises) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Ejercicio */}
      <div className="flex-1 flex flex-col max-w-md mx-auto px-5 py-8 w-full pt-32">
        <h1 className="text-gray-900 dark:text-gray-100 mb-4">
          {currentExercise.question}
        </h1>
        
        {currentExercise.hint && (
          <div className={`mb-6 p-3 ${currentColors.hintBg} border rounded-xl`}>
            <p className={`text-sm ${currentColors.hintText}`}>
              <strong>Pista:</strong> {currentExercise.hint}
            </p>
          </div>
        )}

        {/* Renderizado condicional según tipo de ejercicio */}
        {currentExercise.type === 'multiple-choice' ? (
          /* Opciones múltiples */
          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">Selecciona la respuesta correcta:</p>
            <div className="space-y-3">
              {currentExercise.options?.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentExercise.correctOption;
                const showResult = showFeedback !== null;
                const optionLabel = String.fromCharCode(65 + index); // A, B, C, D...
                
                return (
                  <button
                    key={index}
                    onClick={() => !showResult && setSelectedOption(option)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all transform ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                          : isSelected
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                        : isSelected
                        ? `${currentColors.optionSelected} scale-[1.02]`
                        : `border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 ${currentColors.optionHover}`
                    } ${!showResult && 'hover:scale-[1.02]'} shadow-sm`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-semibold text-sm ${
                        showResult
                          ? isCorrect
                            ? 'border-green-500 bg-green-500 text-white'
                            : isSelected
                            ? 'border-red-500 bg-red-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                          : isSelected
                          ? currentColors.optionBadge
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                      }`}>
                        {showResult && isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        ) : showResult && !isCorrect && isSelected ? (
                          <XCircle className="w-5 h-5 text-white" />
                        ) : (
                          optionLabel
                        )}
                      </div>
                      <span className={`flex-1 ${
                        showResult
                          ? isCorrect
                            ? 'text-green-700 dark:text-green-300 font-semibold'
                            : isSelected
                            ? 'text-red-700 dark:text-red-300'
                            : 'text-gray-700 dark:text-gray-300'
                          : isSelected
                          ? currentColors.optionTextSelected
                          : 'text-gray-900 dark:text-gray-100'
                      }`}>
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Área de completar palabras */
          <>
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">Tu respuesta:</p>
              <div className={`min-h-[80px] bg-white dark:bg-gray-800 border-2 ${
                showFeedback === 'correct' ? 'border-green-500' : 
                showFeedback === 'incorrect' ? 'border-red-500' : 
                'border-dashed border-gray-300 dark:border-gray-600'
              } rounded-2xl p-4 flex flex-wrap gap-2 items-start transition-colors`}>
                {answerSlots.map((slot, index) => (
                  <div key={index}>
                    {slot ? (
                      <button
                        onClick={() => handleWordClick(slot)}
                        disabled={showFeedback === 'correct'}
                        className={`px-4 py-3 rounded-xl transition-all transform hover:scale-105 shadow-md font-mono ${
                          showFeedback === 'correct'
                            ? 'bg-green-500 dark:bg-green-600 text-white cursor-default'
                            : currentColors.wordSelected
                        }`}
                      >
                        {slot.text}
                      </button>
                    ) : (
                      <div className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl min-w-[60px] h-[48px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Banco de palabras */}
            {showFeedback !== 'correct' && (
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">Selecciona las palabras:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {wordButtons.filter(w => w.position === 'bank').map(word => (
                    <button
                      key={word.id}
                      onClick={() => handleWordClick(word)}
                      className={`px-6 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl ${
                        colorScheme === 'purple'
                          ? 'hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                          : 'hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                      } transition-all transform hover:scale-105 shadow-sm font-mono`}
                    >
                      {word.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="mt-auto">
          {/* Feedback inline */}
          {showFeedback && (
            <div
              className={`
                mb-4 p-4 rounded-xl flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300
                ${showFeedback === 'correct' 
                  ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500' 
                  : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'}
              `}
            >
              {showFeedback === 'correct' ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${
                  showFeedback === 'correct' 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {showFeedback === 'correct' ? '¡Excelente!' : '¡Ups! Incorrecto'}
                </p>
                <p className={`text-sm ${
                  showFeedback === 'correct' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {showFeedback === 'correct' 
                    ? 'Has formado la sentencia correctamente. ¡Sigue así!' 
                    : 'Esa no es la respuesta correcta. Intenta de nuevo o usa el botón Reintentar.'}
                </p>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="flex gap-3">
            {showFeedback === 'incorrect' && (
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-4 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <RotateCcw className="w-5 h-5" />
                Reintentar
              </button>
            )}
            {showFeedback === 'correct' ? (
              <button 
                onClick={handleContinue}
                className="flex-1 bg-green-600 dark:bg-green-500 text-white py-4 rounded-xl hover:bg-green-700 dark:hover:bg-green-600 transition-colors shadow-md font-medium"
              >
                Continuar
              </button>
            ) : (
              <button
                onClick={handleVerify}
                className={`py-4 rounded-xl transition-colors shadow-md font-medium text-white flex-1 ${
                  !isAnswerComplete ? `${currentColors.buttonDisabled} opacity-50 cursor-not-allowed` : currentColors.button
                }`}
                disabled={!isAnswerComplete}
              >
                Verificar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Datos de ejercicios tipo Duolingo
function getExercisesForModule(moduleId: number, subModuleId?: string) {
  const exercisesByModule: { [key: number]: any[] } = {
    1: [
      {
        title: 'Declaración de Variables',
        question: '¿Cómo declaras una variable llamada "edad" que almacene el número 25?',
        hint: 'En Python usamos el signo = para asignar valores a variables',
        wordBank: ['edad', '=', '25', 'nombre', '30', 'int', 'var'],
        correctAnswer: ['edad', '=', '25'],
      },
      {
        title: 'Variables de Texto',
        question: '¿Cómo creas una variable "nombre" que contenga el texto "Juan"?',
        hint: 'En Python, los textos (strings) siempre van entre comillas',
        wordBank: ['nombre', '=', '"Juan"', 'edad', '"Maria"', '+', 'str'],
        correctAnswer: ['nombre', '=', '"Juan"'],
      },
      {
        title: 'Números Decimales',
        question: '¿Cómo almacenas el número decimal 1.75 en una variable llamada "altura"?',
        hint: 'Los números decimales en Python usan punto (.) en lugar de coma',
        wordBank: ['altura', '=', '1.75', 'peso', '1.80', '-', 'float'],
        correctAnswer: ['altura', '=', '1.75'],
      },
      {
        title: 'Valores Booleanos',
        question: '¿Cómo creas una variable "activo" con el valor verdadero (True)?',
        hint: 'Los valores booleanos en Python empiezan con mayúscula: True o False',
        wordBank: ['activo', '=', 'True', 'False', 'true', 'false', 'bool'],
        correctAnswer: ['activo', '=', 'True'],
      },
    ],
    2: [
      {
        title: 'Suma en Python',
        question: '¿Cómo sumarías 5 + 3 y guardarías el resultado en "resultado"?',
        hint: 'El operador + se usa para sumar números en Python',
        wordBank: ['resultado', '=', '5', '+', '3', '-', '*', '8'],
        correctAnswer: ['resultado', '=', '5', '+', '3'],
      },
      {
        title: 'Resta en Python',
        question: '¿Cómo restarías 4 de 10 y almacenarías el resultado en "diferencia"?',
        hint: 'El operador - se usa para restar en Python',
        wordBank: ['diferencia', '=', '10', '-', '4', '+', '6', '14'],
        correctAnswer: ['diferencia', '=', '10', '-', '4'],
      },
      {
        title: 'Multiplicación',
        question: '¿Cómo multiplicarías 6 por 7 y guardarías el resultado en "producto"?',
        hint: 'En Python, el asterisco * se usa para multiplicar',
        wordBank: ['producto', '=', '6', '*', '7', '/', '8', '42'],
        correctAnswer: ['producto', '=', '6', '*', '7'],
      },
      {
        title: 'División',
        question: '¿Cómo dividirías 20 entre 4 y almacenarías el resultado en "cociente"?',
        hint: 'La barra diagonal / se usa para dividir en Python',
        wordBank: ['cociente', '=', '20', '/', '4', '*', '5', '24'],
        correctAnswer: ['cociente', '=', '20', '/', '4'],
      },
    ],
    3: [
      {
        title: 'Leer Entrada del Usuario',
        question: '¿Cómo le pides al usuario que escriba su nombre y lo guardas en una variable?',
        hint: 'La función input() lee texto que el usuario escribe',
        wordBank: ['nombre', '=', 'input', '(', ')', 'print', 'str', 'read'],
        correctAnswer: ['nombre', '=', 'input', '(', ')'],
      },
      {
        title: 'Mostrar Mensajes',
        question: '¿Cómo muestras el mensaje "Hola" en la pantalla?',
        hint: 'La función print() muestra información en la pantalla',
        wordBank: ['print', '(', '"Hola"', ')', 'input', '"Adios"', 'show', 'display'],
        correctAnswer: ['print', '(', '"Hola"', ')'],
      },
      {
        title: 'Leer Números',
        question: '¿Cómo lees la edad del usuario y la conviertes a número entero?',
        hint: 'Usa int() para convertir texto a número entero',
        wordBank: ['edad', '=', 'int', '(', 'input', '(', ')', ')', 'str', 'float'],
        correctAnswer: ['edad', '=', 'int', '(', 'input', '(', ')', ')'],
      },
    ],
    4: [
      {
        title: 'Comparación Mayor Que',
        question: '¿Cómo verificas si 5 es mayor que 3 y guardas la respuesta?',
        hint: 'El símbolo > compara si un número es mayor que otro',
        wordBank: ['resultado', '=', '5', '>', '3', '<', '==', '!='],
        correctAnswer: ['resultado', '=', '5', '>', '3'],
      },
      {
        title: 'Comparación de Igualdad',
        question: '¿Cómo compruebas si 10 es igual a 10?',
        hint: 'El doble igual == se usa para comparar si dos valores son iguales',
        wordBank: ['igual', '=', '10', '==', '10', '>', '<', '='],
        correctAnswer: ['igual', '=', '10', '==', '10'],
      },
      {
        title: 'Operador Lógico AND',
        question: '¿Cómo combinas True y False con el operador AND (y)?',
        hint: 'El operador "and" devuelve True solo si ambas condiciones son verdaderas',
        wordBank: ['resultado', '=', 'True', 'and', 'False', 'or', 'not', '=='],
        correctAnswer: ['resultado', '=', 'True', 'and', 'False'],
      },
    ],
    5: [
      {
        title: 'Condición Simple',
        question: '¿Cómo escribes una condición que se ejecute si edad es mayor que 18?',
        hint: 'La estructura if necesita dos puntos (:) al final',
        wordBank: ['if', 'edad', '>', '18', ':', 'else', '==', 'then'],
        correctAnswer: ['if', 'edad', '>', '18', ':'],
      },
      {
        title: 'Verificar Puntuación Perfecta',
        question: '¿Cómo verificas si la nota es exactamente igual a 100?',
        hint: 'Usa el doble igual (==) para comparar valores exactos',
        wordBank: ['if', 'nota', '==', '100', ':', '=', '>', '<'],
        correctAnswer: ['if', 'nota', '==', '100', ':'],
      },
      {
        title: 'Condición Compuesta',
        question: '¿Cómo verificas si la edad está entre 18 y 65 años (adulto en edad laboral)?',
        hint: 'Usa "and" para combinar dos condiciones en una sola línea',
        wordBank: ['if', 'edad', '>=', '18', 'and', 'edad', '<', '65', ':', 'or', 'not'],
        correctAnswer: ['if', 'edad', '>=', '18', 'and', 'edad', '<', '65', ':'],
      },
    ],
    6: [
      {
        title: 'Alternativa con else',
        question: '¿Cómo escribes la parte del código que se ejecuta cuando el if es falso?',
        hint: 'La palabra clave "else" indica qué hacer cuando la condición no se cumple',
        wordBank: ['else', ':', 'elif', 'if', 'then', 'otherwise'],
        correctAnswer: ['else', ':'],
      },
      {
        title: 'Verificar Aprobado',
        question: '¿Cómo verificas si un estudiante aprobó (nota mayor o igual a 70)?',
        hint: 'El operador >= significa "mayor o igual que"',
        wordBank: ['if', 'nota', '>=', '70', ':', '>', '==', '<'],
        correctAnswer: ['if', 'nota', '>=', '70', ':'],
      },
    ],
    7: [
      {
        title: 'Condición Adicional con elif',
        question: '¿Cómo agregas una condición intermedia que verifique si nota >= 80?',
        hint: 'La palabra "elif" permite verificar otra condición si la primera fue falsa',
        wordBank: ['elif', 'nota', '>=', '80', ':', 'else', 'if', 'elseif'],
        correctAnswer: ['elif', 'nota', '>=', '80', ':'],
      },
      {
        title: 'Múltiples Condiciones',
        question: '¿Cómo agregas otra condición elif para verificar si nota >= 70?',
        hint: 'Puedes tener varios elif en la misma estructura de decisión',
        wordBank: ['elif', 'nota', '>=', '70', ':', 'else', 'if', '=='],
        correctAnswer: ['elif', 'nota', '>=', '70', ':'],
      },
      {
        title: 'elif con Diferente Variable',
        question: '¿Cómo verificas con elif si una persona es menor de edad (edad < 18)?',
        hint: 'elif funciona con cualquier variable y condición',
        wordBank: ['elif', 'edad', '<', '18', ':', '>', '==', '<='],
        correctAnswer: ['elif', 'edad', '<', '18', ':'],
      },
    ],
    8: [
      {
        title: 'Iniciar Estructura match',
        question: '¿Cómo inicias una estructura match para evaluar la variable "dia"?',
        hint: 'La estructura match es similar al switch de C (Python 3.10+)',
        wordBank: ['match', 'dia', ':', 'case', 'switch', 'if', 'select'],
        correctAnswer: ['match', 'dia', ':'],
      },
      {
        title: 'Primer Caso del match',
        question: '¿Cómo defines el caso cuando dia es igual a 1 (Lunes)?',
        hint: 'Cada opción dentro de match usa la palabra "case" seguida del valor',
        wordBank: ['case', '1', ':', 'match', '2', 'default', 'if'],
        correctAnswer: ['case', '1', ':'],
      },
      {
        title: 'Caso por Defecto',
        question: '¿Cómo defines el caso que se ejecuta cuando ningún otro coincide?',
        hint: 'El guión bajo (_) es el comodín que captura todos los demás casos',
        wordBank: ['case', '_', ':', 'default', 'else', 'match', 'other'],
        correctAnswer: ['case', '_', ':'],
      },
    ],
  };

  return exercisesByModule[moduleId] || [];
}