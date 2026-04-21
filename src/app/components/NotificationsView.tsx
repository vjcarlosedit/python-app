import { ArrowLeft, Bell, Award, Flame, Trophy, BookOpen, Check } from 'lucide-react';

interface NotificationsViewProps {
  onBack: () => void;
}

interface Notification {
  id: number;
  type: 'achievement' | 'streak' | 'quiz' | 'general';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: any;
}

export function NotificationsView({ onBack }: NotificationsViewProps) {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'achievement',
      title: '¡Nueva insignia desbloqueada!',
      message: 'Has ganado la insignia "Primer Algoritmo" por completar tu primer ejercicio.',
      time: 'Hace 5 minutos',
      read: false,
      icon: Award,
    },
    {
      id: 2,
      type: 'streak',
      title: '🔥 ¡Racha activa!',
      message: 'Llevas 7 días consecutivos aprendiendo. ¡No rompas la racha!',
      time: 'Hace 2 horas',
      read: false,
      icon: Flame,
    },
    {
      id: 3,
      type: 'quiz',
      title: 'Quiz disponible',
      message: 'El Quiz 1 está disponible. ¡Demuestra lo que has aprendido!',
      time: 'Hace 1 día',
      read: false,
      icon: Trophy,
    },
    {
      id: 4,
      type: 'general',
      title: 'Nuevo módulo desbloqueado',
      message: 'Has desbloqueado el Módulo 2: Operadores. ¡Continúa aprendiendo!',
      time: 'Hace 2 días',
      read: true,
      icon: BookOpen,
    },
    {
      id: 5,
      type: 'general',
      title: 'Bienvenido a Programación I',
      message: '¡Hola! Estamos emocionados de que inicies tu camino en el mundo de la programación.',
      time: 'Hace 1 semana',
      read: true,
      icon: Bell,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <h2 className="text-gray-900 dark:text-gray-100">Notificaciones</h2>
            <div className="w-10" /> {/* Spacer */}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-6">
        {/* Header de notificaciones */}
        {unreadCount > 0 && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tienes {unreadCount} notificación{unreadCount > 1 ? 'es' : ''} sin leer
            </p>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Marcar todas como leídas
            </button>
          </div>
        )}

        {/* Lista de notificaciones */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-white dark:bg-gray-800 rounded-xl p-4 border transition-all hover:shadow-md cursor-pointer ${
                  notification.read 
                    ? 'border-gray-200 dark:border-gray-700' 
                    : 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                }`}
              >
                <div className="flex gap-3">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    notification.type === 'achievement' ? 'bg-yellow-100 dark:bg-yellow-900' :
                    notification.type === 'streak' ? 'bg-orange-100 dark:bg-orange-900' :
                    notification.type === 'quiz' ? 'bg-purple-100 dark:bg-purple-900' :
                    'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      notification.type === 'achievement' ? 'text-yellow-600 dark:text-yellow-400' :
                      notification.type === 'streak' ? 'text-orange-600 dark:text-orange-400' :
                      notification.type === 'quiz' ? 'text-purple-600 dark:text-purple-400' :
                      'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-gray-900 dark:text-gray-100 text-sm font-semibold">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Estado vacío si no hay notificaciones */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 dark:text-gray-100 mb-2">No hay notificaciones</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Te avisaremos cuando haya algo nuevo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
