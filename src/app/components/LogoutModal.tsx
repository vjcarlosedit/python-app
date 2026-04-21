import { LogOut, X } from 'lucide-react';

interface LogoutModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutModal({ onClose, onConfirm }: LogoutModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Icono */}
        <div className="p-6 text-center">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          
          <h2 className="text-gray-900 dark:text-gray-100 mb-2">
            ¿Cerrar sesión?
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            ¿Estás seguro que deseas cerrar sesión? Perderás el progreso no guardado.
          </p>
        </div>

        {/* Botones */}
        <div className="p-5 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-red-600 dark:bg-red-500 text-white rounded-xl hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
