import { LucideIcon } from 'lucide-react';

type ModuleStatus = 'completed' | 'available' | 'locked';

interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  status: ModuleStatus;
  bgColor: string;
  isQuiz?: boolean;
  isComingSoon?: boolean;
}

interface ModuleNodeProps {
  module: Module;
  onClick: () => void;
}

export function ModuleNode({ module, onClick }: ModuleNodeProps) {
  const Icon = module.icon;

  // Solo permitir clic en módulos disponibles, no en completados ni bloqueados
  const isClickable = module.status === 'available' && !module.isComingSoon;

  return (
    <div className="flex flex-col items-center">
      {/* Nodo circular */}
      <button 
        onClick={onClick}
        disabled={!isClickable}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${module.bgColor} ${
          isClickable ? 'cursor-pointer hover:scale-105 shadow-lg' : 'opacity-60 cursor-not-allowed'
        } ${module.status === 'available' && !module.isQuiz && !module.isComingSoon ? 'ring-4 ring-blue-300 dark:ring-blue-600 ring-opacity-50 animate-pulse' : ''} ${
          module.isComingSoon ? 'ring-4 ring-purple-300 dark:ring-purple-600 ring-opacity-50' : ''
        }`}
      >
        <Icon className="w-9 h-9 text-white" strokeWidth={2.5} />
      </button>

      {/* Título y subtítulo */}
      <div className="mt-3 text-center max-w-[180px]">
        <p className={`text-sm font-medium ${
          module.isComingSoon ? 'text-purple-700 dark:text-purple-400' :
          module.status === 'locked' ? 'text-gray-500 dark:text-gray-600' : 'text-gray-800 dark:text-gray-200'
        }`}>
          {module.title}
        </p>
        <p className={`text-xs mt-0.5 ${
          module.isComingSoon ? 'text-purple-600 dark:text-purple-400 font-medium' :
          module.status === 'completed' ? 'text-green-600 dark:text-green-400 font-medium' : 
          module.status === 'available' ? 'text-blue-600 dark:text-blue-400 font-medium' : 
          'text-gray-400 dark:text-gray-600'
        }`}>
          {module.subtitle}
        </p>
      </div>
    </div>
  );
}