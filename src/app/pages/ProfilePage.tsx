import { useUser } from '../contexts/UserContext';
import { ChevronLeft, Trophy, Star, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  const { userData } = useUser();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Perfil</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-8 pt-20">
        {/* Avatar y nombre */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-6xl text-white font-bold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{userData.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{userData.career}</p>
          <Link to="/profile/edit-profile" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Editar Perfil
          </Link>
        </div>

        {/* Estadísticas */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Estadísticas</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Puntos totales</p>
                <p className="font-bold text-gray-800 dark:text-white">{userData.stats.totalPoints}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Lecciones completadas</p>
                <p className="font-bold text-gray-800 dark:text-white">{userData.stats.lessonsCompleted}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Racha actual</p>
                <p className="font-bold text-gray-800 dark:text-white">{userData.stats.currentStreak} días</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Racha más larga</p>
                <p className="font-bold text-gray-800 dark:text-white">{userData.stats.longestStreak} días</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logros */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Logros</h3>
          <div className="space-y-4">
            {userData.achievements.map((ach, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xl">{ach.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{ach.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
