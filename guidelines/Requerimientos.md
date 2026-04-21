# Requerimientos de la App de Aprendizaje de Python

## 1. Objetivo
Definir los requerimientos funcionales y no funcionales de la aplicación web para aprendizaje de programación en Python, con enfoque tipo micro-lecciones y ejercicios interactivos.

## 2. Alcance
Incluye navegación por módulos/submódulos, resolución de ejercicios, práctica diaria, perfil de usuario, configuración, notificaciones y centro de ayuda.

## 3. Requerimientos Funcionales

### RF-01. Navegación principal
- La aplicación debe mostrar una vista principal de módulos de aprendizaje.
- El usuario debe poder navegar entre secciones principales: módulos, práctica diaria, perfil, configuración, notificaciones y ayuda.

### RF-02. Estructura curricular
- El sistema debe organizar el contenido por módulos y submódulos.
- Cada submódulo debe exponer título, descripción y cantidad de ejercicios.
- El sistema debe permitir consultar un módulo y submódulo por identificador.

### RF-03. Gestión de ejercicios
- El sistema debe almacenar ejercicios por submódulo usando un identificador (ejemplo: 1.1, 2.3, 6.2).
- Cada ejercicio debe incluir al menos: `title`, `question`, `hint`, `wordBank`, `correctAnswer`.
- El sistema debe soportar ejercicios de opción múltiple (`type: multiple-choice`) con `options` y `correctOption`.
- El sistema debe permitir recuperar la lista de ejercicios para un submódulo.

### RF-04. Ejecución de lecciones
- El usuario debe poder abrir una lección por ruta dinámica `moduleId/subModuleId`.
- El flujo de lección debe permitir responder ejercicios y recibir retroalimentación.

### RF-05. Práctica diaria
- El sistema debe ofrecer una ruta de práctica diaria accesible desde navegación principal.

### RF-06. Perfil de usuario
- El usuario debe poder visualizar su perfil con nombre, carrera y estadísticas.
- El perfil debe mostrar logros del usuario.
- El usuario debe poder entrar a una página dedicada para editar perfil.

### RF-07. Edición de perfil
- El usuario debe poder editar nombre, correo y carrera.
- El usuario debe poder cambiar contraseña validando:
  - Ambos campos de contraseña requeridos si se intenta cambio.
  - Longitud mínima de nueva contraseña de 6 caracteres.
- El usuario debe poder seleccionar imagen de avatar desde archivo local.
- El usuario debe poder guardar cambios o cancelar edición.

### RF-08. Persistencia local de usuario
- Los datos del usuario deben persistirse en `localStorage`.
- Al iniciar la app, los datos deben cargarse desde `localStorage` si existen.

### RF-09. Configuración
- Debe existir una sección de configuración con sub-secciones:
  - Apariencia
  - Cuenta
  - Notificaciones
- La sección de apariencia debe permitir alternar modo claro/oscuro.
- La sección de apariencia debe permitir activar/desactivar sonido.
- La sección de cuenta debe permitir cambiar idioma desde modal.
- La sección de configuración debe permitir cerrar sesión con confirmación.

### RF-10. Notificaciones y ayuda
- Debe existir una vista de notificaciones.
- Debe existir un centro de ayuda accesible desde configuración.

### RF-11. Progreso y gamificación
- El sistema debe contemplar estado de progreso con:
  - módulos completados,
  - submódulos completados,
  - XP,
  - racha.
- Deben existir acciones para completar módulos/submódulos y sumar XP.

## 4. Requerimientos No Funcionales

### RNF-01. Usabilidad
- La interfaz debe ser clara para usuarios principiantes en programación.
- Las acciones clave (iniciar lección, editar perfil, guardar, cancelar) deben ser visibles y accesibles.
- Debe existir retroalimentación visual ante acciones importantes (errores de validación, cambios guardados).

### RNF-02. Rendimiento
- La app debe cargar la interfaz inicial en menos de 3 segundos en condiciones normales de red local.
- La navegación entre vistas debe sentirse fluida, sin bloqueos perceptibles.

### RNF-03. Disponibilidad en frontend
- La aplicación debe poder ejecutarse en entorno de desarrollo con `npm run dev`.
- La aplicación debe compilar correctamente para producción con `npm run build`.

### RNF-04. Compatibilidad
- Debe funcionar en navegadores modernos basados en Chromium y Firefox recientes.
- Debe adaptarse a pantallas móviles y de escritorio (diseño responsive).

### RNF-05. Mantenibilidad
- El código debe estar organizado por dominios (`pages`, `components`, `contexts`, `data`).
- El enrutamiento debe mantenerse centralizado.
- Los datos curriculares y de ejercicios deben mantenerse en archivos de datos separados.

### RNF-06. Escalabilidad de contenido
- Debe ser posible agregar nuevos módulos y submódulos sin refactor mayor.
- Debe ser posible agregar nuevos ejercicios manteniendo el mismo contrato de datos.

### RNF-07. Seguridad básica
- No se deben exponer secretos ni credenciales sensibles en frontend.
- La contraseña no debe mostrarse en texto plano por defecto en formularios.
- El cambio de contraseña debe validar condiciones mínimas del lado cliente.

### RNF-08. Accesibilidad
- Los formularios deben tener etiquetas legibles.
- Los controles interactivos deben ser operables por teclado.
- El contraste de textos y botones debe permitir lectura en modo claro/oscuro.

### RNF-09. Internacionalización
- La app debe permitir selección de idioma en configuración.
- El sistema debe permitir extender idiomas sin romper la navegación principal.

### RNF-10. Persistencia local
- La persistencia del perfil debe sobrevivir recargas del navegador.
- Ante ausencia de datos persistidos, el sistema debe inicializar valores por defecto válidos.

## 5. Requisitos futuros recomendados (backlog)
- Autenticación real con backend.
- Sincronización de progreso en la nube.
- Motor de práctica adaptativa por nivel.
- Métricas de aprendizaje y panel de avance detallado.
- Banco de preguntas versionado con validación automática.
