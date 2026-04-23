import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determinar la tab activa basada en la ruta
  const getActiveTab = (): "modules" | "profile" | "settings" => {
    if (location.pathname === '/profile') return 'profile';
    if (location.pathname === '/settings') return 'settings';
    return 'modules';
  };

  const handleTabChange = (tab: "modules" | "profile" | "settings") => {
    if (tab === 'modules') navigate('/');
    if (tab === 'profile') navigate('/profile');
    if (tab === 'settings') navigate('/settings');
  };

  // Ocultar BottomNav en páginas de ayuda, notificaciones, lecciones y práctica diaria
  const shouldShowBottomNav = !['/notifications', '/help'].includes(location.pathname) 
    && !location.pathname.startsWith('/leccion/')
    && !location.pathname.startsWith('/practica-diaria');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Outlet />
      {shouldShowBottomNav && (
        <BottomNav
          activeTab={getActiveTab()}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  );
}