import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { Camera, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function EditProfilePage() {
  const { userData, updateUserData } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    career: userData.career,
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const handleSave = () => {
    // Validar contraseña primero si se proporcionó
    if (passwordData.currentPassword || passwordData.newPassword) {
      if (!passwordData.currentPassword || !passwordData.newPassword) {
        alert('Por favor completa ambos campos de contraseña');
        return;
      }
      if (passwordData.newPassword.length < 6) {
        alert('La nueva contraseña debe tener al menos 6 caracteres');
        return;
      }
      // Aquí iría la lógica real de cambio de contraseña
      console.log('Cambiar contraseña:', passwordData);
    }

    // Guardar datos del usuario
    updateUserData(formData);
    setPasswordData({ currentPassword: '', newPassword: '' });
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="max-w-md mx-auto px-5 h-16 flex items-center justify-center">
          <h1 className="text-center text-blue-700 dark:text-blue-300">Editar Perfil</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-8 pt-20">
        {/* Avatar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
              {avatarImage ? (
                <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-6xl text-white font-bold">
                  {formData.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>

            {/* Botón de lápiz para cambiar imagen */}
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg border-4 border-white dark:border-gray-800"
            >
              <Camera className="w-5 h-5 text-white" />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Formulario de datos */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Carrera</label>
              <input
                type="text"
                value={formData.career}
                onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Formulario de contraseña */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Cambiar Contraseña</h3>
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña Actual</label>
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <button onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute inset-y-0 right-0 px-3 flex items-center mt-6">
                {showCurrentPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nueva Contraseña</label>
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <button onClick={() => setShowNewPassword(!showNewPassword)} className="absolute inset-y-0 right-0 px-3 flex items-center mt-6">
                {showNewPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <button
            onClick={handleCancel}
            className="w-full py-3 text-base font-medium bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="w-full py-3 text-base font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}