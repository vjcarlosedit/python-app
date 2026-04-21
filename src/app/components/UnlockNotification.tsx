import { CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

interface UnlockNotificationProps {
  moduleName: string;
  onClose: () => void;
}

export function UnlockNotification({ moduleName, onClose }: UnlockNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Se cierra automáticamente después de 4 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full mx-4"
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-7 h-7" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4" />
            <h3 className="font-bold">¡Módulo Desbloqueado!</h3>
          </div>
          <p className="text-sm text-white/90">{moduleName}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white text-2xl leading-none"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
}