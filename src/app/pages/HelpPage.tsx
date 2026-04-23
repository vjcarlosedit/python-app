import { HelpCenterView } from '../components/HelpCenterView';
import { useNavigate } from 'react-router-dom';

export function HelpPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-md mx-auto pb-20">
        <HelpCenterView onBack={() => navigate('/')} />
      </main>
    </div>
  );
}
