import { ModuleNode } from './ModuleNode';
import { Play, Lock, Check, BookOpen, Code, Repeat, Database, Zap, AlertCircle, Boxes, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';

interface LearningPathProps {
  completedSubModules: string[];
}

export function LearningPath({ completedSubModules }: LearningPathProps) {
  const navigate = useNavigate();

  // Función para determinar el estado de cada submódulo
  const getSubModuleStatus = (moduleId: number, subModuleIndex: number, subModuleId: string) => {
    if (completedSubModules.includes(subModuleId)) {
      return 'completed';
    }
    
    // El primer submódulo de CADA sección siempre está disponible para practicar
    if (subModuleIndex === 0) {
      return 'available';
    }
    
    // Para los demás submódulos, verificar que el anterior en la misma sección esté completado
    const currentModule = curriculum[moduleId - 1];
    const previousSubModuleId = currentModule.subModules[subModuleIndex - 1].id;
    
    if (completedSubModules.includes(previousSubModuleId)) {
      return 'available';
    }
    
    return 'locked';
  };

  const handleSubModuleClick = (moduleId: number, subModuleId: string, status: string, isComingSoon: boolean) => {
    if (isComingSoon) return;

    // Solo permitir navegar a submódulos disponibles, no a los completados
    if (status === 'available') {
      navigate(`/leccion/${moduleId}/${subModuleId}`);
    }
  };

  // Iconos para cada módulo
  const moduleIcons = [BookOpen, Code, Repeat, Database, Zap, AlertCircle, Boxes];

  // Calcular total de submódulos (sin contar POO)
  const totalSubModules = curriculum.slice(0, 6).reduce((total, module) => total + module.subModules.length, 0);
  const completedTotal = completedSubModules.length;

  return (
    <div className="py-6 px-5 pb-24">
      {/* Barra de progreso general */}
      <div className="mb-8 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold">Tu Progreso General</h3>
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">{Math.round((completedTotal / totalSubModules) * 100)}%</span>
        </div>

        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 h-full rounded-lg transition-all duration-500"
              style={{ width: `${(completedTotal / totalSubModules) * 100}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          {completedTotal === 0 && "¡Comienza tu aventura de aprendizaje!"}
          {completedTotal > 0 && completedTotal < totalSubModules && "¡Sigue así, vas muy bien!"}
          {completedTotal === totalSubModules && "¡Felicidades! Has completado todas las lecciones"}
        </p>
      </div>

      {/* Camino de aprendizaje con secciones */}
      <div className="space-y-12">
        {/* Práctica Diaria con IA - Círculo especial */}
        <div className="space-y-8 pl-4 mb-12">
          <ModuleNode
            module={{
              id: 'practica-ia',
              title: 'Práctica Diaria con IA',
              subtitle: 'Genera ejercicios personalizados',
              icon: Sparkles,
              status: 'available',
              bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
              isQuiz: false,
              isComingSoon: false,
            }}
            onClick={() => navigate('/practica-diaria')}
          />
        </div>

        {curriculum.map((module, moduleIndex) => {
          const isComingSoon = module.id === 7; // POO
          const ModuleIcon = moduleIcons[moduleIndex] || BookOpen;
          
          return (
            <div key={module.id} className="space-y-6">
              {/* Header de Sección - Sticky */}
              <div className="sticky top-[64px] z-[5] bg-gray-50 dark:bg-gray-900 px-4 py-3 -mx-5 px-5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <ModuleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                      {module.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {module.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submódulos como nodos circulares */}
              <div className="space-y-8 pl-4">
                {module.subModules.map((subModule, subModuleIndex) => {
                  const status = isComingSoon ? 'locked' : getSubModuleStatus(module.id, subModuleIndex, subModule.id);
                  
                  const nodeData = {
                    id: subModule.id,
                    title: `${subModule.id} ${subModule.title}`,
                    subtitle: isComingSoon ? 'Próximamente' :
                              status === 'completed' ? '✓ Completado' :
                              status === 'available' ? `${subModule.exercises} ejercicios` :
                              'Bloqueado',
                    icon: status === 'completed' ? Check :
                          status === 'available' ? Play :
                          Lock,
                    status,
                    bgColor: status === 'completed' ? 'bg-green-500' :
                             status === 'available' ? 'bg-blue-600' :
                             'bg-gray-400',
                    isQuiz: false,
                    isComingSoon,
                  };

                  return (
                    <ModuleNode
                      key={subModule.id}
                      module={nodeData}
                      onClick={() => handleSubModuleClick(module.id, subModule.id, status, isComingSoon)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}