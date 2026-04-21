import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoadingScreenProps {
  messages: string[];
  icon?: React.ReactNode;
  moduleTitle?: string;
  subModuleTitle?: string;
  onBack?: () => void;
  colorScheme?: 'blue' | 'purple'; // blue por defecto, purple para práctica IA
}

export function LoadingScreen({ messages, icon, moduleTitle, subModuleTitle, onBack, colorScheme = 'blue' }: LoadingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Cambiar mensaje aleatoriamente cada 600ms
  useEffect(() => {
    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessageIndex(randomIndex);
    }, 600);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  // Colores según el esquema
  const colors = {
    blue: {
      circle1: 'border-blue-200 dark:border-blue-800',
      circle2: 'border-blue-300 dark:border-blue-700',
      gradient: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
      dots: 'border-blue-500 dark:border-blue-400',
    },
    purple: {
      circle1: 'border-purple-200 dark:border-purple-800',
      circle2: 'border-pink-300 dark:border-pink-700',
      gradient: 'from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600',
      dots: 'border-purple-500 dark:border-pink-400',
    }
  };

  const currentColors = colors[colorScheme];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header/Topbar */}
      {(moduleTitle || subModuleTitle) && (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
          <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
            {onBack ? (
              <button
                onClick={onBack}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            ) : (
              <div className="w-10"></div>
            )}

            <div className="text-center flex-1">
              {subModuleTitle && (
                <h1 className="text-gray-900 dark:text-gray-100">
                  {subModuleTitle}
                </h1>
              )}
              {moduleTitle && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                  {moduleTitle}
                </p>
              )}
            </div>

            <div className="w-10"></div>
          </div>
        </div>
      )}

      {/* Contenido de carga */}
      <div className="flex items-center justify-center px-5" style={{ minHeight: (moduleTitle || subModuleTitle) ? 'calc(100vh - 120px)' : '100vh' }}>
        <div className="text-center w-full max-w-sm mx-auto">
        {/* Icono con animación sutil */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Círculos de fondo animados */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-24 h-24 rounded-full border-2 ${currentColors.circle1} opacity-20`}
                style={{
                  animation: 'scaleBreath 2s ease-in-out infinite'
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-16 h-16 rounded-full border-2 ${currentColors.circle2} opacity-30`}
                style={{
                  animation: 'scaleBreath 2s ease-in-out infinite 0.5s'
                }}
              />
            </div>

            {/* Icono central */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${currentColors.gradient} rounded-xl flex items-center justify-center shadow-xl`}
                style={{
                  animation: 'floatSoft 3s ease-in-out infinite'
                }}
              >
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Mensajes dinámicos */}
        <div className="mb-6 min-h-[52px] flex items-center justify-center px-3">
          <p
            key={currentMessageIndex}
            className="text-gray-900 dark:text-white font-semibold leading-snug"
            style={{
              animation: 'fadeSlide 0.6s ease-in-out'
            }}
          >
            {messages[currentMessageIndex]}
          </p>
        </div>

        {/* Puntos animados que saltan */}
        <div className="flex items-center justify-center gap-2">
          <div
            className={`w-3 h-3 border-2 ${currentColors.dots} rounded-full`}
            style={{
              animation: 'bounce 1.4s infinite ease-in-out'
            }}
          />
          <div
            className={`w-3 h-3 border-2 ${currentColors.dots} rounded-full`}
            style={{
              animation: 'bounce 1.4s infinite ease-in-out 0.2s'
            }}
          />
          <div
            className={`w-3 h-3 border-2 ${currentColors.dots} rounded-full`}
            style={{
              animation: 'bounce 1.4s infinite ease-in-out 0.4s'
            }}
          />
        </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleBreath {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.1;
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}
