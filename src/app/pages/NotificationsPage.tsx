import { NotificationsView } from '../components/NotificationsView';
import { useNavigate } from 'react-router';

export function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-md mx-auto pb-20">
        <NotificationsView onBack={() => navigate('/')} />
      </main>
    </div>
  );
}
