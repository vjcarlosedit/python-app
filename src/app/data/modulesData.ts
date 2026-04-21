export interface Exercise {
  id: number;
  question: string;
  hint?: string;
  validAnswers: string[];
  successMessage: string;
  errorMessage: string;
}

export interface Lesson {
  title: string;
  subtitle: string;
  content: {
    intro: string[];
    codeExample: {
      code: string;
    };
    infoBox: {
      title: string;
      content: string;
    };
  };
  exercises: Exercise[];
}

export interface ModuleData {
  id: number;
  lesson: Lesson;
}

export const modulesData: ModuleData[] = [
  // ============================================
  // MÓDULO 1: CONCEPTOS BÁSICOS Y VARIABLES
  // ============================================
  {
    id: 1,
    lesson: {
      title: "Variables y Tipos de Datos",
      subtitle: "Módulo 1: Fundamentos de Python",
      content: {
        intro: [
          "En programación, una variable es un contenedor para almacenar datos. Piensa en ella como una caja con una etiqueta donde puedes guardar información.",
          "Python es un lenguaje de tipado dinámico, lo que significa que no necesitas declarar el tipo de dato explícitamente. Python lo detecta automáticamente.",
        ],
        codeExample: {
          code: `# Tipos de datos básicos en Python
edad = 20          # int (entero)
altura = 1.75      # float (decimal)
nombre = "Juan"    # str (texto)
activo = True      # bool (booleano)`
        },
        infoBox: {
          title: "¿Sabías que...?",
          content:
            "En Python, no necesitas escribir 'int edad = 20' como en C. Simplemente escribes 'edad = 20' y Python entiende que es un número entero.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 2: OPERADORES ARITMÉTICOS
  // ============================================
  {
    id: 2,
    lesson: {
      title: "Operadores Aritméticos",
      subtitle: "Módulo 2: Operaciones Matemáticas en Python",
      content: {
        intro: [
          "Los operadores aritméticos permiten realizar cálculos matemáticos. Python soporta suma (+), resta (-), multiplicación (*), división (/), división entera (//), módulo (%) y potencia (**).",
          "Es importante conocer las reglas de prioridad: primero paréntesis, luego potencias, después multiplicación/división, y finalmente suma/resta.",
        ],
        codeExample: {
          code: `# Operadores aritméticos
suma = 10 + 5           # 15
resta = 20 - 8          # 12
producto = 6 * 7        # 42
division = 15 / 3       # 5.0 (siempre devuelve float)
division_entera = 17 // 5  # 3
modulo = 17 % 5         # 2
potencia = 2 ** 3       # 8`
        },
        infoBox: {
          title: "Importante",
          content:
            "La división (/) siempre devuelve un float. Para obtener un entero sin decimales, usa la división entera (//).",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 3: ENTRADA Y SALIDA DE DATOS
  // ============================================
  {
    id: 3,
    lesson: {
      title: "Entrada y Salida de Datos",
      subtitle: "Módulo 3: input() y print()",
      content: {
        intro: [
          "Para interactuar con el usuario, Python proporciona las funciones input() para leer datos y print() para mostrar información.",
          "La función input() siempre devuelve un string (texto), por lo que si necesitas un número, debes convertirlo usando int() o float().",
        ],
        codeExample: {
          code: `# Entrada y salida en Python
nombre = input("¿Cuál es tu nombre? ")
print("Hola,", nombre)

# Convertir entrada a número
edad = int(input("¿Cuántos años tienes? "))
print("Tienes", edad, "años")

# Usando f-strings (formato moderno)
print(f"Hola {nombre}, tienes {edad} años")`
        },
        infoBox: {
          title: "Funciones predefinidas útiles",
          content:
            "Python incluye funciones como len() para obtener longitud, type() para ver el tipo de dato, str() para convertir a texto, int() para enteros, y float() para decimales.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 4: OPERADORES RELACIONALES Y LÓGICOS
  // ============================================
  {
    id: 4,
    lesson: {
      title: "Operadores de Comparación y Lógicos",
      subtitle: "Módulo 4: Expresiones Lógicas",
      content: {
        intro: [
          "Los operadores relacionales comparan valores y devuelven True o False: == (igual), != (diferente), > (mayor), < (menor), >= (mayor o igual), <= (menor o igual).",
          "Los operadores lógicos combinan condiciones: and (y), or (o), not (negación). Son fundamentales para tomar decisiones en programas.",
        ],
        codeExample: {
          code: `# Operadores de comparación
es_mayor = 10 > 5        # True
son_iguales = 7 == 7     # True
es_diferente = 5 != 10   # True

# Operadores lógicos
resultado_and = True and False   # False
resultado_or = True or False     # True
negacion = not True              # False

# Combinando operadores
edad = 20
es_adulto = edad >= 18 and edad < 65  # True`
        },
        infoBox: {
          title: "Recuerda",
          content:
            "No confundas = (asignación) con == (comparación de igualdad). El operador = asigna valores, mientras que == compara si dos valores son iguales.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 5: ESTRUCTURA SELECTIVA SIMPLE (if)
  // ============================================
  {
    id: 5,
    lesson: {
      title: "Estructura Selectiva Simple (if)",
      subtitle: "Módulo 5: Tomando Decisiones con if",
      content: {
        intro: [
          "La estructura if permite ejecutar código solo cuando se cumple una condición. Es la forma más básica de tomar decisiones en programación.",
          "En Python, la indentación (espacios al inicio) es obligatoria. Todo el código que debe ejecutarse cuando la condición es verdadera debe estar indentado.",
        ],
        codeExample: {
          code: `# Estructura if simple
edad = 20

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")

# El código aquí se ejecuta siempre
print("Programa terminado")`
        },
        infoBox: {
          title: "Indentación en Python",
          content:
            "Python usa la indentación (4 espacios o 1 tabulación) para definir bloques de código. En C usarías llaves {}, pero en Python usas espacios.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 6: ESTRUCTURA SELECTIVA DOBLE (if-else)
  // ============================================
  {
    id: 6,
    lesson: {
      title: "Estructura Selectiva Doble (if-else)",
      subtitle: "Módulo 6: if-then-else",
      content: {
        intro: [
          "La estructura if-else ejecuta un bloque de código cuando la condición es verdadera, y otro diferente cuando es falsa.",
          "Esto es útil cuando necesitas hacer una cosa en un caso y otra completamente diferente en el caso contrario.",
        ],
        codeExample: {
          code: `# Estructura if-else
edad = 15

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")
else:
    print("Eres menor de edad")
    print("No puedes votar aún")

# Otro ejemplo
nota = 85

if nota >= 70:
    print("¡Aprobaste!")
else:
    print("Necesitas estudiar más")`
        },
        infoBox: {
          title: "Buena práctica",
          content:
            "Usa if-else cuando necesites ejecutar código diferente para cada caso. Si solo necesitas hacer algo en un caso específico, usa solo if.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 7: ESTRUCTURAS SELECTIVAS ANIDADAS
  // ============================================
  {
    id: 7,
    lesson: {
      title: "Estructuras Selectivas Anidadas",
      subtitle: "Módulo 7: if-elif-else",
      content: {
        intro: [
          "Cuando necesitas evaluar múltiples condiciones secuencialmente, usas elif (else if). Esto te permite tener más de dos caminos posibles.",
          "Python evalúa las condiciones en orden y ejecuta el bloque del primer if o elif que sea verdadero, ignorando el resto.",
        ],
        codeExample: {
          code: `# Estructuras anidadas con elif
nota = 85

if nota >= 90:
    print("Calificación: A (Excelente)")
elif nota >= 80:
    print("Calificación: B (Muy bien)")
elif nota >= 70:
    print("Calificación: C (Aprobado)")
else:
    print("Calificación: F (Reprobado)")

# Condiciones anidadas complejas
edad = 25
licencia = True

if edad >= 18:
    if licencia:
        print("Puedes conducir")
    else:
        print("Necesitas licencia")
else:
    print("Eres menor de edad")`
        },
        infoBox: {
          title: "Orden de evaluación",
          content:
            "Python evalúa los if y elif en orden de arriba a abajo. En cuanto encuentra una condición verdadera, ejecuta ese bloque y salta el resto.",
        },
      },
      exercises: [],
    },
  },

  // ============================================
  // MÓDULO 8: ESTRUCTURA SELECTIVA MÚLTIPLE (match-case)
  // ============================================
  {
    id: 8,
    lesson: {
      title: "Estructura Selectiva Múltiple (match-case)",
      subtitle: "Módulo 8: switch-case en Python",
      content: {
        intro: [
          "Python 3.10+ introdujo match-case, equivalente al switch-case de C. Permite comparar un valor contra múltiples patrones.",
          "Es útil cuando tienes muchas opciones específicas que comparar, como días de la semana, menús, o estados.",
        ],
        codeExample: {
          code: `# Estructura match-case (Python 3.10+)
dia = 3

match dia:
    case 1:
        print("Lunes")
    case 2:
        print("Martes")
    case 3:
        print("Miércoles")
    case 4:
        print("Jueves")
    case 5:
        print("Viernes")
    case 6 | 7:  # Múltiples valores
        print("Fin de semana")
    case _:  # Default (como default en C)
        print("Día inválido")`
        },
        infoBox: {
          title: "Alternativa para versiones antiguas",
          content:
            "Si usas Python < 3.10, puedes usar if-elif-else o un diccionario para simular el comportamiento de match-case.",
        },
      },
      exercises: [],
    },
  },
];

export function getModuleData(moduleId: number): ModuleData | null {
  return modulesData.find(m => m.id === moduleId) || null;
}
