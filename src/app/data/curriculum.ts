// Estructura completa del curriculum de Programación I

export interface SubModule {
  id: string;
  title: string;
  description: string;
  exercises: number; // Número de ejercicios en este submódulo
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  subModules: SubModule[];
}

export const curriculum: Module[] = [
  {
    id: 1,
    title: 'Fundamentos de Python',
    subtitle: 'Conceptos básicos y sintaxis',
    subModules: [
      {
        id: '1.1',
        title: 'Introducción a Python',
        description: '¿Qué es Python? Historia y aplicaciones',
        exercises: 10
      },
      {
        id: '1.2',
        title: 'Sintaxis Básica',
        description: 'Indentación, comentarios y convenciones',
        exercises: 10
      },
      {
        id: '1.3',
        title: 'Variables y Constantes',
        description: 'Declaración y asignación de variables',
        exercises: 10
      },
      {
        id: '1.4',
        title: 'Tipos de Datos',
        description: 'int, float, str, bool',
        exercises: 10
      },
      {
        id: '1.5',
        title: 'Entrada y Salida',
        description: 'Funciones input() y print()',
        exercises: 10
      },
      {
        id: '1.6',
        title: 'Operadores',
        description: 'Aritméticos, relacionales y lógicos',
        exercises: 10
      }
    ]
  },
  {
    id: 2,
    title: 'Estructuras de Control',
    subtitle: 'Decisiones y flujo de programa',
    subModules: [
      {
        id: '2.1',
        title: 'Estructura Secuencial',
        description: 'Ejecución lineal de instrucciones',
        exercises: 10
      },
      {
        id: '2.2',
        title: 'Condicional Simple (if)',
        description: 'Toma de decisiones básica',
        exercises: 10
      },
      {
        id: '2.3',
        title: 'Condicional Doble (if-else)',
        description: 'Dos caminos alternativos',
        exercises: 10
      },
      {
        id: '2.4',
        title: 'Condicional Múltiple (elif)',
        description: 'Múltiples condiciones',
        exercises: 10
      },
      {
        id: '2.5',
        title: 'Condicionales Anidadas',
        description: 'if dentro de if',
        exercises: 10
      }
    ]
  },
  {
    id: 3,
    title: 'Estructuras Repetitivas',
    subtitle: 'Ciclos y bucles',
    subModules: [
      {
        id: '3.1',
        title: 'Ciclo while',
        description: 'Repetición basada en condición',
        exercises: 10
      },
      {
        id: '3.2',
        title: 'Ciclo for',
        description: 'Iteración sobre secuencias',
        exercises: 10
      },
      {
        id: '3.3',
        title: 'Control de Ciclos',
        description: 'break, continue, pass',
        exercises: 10
      }
    ]
  },
  {
    id: 4,
    title: 'Estructuras de Datos',
    subtitle: 'Listas, tuplas, diccionarios',
    subModules: [
      {
        id: '4.1',
        title: 'Listas',
        description: 'Colecciones mutables ordenadas',
        exercises: 10
      },
      {
        id: '4.2',
        title: 'Tuplas',
        description: 'Colecciones inmutables',
        exercises: 10
      },
      {
        id: '4.3',
        title: 'Diccionarios',
        description: 'Pares clave-valor',
        exercises: 10
      },
      {
        id: '4.4',
        title: 'Conjuntos (set)',
        description: 'Colecciones sin duplicados',
        exercises: 10
      }
    ]
  },
  {
    id: 5,
    title: 'Funciones',
    subtitle: 'Reutilización de código',
    subModules: [
      {
        id: '5.1',
        title: 'Funciones Definidas',
        description: 'def, parámetros, return',
        exercises: 10
      },
      {
        id: '5.2',
        title: 'Funciones Lambda',
        description: 'Funciones anónimas de una línea',
        exercises: 10
      },
      {
        id: '5.3',
        title: 'Funciones Integradas',
        description: 'map(), filter(), reduce()',
        exercises: 10
      }
    ]
  },
  {
    id: 6,
    title: 'Manejo de Errores',
    subtitle: 'Excepciones y debugging',
    subModules: [
      {
        id: '6.1',
        title: 'Tipos de Errores',
        description: 'Sintaxis vs tiempo de ejecución',
        exercises: 10
      },
      {
        id: '6.2',
        title: 'try-except',
        description: 'Captura de excepciones',
        exercises: 10
      },
      {
        id: '6.3',
        title: 'finally',
        description: 'Código que siempre se ejecuta',
        exercises: 10
      }
    ]
  },
  {
    id: 7,
    title: 'Programación Orientada a Objetos',
    subtitle: 'Próximamente',
    subModules: [
      {
        id: '7.1',
        title: 'Clases y Objetos',
        description: 'Próximamente',
        exercises: 0
      },
      {
        id: '7.2',
        title: 'Atributos y Métodos',
        description: 'Próximamente',
        exercises: 0
      },
      {
        id: '7.3',
        title: 'Encapsulamiento',
        description: 'Próximamente',
        exercises: 0
      }
    ]
  }
];

// Función helper para obtener un módulo por ID
export function getModuleById(moduleId: number): Module | undefined {
  return curriculum.find(m => m.id === moduleId);
}

// Función helper para obtener un submódulo
export function getSubModuleById(moduleId: number, subModuleId: string): SubModule | undefined {
  const module = getModuleById(moduleId);
  return module?.subModules.find(sm => sm.id === subModuleId);
}

// Función para calcular el total de submódulos completados
export function getTotalSubModules(): number {
  return curriculum.reduce((total, module) => total + module.subModules.length, 0);
}
