import { ArrowLeft, Copy, Lightbulb } from "lucide-react";
import { getModuleData } from "../data/modulesData";

interface LessonContentProps {
  moduleId: number;
  onBack: () => void;
  onContinue: () => void;
}

export function LessonContent({
  moduleId,
  onBack,
  onContinue,
}: LessonContentProps) {
  const moduleData = getModuleData(moduleId);
  
  if (!moduleData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Módulo no encontrado</p>
      </div>
    );
  }
  
  const { lesson } = moduleData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="text-center text-gray-900 dark:text-gray-100 flex-1">
            {lesson.title}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-md mx-auto px-5 py-8 space-y-6">
        {/* Título de la lección */}
        <h2 className="text-gray-900 dark:text-gray-100">{lesson.subtitle}</h2>

        {/* Texto explicativo */}
        <div className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
          {lesson.content.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Código de ejemplo */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Ejemplo en Python
            </span>
            <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
              <Copy className="w-4 h-4" />
              <span>Copiar</span>
            </button>
          </div>
          <pre className="p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-auto">
            <code>{lesson.content.codeExample.code}</code>
          </pre>
        </div>

        {/* Caja de información adicional */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-blue-900 dark:text-blue-300 mb-2">
                {lesson.content.infoBox.title}
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                {lesson.content.infoBox.content}
              </p>
            </div>
          </div>
        </div>

        {/* Botón Continuar */}
        <button
          onClick={onContinue}
          className="w-full bg-blue-600 dark:bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}