import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type AuthScreen = 'login' | 'register';

interface LoginViewProps {
  onLogin: () => void;
  authScreen: AuthScreen;
  onNavigateAuth: (screen: AuthScreen) => void;
  defaultEmail: string;
  defaultPassword: string;
}

export function LoginView({
  onLogin,
  authScreen,
  onNavigateAuth,
  defaultEmail,
  defaultPassword,
}: LoginViewProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [confirmPassword, setConfirmPassword] = useState(defaultPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authScreen === 'register' && password !== confirmPassword) {
      return;
    }

    // Simular inicio/registro de sesión
    onLogin();
  };

  const goToRegister = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    onNavigateAuth('register');
  };

  const goToLogin = () => {
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    setConfirmPassword(defaultPassword);
    onNavigateAuth('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 dark:from-blue-800 dark:via-blue-700 dark:to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Programación I</h1>
          <p className="text-blue-100 text-sm">Universidad Juárez Autónoma de Tabasco</p>
        </div>

        {/* Formulario */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-gray-900 dark:text-gray-100 text-xl mb-6 text-center">
            {authScreen === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {authScreen === 'register' && (
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
            )}

            {/* Campo de email */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu.correo@ujat.mx"
                />
              </div>
            </div>

            {/* Campo de contraseña */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Link de recuperación */}
            {authScreen === 'login' && (
              <div className="text-right">
                <button 
                  type="button"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            {authScreen === 'register' && (
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirma tu contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-2">Las contraseñas no coinciden.</p>
                )}
              </div>
            )}

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              disabled={authScreen === 'register' && password !== confirmPassword}
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium shadow-lg"
            >
              {authScreen === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">o</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
          </div>

          {/* Registro */}
          <div className="text-center">
            {authScreen === 'login' ? (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  ¿No tienes una cuenta?
                </p>
                <button
                  type="button"
                  onClick={goToRegister}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  Crear cuenta nueva
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  ¿Ya tienes una cuenta?
                </p>
                <button
                  type="button"
                  onClick={goToLogin}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  Volver a iniciar sesión
                </button>
              </>
            )}
          </div>

          {authScreen === 'login' && (
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              Acceso rápido: {defaultEmail} / {defaultPassword}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-blue-100 text-xs">
            © 2026 UJAT - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
