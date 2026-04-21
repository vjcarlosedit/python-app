import { Bell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotificationsSettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <button 
        onClick={() => navigate('/notifications')}
        className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center relative">
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>
          <span className="text-gray-800 dark:text-gray-200">Notificaciones</span>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      </button>
    </div>
  );
}
