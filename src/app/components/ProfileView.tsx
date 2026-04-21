import { Settings, Flame, Code, Infinity, Cpu, Variable, GitBranch, Sigma, LogOut, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { EditProfileModal } from './EditProfileModal';

export function ProfileView() {
  const { userData, updateUserData } = useUser();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSaveProfile = (name: string, email: string, password: string) => {
    updateUserData({ name, email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-center">
          <h1 className="text-center text-blue-700 dark:text-blue-300">Mi Perfil</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-8 space-y-6 pt-20">
        {/* Avatar y nombre */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
            <span className="text-6xl text-white font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <h2 className="text-gray-900 dark:text-gray-100 mb-1">{userData.name}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            {userData.email}
          </p>
          <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">
            {userData.career}
          </p>
          <button 
            onClick={() => setShowEditModal(true)}
            className="w-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            Editar Perfil
          </button>
        </div>

        {/* Progreso General */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-gray-900 dark:text-gray-100">Progreso General</h3>
            </div>
            <span className="text-blue-600 dark:text-blue-400">75%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
            <div 
              className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: '75%' }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Curso: Programación I</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm text-center border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Temas Vistos</p>
            <p className="text-3xl text-gray-900 dark:text-gray-100">15/20</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm text-center border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Puntos (XP)</p>
            <p className="text-3xl text-gray-900 dark:text-gray-100">2,350</p>
          </div>
        </div>

        {/* Racha */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-3">Racha</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Flame className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-3xl text-gray-900 dark:text-gray-100">18 días</p>
          </div>
        </div>

        {/* Mis Insignias */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-gray-100 mb-6">Mis Insignias</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <Code className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xs text-center text-gray-700 dark:text-gray-300">Primer Algoritmo</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <Infinity className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xs text-center text-gray-700 dark:text-gray-300">Experto en Bucles</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <Cpu className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xs text-center text-gray-700 dark:text-gray-300">Depurador Maestro</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2 opacity-50">
                <Variable className="w-9 h-9 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-600">Rey de las Variables</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2 opacity-50">
                <GitBranch className="w-9 h-9 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-600">Maestro Condicional</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2 opacity-50">
                <Sigma className="w-9 h-9 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-600">Arquitecto de Funciones</p>
            </div>
          </div>
        </div>

        {/* Botón Cerrar Sesión */}
        <button className="w-full flex items-center justify-center gap-2 text-red-600 dark:text-red-400 py-4 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
          <LogOut className="w-6 h-6" />
          <span>Cerrar Sesión</span>
        </button>
      </div>

      {/* Modal Editar Perfil */}
      {showEditModal && (
        <EditProfileModal
          onClose={() => setShowEditModal(false)}
          currentName={userData.name}
          currentEmail={userData.email}
          currentPassword={userData.password}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}