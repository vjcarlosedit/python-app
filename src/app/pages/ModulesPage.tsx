import { LearningPath } from '../components/LearningPath';
import { TopBar } from '../components/TopBar';
import { useApp } from '../contexts/AppContext';

export function ModulesPage() {
  const { completedSubModules } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar />
      <main className="max-w-md mx-auto pb-20 pt-16">
        <LearningPath completedSubModules={completedSubModules} />
      </main>
    </div>
  );
}