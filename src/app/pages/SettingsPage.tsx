import { NavLink } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { ChevronRight, LogOut, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { LogoutModal } from '../components/LogoutModal';
import { AppearanceSettingsPage } from './settings/AppearanceSettingsPage';
import { AccountSettingsPage } from './settings/AccountSettingsPage';
import { NotificationsSettingsPage } from './settings/NotificationsSettingsPage';

export function SettingsPage() {
  const { onLogout } = useApp();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const navLinkClass =
    'w-full flex items-center justify-between px-4 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors">
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-center">
          <h1 className="text-center text-blue-700 dark:text-blue-300">Configuración</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-8 space-y-6 pt-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
            <h3 className="text-gray-700 dark:text-gray-300 text-sm">Apariencia</h3>
          </div>
          <AppearanceSettingsPage />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
            <h3 className="text-gray-700 dark:text-gray-300 text-sm">Cuenta</h3>
          </div>
          <AccountSettingsPage />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
            <h3 className="text-gray-700 dark:text-gray-300 text-sm">Notificaciones</h3>
          </div>
          <NotificationsSettingsPage />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <NavLink to="/help" className={navLinkClass}>
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-800 dark:text-gray-200">Centro de Ayuda</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </NavLink>
            <button 
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="text-gray-800 dark:text-gray-200">Cerrar Sesión</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <LogoutModal 
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}
