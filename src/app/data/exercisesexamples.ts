// Ejercicios tipo Duolingo organizados por submódulo

export interface Exercise {
  title: string;
  question: string;
  hint: string;
  type?: 'multiple-choice' | 'code-completion';
  options?: string[];
  correctOption?: string;
  wordBank: string[];
  correctAnswer: string[];
}

export const exercisesBySubModule: { [key: string]: Exercise[] } = {
  "1.1": [
    {
      title: "¿Qué es Python?",
      question: "¿Qué es Python?",
      hint: "Es conocido por su sintaxis clara.",
      type: "multiple-choice",
      options: ["Un lenguaje de programación", "Un navegador", "Un sistema operativo", "Una base de datos"],
      correctOption: "Un lenguaje de programación",
      wordBank: ["Python", "lenguaje", "programación", "navegador"],
      correctAnswer: ["Python", "lenguaje", "programación"]
    },
    {
      title: "Creador de Python",
      question: "¿Quién creó Python?",
      hint: "Su nombre es Guido.",
      type: "multiple-choice",
      options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Linus Torvalds"],
      correctOption: "Guido van Rossum",
      wordBank: ["Guido", "van", "Rossum", "creó", "Python"],
      correctAnswer: ["Guido", "van", "Rossum"]
    },
    {
      title: "Año de origen",
      question: "¿En qué década apareció Python?",
      hint: "Fue a inicios de los 90.",
      type: "multiple-choice",
      options: ["Década de 1990", "Década de 1970", "Década de 2000", "Década de 2010"],
      correctOption: "Década de 1990",
      wordBank: ["Python", "años", "90"],
      correctAnswer: ["Python", "90"]
    },
    {
      title: "Áreas de uso",
      question: "¿En cuál de estas áreas se usa Python?",
      hint: "Se usa en muchas áreas.",
      type: "multiple-choice",
      options: ["Web, IA y automatización", "Solo videojuegos", "Solo diseño gráfico", "Solo redes"],
      correctOption: "Web, IA y automatización",
      wordBank: ["web", "IA", "automatización", "Python"],
      correctAnswer: ["Python", "web", "IA", "automatización"]
    },
    {
      title: "Legibilidad",
      question: "Python destaca por ser...",
      hint: "Su código suele verse limpio.",
      type: "multiple-choice",
      options: ["Legible y sencillo", "Muy verboso", "Solo visual", "Solo binario"],
      correctOption: "Legible y sencillo",
      wordBank: ["Python", "legible", "sencillo"],
      correctAnswer: ["Python", "legible", "sencillo"]
    },
    {
      title: "Escribe Python",
      question: "Completa la frase: Python es un lenguaje de ____ nivel.",
      hint: "La expresión común es 'alto nivel'.",
      type: "code-completion",
      wordBank: ["alto", "bajo", "nivel", "máquina"],
      correctAnswer: ["alto", "nivel"]
    },
    {
      title: "Aplicación común",
      question: "Completa: Python se usa para análisis de ____.",
      hint: "Relaciona con ciencia de datos.",
      type: "code-completion",
      wordBank: ["datos", "teclados", "pantallas", "cables"],
      correctAnswer: ["datos"]
    },
    {
      title: "Ventaja principal",
      question: "Completa: Python tiene una sintaxis fácil de ____.",
      hint: "Se habla de leer y escribir.",
      type: "code-completion",
      wordBank: ["leer", "romper", "soldar", "cerrar"],
      correctAnswer: ["leer"]
    },
    {
      title: "Tipo de ejecución",
      question: "Completa: Python es un lenguaje ____.",
      hint: "No suele decirse compilado en introducción.",
      type: "code-completion",
      wordBank: ["interpretado", "mecánico", "eléctrico", "cerrado"],
      correctAnswer: ["interpretado"]
    },
    {
      title: "Nombre correcto",
      question: "Completa: El nombre del lenguaje es ____.",
      hint: "Empieza con P.",
      type: "code-completion",
      wordBank: ["Python", "Piton", "Pyton", "Pythoon"],
      correctAnswer: ["Python"]
    }
  ],
  "1.2": [
    {
      title: "Indentación",
      question: "¿Qué usa Python para definir bloques?",
      hint: "No usa llaves como otros lenguajes.",
      type: "multiple-choice",
      options: ["Indentación", "Corchetes", "Punto y coma", "Comillas"],
      correctOption: "Indentación",
      wordBank: ["Python", "usa", "indentación"],
      correctAnswer: ["Python", "indentación"]
    },
    {
      title: "Comentarios",
      question: "¿Qué símbolo inicia un comentario de una línea?",
      hint: "Está sobre el 3 en muchos teclados.",
      type: "multiple-choice",
      options: ["#", "//", "/*", "--"],
      correctOption: "#",
      wordBank: ["#", "comentario", "Python"],
      correctAnswer: ["#"]
    },
    {
      title: "Case sensitive",
      question: "Python distingue mayúsculas y minúsculas.",
      hint: "Variable y variable no son lo mismo.",
      type: "multiple-choice",
      options: ["Verdadero", "Falso"],
      correctOption: "Verdadero",
      wordBank: ["Python", "distingue", "mayúsculas", "minúsculas"],
      correctAnswer: ["Python", "distingue"]
    },
    {
      title: "Bloque correcto",
      question: "¿Cuál línea está bien escrita en Python?",
      hint: "Recuerda los dos puntos tras if.",
      type: "multiple-choice",
      options: ["if x > 0:", "if (x > 0) then", "if x > 0", "if x > 0;"],
      correctOption: "if x > 0:",
      wordBank: ["if", "x", ">", "0", ":"],
      correctAnswer: ["if", "x", ">", "0", ":"]
    },
    {
      title: "Comentario simple",
      question: "Completa el comentario: __ Esto es una nota",
      hint: "Va al inicio de la línea.",
      type: "code-completion",
      wordBank: ["#", "//", "/*", ";"],
      correctAnswer: ["#"]
    },
    {
      title: "Función bien escrita",
      question: "Completa: print(__)",
      hint: "El contenido va entre paréntesis.",
      type: "code-completion",
      wordBank: ["\"Hola\"", "{Hola}", "[Hola]", "Hola;"],
      correctAnswer: ["\"Hola\""]
    },
    {
      title: "Distingue nombres",
      question: "Completa: nombre y Nombre son variables ____.",
      hint: "No son iguales.",
      type: "code-completion",
      wordBank: ["diferentes", "idénticas", "vacías", "constantes"],
      correctAnswer: ["diferentes"]
    },
    {
      title: "Dos puntos",
      question: "Completa: if edad >= 18__",
      hint: "Python requiere un signo al final.",
      type: "code-completion",
      wordBank: [":", ";", "?", "."],
      correctAnswer: [":"]
    },
    {
      title: "Código alineado",
      question: "Completa: La indentación organiza los ____ de código.",
      hint: "Se habla de bloques.",
      type: "code-completion",
      wordBank: ["bloques", "teclados", "archivos", "monitores"],
      correctAnswer: ["bloques"]
    },
    {
      title: "Buena sintaxis",
      question: "Completa: Python prefiere código claro y ____.",
      hint: "Idea asociada a sencillo.",
      type: "code-completion",
      wordBank: ["legible", "borroso", "ancho", "cerrado"],
      correctAnswer: ["legible"]
    }
  ],
  "1.3": [
    {
      title: "Crear variable",
      question: "¿Cuál asignación es válida en Python?",
      hint: "La variable va a la izquierda del igual.",
      type: "multiple-choice",
      options: ["edad = 25", "25 = edad", "int edad = 25", "var edad = 25"],
      correctOption: "edad = 25",
      wordBank: ["edad", "=", "25"],
      correctAnswer: ["edad", "=", "25"]
    },
    {
      title: "Nombre válido",
      question: "¿Cuál es un nombre de variable válido?",
      hint: "Puede iniciar con guion bajo.",
      type: "multiple-choice",
      options: ["_total", "2total", "mi-total", "class"],
      correctOption: "_total",
      wordBank: ["_total", "válido", "variable"],
      correctAnswer: ["_total"]
    },
    {
      title: "Reasignación",
      question: "¿Se puede cambiar el valor de una variable?",
      hint: "No son constantes por defecto.",
      type: "multiple-choice",
      options: ["Sí", "No"],
      correctOption: "Sí",
      wordBank: ["x", "=", "10", "x", "=", "20"],
      correctAnswer: ["x", "=", "10", "x", "=", "20"]
    },
    {
      title: "Constantes",
      question: "En Python, una constante suele escribirse...",
      hint: "Es una convención de estilo.",
      type: "multiple-choice",
      options: ["En mayúsculas", "Con llaves", "Con punto y coma", "Con números al inicio"],
      correctOption: "En mayúsculas",
      wordBank: ["PI", "MAXIMO", "constante"],
      correctAnswer: ["PI", "MAXIMO"]
    },
    {
      title: "Texto en variable",
      question: "Completa: nombre = ____",
      hint: "Usa comillas.",
      type: "code-completion",
      wordBank: ["\"Ana\"", "Ana", "(Ana)", "{Ana}"],
      correctAnswer: ["\"Ana\""]
    },
    {
      title: "Número en variable",
      question: "Completa: precio = ____",
      hint: "Debe ser un valor numérico.",
      type: "code-completion",
      wordBank: ["19.99", "\"19.99\"", "precio", "== 19.99"],
      correctAnswer: ["19.99"]
    },
    {
      title: "Convención",
      question: "Completa: Una constante como convenio puede verse así: ____ = 3.14",
      hint: "Todo en mayúsculas.",
      type: "code-completion",
      wordBank: ["PI", "pi", "Pi", "pI"],
      correctAnswer: ["PI"]
    },
    {
      title: "Asignación",
      question: "Completa: El operador para asignar es ____.",
      hint: "No confundas con comparación.",
      type: "code-completion",
      wordBank: ["=", "==", ">=", "!="],
      correctAnswer: ["="]
    },
    {
      title: "Variable booleana",
      question: "Completa: activo = ____",
      hint: "Booleano con mayúscula inicial.",
      type: "code-completion",
      wordBank: ["True", "true", "1", "\"True\""],
      correctAnswer: ["True"]
    },
    {
      title: "Cambiar valor",
      question: "Completa: puntos = 5 luego puntos = ____",
      hint: "Piensa en una nueva asignación.",
      type: "code-completion",
      wordBank: ["8", "== 8", "puntos", "\"8\""],
      correctAnswer: ["8"]
    }
  ],
  "1.4": [
    {
      title: "Entero",
      question: "¿Qué tipo de dato es 42?",
      hint: "No tiene decimal.",
      type: "multiple-choice",
      options: ["int", "float", "str", "bool"],
      correctOption: "int",
      wordBank: ["42", "int"],
      correctAnswer: ["42", "int"]
    },
    {
      title: "Decimal",
      question: "¿Qué tipo de dato es 3.14?",
      hint: "Tiene punto decimal.",
      type: "multiple-choice",
      options: ["float", "int", "str", "bool"],
      correctOption: "float",
      wordBank: ["3.14", "float"],
      correctAnswer: ["3.14", "float"]
    },
    {
      title: "Cadena",
      question: "¿Qué tipo de dato es \"Hola\"?",
      hint: "Va entre comillas.",
      type: "multiple-choice",
      options: ["str", "int", "list", "bool"],
      correctOption: "str",
      wordBank: ["\"Hola\"", "str"],
      correctAnswer: ["\"Hola\"", "str"]
    },
    {
      title: "Booleano",
      question: "¿Cuál es un valor booleano válido?",
      hint: "Empieza con mayúscula.",
      type: "multiple-choice",
      options: ["True", "true", "TRUE", "\"True\""],
      correctOption: "True",
      wordBank: ["True", "False", "bool"],
      correctAnswer: ["True", "False"]
    },
    {
      title: "Lista",
      question: "Completa: [1, 2, 3] es de tipo ____.",
      hint: "Es una colección ordenada.",
      type: "code-completion",
      wordBank: ["list", "tuple", "dict", "set"],
      correctAnswer: ["list"]
    },
    {
      title: "Tupla",
      question: "Completa: (1, 2) es de tipo ____.",
      hint: "Usa paréntesis.",
      type: "code-completion",
      wordBank: ["tuple", "list", "dict", "set"],
      correctAnswer: ["tuple"]
    },
    {
      title: "Diccionario",
      question: "Completa: {\"a\": 1} es de tipo ____.",
      hint: "Tiene clave y valor.",
      type: "code-completion",
      wordBank: ["dict", "set", "list", "str"],
      correctAnswer: ["dict"]
    },
    {
      title: "Conjunto",
      question: "Completa: {1, 2, 3} puede representar un ____.",
      hint: "No tiene claves.",
      type: "code-completion",
      wordBank: ["set", "dict", "tuple", "str"],
      correctAnswer: ["set"]
    },
    {
      title: "Texto",
      question: "Completa: Un dato textual en Python se llama ____.",
      hint: "Abreviatura de string.",
      type: "code-completion",
      wordBank: ["str", "txt", "char", "text"],
      correctAnswer: ["str"]
    },
    {
      title: "Verdad lógica",
      question: "Completa: False y True pertenecen al tipo ____.",
      hint: "Booleano.",
      type: "code-completion",
      wordBank: ["bool", "bin", "int", "str"],
      correctAnswer: ["bool"]
    }
  ],
  "1.5": [
    {
      title: "Salida",
      question: "¿Qué función muestra información en pantalla?",
      hint: "Es básica en Python.",
      type: "multiple-choice",
      options: ["print()", "input()", "len()", "type()"],
      correctOption: "print()",
      wordBank: ["print", "pantalla"],
      correctAnswer: ["print"]
    },
    {
      title: "Entrada",
      question: "¿Qué función permite leer datos del usuario?",
      hint: "Suele usarse con un mensaje.",
      type: "multiple-choice",
      options: ["input()", "print()", "read()", "scan()"],
      correctOption: "input()",
      wordBank: ["input", "usuario"],
      correctAnswer: ["input"]
    },
    {
      title: "Mensaje",
      question: "¿Cuál línea pide el nombre al usuario?",
      hint: "Usa input con texto.",
      type: "multiple-choice",
      options: ["nombre = input(\"Tu nombre: \")", "print(\"Tu nombre\")", "input = nombre", "nombre == input()"],
      correctOption: "nombre = input(\"Tu nombre: \")",
      wordBank: ["nombre", "=", "input", "(\"Tu nombre: \")"],
      correctAnswer: ["nombre", "=", "input", "(\"Tu nombre: \")"]
    },
    {
      title: "Salida de variable",
      question: "¿Cómo imprimes la variable edad?",
      hint: "La variable va dentro de print.",
      type: "multiple-choice",
      options: ["print(edad)", "input(edad)", "edad(print)", "print = edad"],
      correctOption: "print(edad)",
      wordBank: ["print", "(", "edad", ")"],
      correctAnswer: ["print", "(", "edad", ")"]
    },
    {
      title: "Print básico",
      question: "Completa: ____ (\"Hola\")",
      hint: "Función de salida.",
      type: "code-completion",
      wordBank: ["print", "input", "len", "type"],
      correctAnswer: ["print"]
    },
    {
      title: "Input básico",
      question: "Completa: ciudad = ____()",
      hint: "Función para entrada.",
      type: "code-completion",
      wordBank: ["input", "print", "read", "type"],
      correctAnswer: ["input"]
    },
    {
      title: "Guardar entrada",
      question: "Completa: nombre ____ input()",
      hint: "Falta el operador de asignación.",
      type: "code-completion",
      wordBank: ["=", "==", ":", "=>"],
      correctAnswer: ["="]
    },
    {
      title: "Mostrar texto",
      question: "Completa: print(____)",
      hint: "Va una cadena entre comillas.",
      type: "code-completion",
      wordBank: ["\"Bienvenido\"", "Bienvenido", "{Bienvenido}", "[Bienvenido]"],
      correctAnswer: ["\"Bienvenido\""]
    },
    {
      title: "Tipo de input",
      question: "Completa: input() devuelve normalmente un ____.",
      hint: "Aunque escribas números, entra como texto.",
      type: "code-completion",
      wordBank: ["str", "int", "float", "bool"],
      correctAnswer: ["str"]
    },
    {
      title: "Convertir número",
      question: "Completa: edad = ____ (input())",
      hint: "Sirve para convertir a entero.",
      type: "code-completion",
      wordBank: ["int", "str", "bool", "len"],
      correctAnswer: ["int"]
    }
  ],
  "1.6": [
    {
      title: "Suma",
      question: "¿Qué operador realiza una suma?",
      hint: "Une números o textos.",
      type: "multiple-choice",
      options: ["+", "-", "*", "/"],
      correctOption: "+",
      wordBank: ["5", "+", "3"],
      correctAnswer: ["5", "+", "3"]
    },
    {
      title: "Multiplicación",
      question: "¿Qué operador multiplica valores?",
      hint: "Es un asterisco.",
      type: "multiple-choice",
      options: ["*", "x", "+", "^"],
      correctOption: "*",
      wordBank: ["4", "*", "7"],
      correctAnswer: ["4", "*", "7"]
    },
    {
      title: "Mayor que",
      question: "¿Qué operador verifica 'mayor que'?",
      hint: "Comparación simple.",
      type: "multiple-choice",
      options: [">", "<", "==", "="],
      correctOption: ">",
      wordBank: ["10", ">", "5"],
      correctAnswer: ["10", ">", "5"]
    },
    {
      title: "Igualdad",
      question: "¿Qué operador compara si dos valores son iguales?",
      hint: "No es el de asignación.",
      type: "multiple-choice",
      options: ["==", "=", "!=", "<="],
      correctOption: "==",
      wordBank: ["8", "==", "8"],
      correctAnswer: ["8", "==", "8"]
    },
    {
      title: "Resta",
      question: "Completa: resultado = 9 ____ 2",
      hint: "Quita una cantidad.",
      type: "code-completion",
      wordBank: ["-", "+", "*", "/"],
      correctAnswer: ["-"]
    },
    {
      title: "División",
      question: "Completa: cociente = 8 ____ 2",
      hint: "Da como resultado 4.",
      type: "code-completion",
      wordBank: ["/", "//", "%", "*"],
      correctAnswer: ["/"]
    },
    {
      title: "Módulo",
      question: "Completa: 7 ____ 2 devuelve el residuo.",
      hint: "Se usa para sobrante.",
      type: "code-completion",
      wordBank: ["%", "/", "*", "+"],
      correctAnswer: ["%"]
    },
    {
      title: "AND lógico",
      question: "Completa: True ____ False",
      hint: "Ambas condiciones deben ser verdaderas.",
      type: "code-completion",
      wordBank: ["and", "or", "not", "&&"],
      correctAnswer: ["and"]
    },
    {
      title: "OR lógico",
      question: "Completa: True ____ False",
      hint: "Basta una condición verdadera.",
      type: "code-completion",
      wordBank: ["or", "and", "not", "||"],
      correctAnswer: ["or"]
    },
    {
      title: "NOT lógico",
      question: "Completa: ____ True invierte el valor.",
      hint: "Niega la condición.",
      type: "code-completion",
      wordBank: ["not", "and", "or", "!"],
      correctAnswer: ["not"]
    }
  ],
  "2.1": [
    {
      title: "Secuencia",
      question: "¿Cómo se ejecuta una estructura secuencial?",
      hint: "Va línea por línea.",
      type: "multiple-choice",
      options: ["De arriba hacia abajo", "De abajo hacia arriba", "Al azar", "En paralelo"],
      correctOption: "De arriba hacia abajo",
      wordBank: ["arriba", "abajo", "orden"],
      correctAnswer: ["arriba", "abajo", "orden"]
    },
    {
      title: "Orden",
      question: "En una estructura secuencial, el orden de las instrucciones...",
      hint: "Sí importa.",
      type: "multiple-choice",
      options: ["Sí importa", "No importa", "Se invierte", "Es aleatorio"],
      correctOption: "Sí importa",
      wordBank: ["orden", "importa"],
      correctAnswer: ["orden", "importa"]
    },
    {
      title: "Ejemplo",
      question: "¿Cuál es un ejemplo de secuencia?",
      hint: "Sin decisiones ni ciclos.",
      type: "multiple-choice",
      options: ["leer, procesar e imprimir", "repetir hasta", "si... entonces", "mientras..."],
      correctOption: "leer, procesar e imprimir",
      wordBank: ["leer", "procesar", "imprimir"],
      correctAnswer: ["leer", "procesar", "imprimir"]
    },
    {
      title: "Primero",
      question: "Si tienes tres print seguidos, ¿qué ocurre?",
      hint: "Se ejecutan en el orden escrito.",
      type: "multiple-choice",
      options: ["Se muestran en orden", "Se mezclan", "Solo sale uno", "Da error"],
      correctOption: "Se muestran en orden",
      wordBank: ["print", "orden"],
      correctAnswer: ["print", "orden"]
    },
    {
      title: "Inicio-proceso-fin",
      question: "Completa la secuencia lógica: inicio, ____, fin.",
      hint: "Va en medio.",
      type: "code-completion",
      wordBank: ["proceso", "while", "if", "error"],
      correctAnswer: ["proceso"]
    },
    {
      title: "Paso 1",
      question: "Completa: primero se ____ datos.",
      hint: "Piensa en input.",
      type: "code-completion",
      wordBank: ["leen", "borran", "rompen", "cierran"],
      correctAnswer: ["leen"]
    },
    {
      title: "Paso 2",
      question: "Completa: luego se ____ datos.",
      hint: "Se opera con ellos.",
      type: "code-completion",
      wordBank: ["procesan", "desenchufan", "olvidan", "saltan"],
      correctAnswer: ["procesan"]
    },
    {
      title: "Paso 3",
      question: "Completa: al final se ____ resultados.",
      hint: "Usa print.",
      type: "code-completion",
      wordBank: ["muestran", "esconden", "repiten", "anidan"],
      correctAnswer: ["muestran"]
    },
    {
      title: "Sin condiciones",
      question: "Completa: una secuencia no usa ____ obligatoriamente.",
      hint: "Podría resolver sin if.",
      type: "code-completion",
      wordBank: ["condiciones", "variables", "pantalla", "texto"],
      correctAnswer: ["condiciones"]
    },
    {
      title: "Sin repetición",
      question: "Completa: una secuencia simple tampoco requiere ____.",
      hint: "Piensa en while o for.",
      type: "code-completion",
      wordBank: ["ciclos", "print", "int", "str"],
      correctAnswer: ["ciclos"]
    }
  ],
  "2.2": [
    {
      title: "If simple",
      question: "¿Cuándo se ejecuta un bloque if?",
      hint: "Solo cuando la condición es verdadera.",
      type: "multiple-choice",
      options: ["Cuando la condición es verdadera", "Cuando es falsa", "Siempre", "Nunca"],
      correctOption: "Cuando la condición es verdadera",
      wordBank: ["if", "condición", "verdadera"],
      correctAnswer: ["if", "condición", "verdadera"]
    },
    {
      title: "Sintaxis",
      question: "¿Cuál es la sintaxis correcta de un if?",
      hint: "Recuerda los dos puntos.",
      type: "multiple-choice",
      options: ["if x > 0:", "if (x > 0)", "if x > 0 then", "if x > 0;"],
      correctOption: "if x > 0:",
      wordBank: ["if", "x", ">", "0", ":"],
      correctAnswer: ["if", "x", ">", "0", ":"]
    },
    {
      title: "Bloque",
      question: "Después de if condicion:, la siguiente línea debe estar...",
      hint: "Por indentación.",
      type: "multiple-choice",
      options: ["Indentada", "Entre llaves", "Terminada en ;", "Sin espacios"],
      correctOption: "Indentada",
      wordBank: ["indentada", "bloque"],
      correctAnswer: ["indentada", "bloque"]
    },
    {
      title: "Condición",
      question: "¿Qué tipo de resultado espera un if?",
      hint: "Verdadero o falso.",
      type: "multiple-choice",
      options: ["Booleano", "Texto", "Lista", "Entero"],
      correctOption: "Booleano",
      wordBank: ["True", "False", "booleano"],
      correctAnswer: ["True", "False", "booleano"]
    },
    {
      title: "If positivo",
      question: "Completa: if edad >= 18: ____ (\"Mayor de edad\")",
      hint: "Muestra un mensaje.",
      type: "code-completion",
      wordBank: ["print", "input", "len", "type"],
      correctAnswer: ["print"]
    },
    {
      title: "If con variable",
      question: "Completa: if activo == True: ____",
      hint: "Acción típica de salida.",
      type: "code-completion",
      wordBank: ["print(\"Acceso\")", "input()", "len()", "type()"],
      correctAnswer: ["print(\"Acceso\")"]
    },
    {
      title: "Operador correcto",
      question: "Completa: if nota ____ 6:",
      hint: "Piensa en aprobado.",
      type: "code-completion",
      wordBank: [">=", "=", "!=", "//"],
      correctAnswer: [">="]
    },
    {
      title: "Palabra clave",
      question: "Completa: la palabra reservada es ____.",
      hint: "Empieza con i.",
      type: "code-completion",
      wordBank: ["if", "for", "def", "else"],
      correctAnswer: ["if"]
    },
    {
      title: "Resultado",
      question: "Completa: si la condición es falsa, el bloque if simple no se ____.",
      hint: "Se omite.",
      type: "code-completion",
      wordBank: ["ejecuta", "define", "importa", "compara"],
      correctAnswer: ["ejecuta"]
    },
    {
      title: "Comparación",
      question: "Completa: if nombre ____ \"Ana\":",
      hint: "Comparación de igualdad.",
      type: "code-completion",
      wordBank: ["==", "=", "!=", ":"],
      correctAnswer: ["=="]
    }
  ],
  "2.3": [
    {
      title: "If-else",
      question: "¿Para qué sirve if-else?",
      hint: "Permite dos caminos.",
      type: "multiple-choice",
      options: ["Para ejecutar una u otra acción", "Para repetir código", "Para crear listas", "Para importar módulos"],
      correctOption: "Para ejecutar una u otra acción",
      wordBank: ["if", "else", "dos", "caminos"],
      correctAnswer: ["if", "else", "dos", "caminos"]
    },
    {
      title: "Else",
      question: "¿Cuándo se ejecuta else?",
      hint: "Es la alternativa del if.",
      type: "multiple-choice",
      options: ["Cuando la condición es falsa", "Cuando es verdadera", "Siempre", "Nunca"],
      correctOption: "Cuando la condición es falsa",
      wordBank: ["else", "condición", "falsa"],
      correctAnswer: ["else", "condición", "falsa"]
    },
    {
      title: "Sintaxis",
      question: "¿Qué palabra acompaña a if para el caso contrario?",
      hint: "Va después del bloque if.",
      type: "multiple-choice",
      options: ["else", "elif", "def", "while"],
      correctOption: "else",
      wordBank: ["if", "else"],
      correctAnswer: ["if", "else"]
    },
    {
      title: "Ejemplo",
      question: "¿Cuál fragmento representa una estructura doble?",
      hint: "Debe tener if y else.",
      type: "multiple-choice",
      options: ["if x > 0: ... else: ...", "if x > 0: ...", "while x > 0: ...", "for x in y: ..."],
      correctOption: "if x > 0: ... else: ...",
      wordBank: ["if", "else", "estructura", "doble"],
      correctAnswer: ["if", "else", "estructura", "doble"]
    },
    {
      title: "Mayor o menor",
      question: "Completa: if numero > 0: print(\"Positivo\") ____: print(\"No positivo\")",
      hint: "Caso alternativo.",
      type: "code-completion",
      wordBank: ["else", "elif", "for", "def"],
      correctAnswer: ["else"]
    },
    {
      title: "Aprobado",
      question: "Completa: if nota >= 6: print(\"Aprobado\") else: print(____)",
      hint: "Contrario de aprobado.",
      type: "code-completion",
      wordBank: ["\"Reprobado\"", "\"Mayor\"", "\"Nota\"", "\"If\""],
      correctAnswer: ["\"Reprobado\""]
    },
    {
      title: "Dos opciones",
      question: "Completa: if-else permite ____ opciones.",
      hint: "Una verdadera y una falsa.",
      type: "code-completion",
      wordBank: ["dos", "tres", "cero", "muchas"],
      correctAnswer: ["dos"]
    },
    {
      title: "If primero",
      question: "Completa: en if-else, primero se evalúa el ____.",
      hint: "Va antes de else.",
      type: "code-completion",
      wordBank: ["if", "else", "for", "print"],
      correctAnswer: ["if"]
    },
    {
      title: "Alternativa",
      question: "Completa: else es la ____ cuando if no se cumple.",
      hint: "Sinónimo de opción distinta.",
      type: "code-completion",
      wordBank: ["alternativa", "variable", "función", "lista"],
      correctAnswer: ["alternativa"]
    },
    {
      title: "Bloque else",
      question: "Completa: else también requiere ____ si tiene varias líneas.",
      hint: "Mismo principio de Python.",
      type: "code-completion",
      wordBank: ["indentación", "llaves", "coma", "tablas"],
      correctAnswer: ["indentación"]
    }
  ],
  "2.4": [
    {
      title: "Elif",
      question: "¿Para qué sirve elif?",
      hint: "Agrega más condiciones.",
      type: "multiple-choice",
      options: ["Para evaluar múltiples casos", "Para terminar el programa", "Para repetir", "Para definir funciones"],
      correctOption: "Para evaluar múltiples casos",
      wordBank: ["elif", "múltiples", "casos"],
      correctAnswer: ["elif", "múltiples", "casos"]
    },
    {
      title: "Orden",
      question: "En una cadena if-elif-else, ¿qué se evalúa primero?",
      hint: "Va en el orden escrito.",
      type: "multiple-choice",
      options: ["if", "else", "elif", "Todas a la vez"],
      correctOption: "if",
      wordBank: ["if", "elif", "else", "orden"],
      correctAnswer: ["if", "elif", "else", "orden"]
    },
    {
      title: "Primera verdadera",
      question: "Si una condición se cumple en elif, las siguientes...",
      hint: "Ya no se revisan.",
      type: "multiple-choice",
      options: ["No se evalúan", "Sí se evalúan", "Dan error", "Se duplican"],
      correctOption: "No se evalúan",
      wordBank: ["primera", "verdadera", "no", "evalúan"],
      correctAnswer: ["primera", "verdadera", "no", "evalúan"]
    },
    {
      title: "Cantidad",
      question: "¿Cuántos elif puedes usar?",
      hint: "No hay un límite práctico fijo.",
      type: "multiple-choice",
      options: ["Varios", "Solo uno", "Ninguno", "Exactamente dos"],
      correctOption: "Varios",
      wordBank: ["elif", "varios"],
      correctAnswer: ["elif", "varios"]
    },
    {
      title: "Rango de nota",
      question: "Completa: if nota >= 9: ... ____ nota >= 7: ...",
      hint: "Condición intermedia.",
      type: "code-completion",
      wordBank: ["elif", "else", "if", "for"],
      correctAnswer: ["elif"]
    },
    {
      title: "Semáforo",
      question: "Completa: if color == \"verde\": ... elif color == \"amarillo\": ... ____: ...",
      hint: "Caso final.",
      type: "code-completion",
      wordBank: ["else", "for", "def", "while"],
      correctAnswer: ["else"]
    },
    {
      title: "Segunda condición",
      question: "Completa: elif se usa para una condición ____.",
      hint: "No es la primera.",
      type: "code-completion",
      wordBank: ["adicional", "vacía", "aleatoria", "cerrada"],
      correctAnswer: ["adicional"]
    },
    {
      title: "Ejemplo",
      question: "Completa: if x == 1: ... elif x == 2: ... elif x == ____: ...",
      hint: "Siguiente caso lógico.",
      type: "code-completion",
      wordBank: ["3", "0", "-1", "\"3\""],
      correctAnswer: ["3"]
    },
    {
      title: "Evaluación",
      question: "Completa: if-elif-else se detiene en la primera condición ____.",
      hint: "Que se cumple.",
      type: "code-completion",
      wordBank: ["verdadera", "falsa", "vacía", "larga"],
      correctAnswer: ["verdadera"]
    },
    {
      title: "Múltiples caminos",
      question: "Completa: elif permite más de ____ caminos de decisión.",
      hint: "Más que if-else.",
      type: "code-completion",
      wordBank: ["dos", "cero", "uno", "ningún"],
      correctAnswer: ["dos"]
    }
  ],
  "2.5": [
    {
      title: "Anidadas",
      question: "¿Qué es una condicional anidada?",
      hint: "Una dentro de otra.",
      type: "multiple-choice",
      options: ["Un if dentro de otro if", "Un ciclo dentro de una lista", "Una función vacía", "Un comentario largo"],
      correctOption: "Un if dentro de otro if",
      wordBank: ["if", "dentro", "otro", "if"],
      correctAnswer: ["if", "dentro", "otro", "if"]
    },
    {
      title: "Uso",
      question: "¿Cuándo conviene usar condicionales anidadas?",
      hint: "Para validar pasos sucesivos.",
      type: "multiple-choice",
      options: ["Cuando una decisión depende de otra", "Para sumar números", "Para imprimir siempre", "Para crear tuplas"],
      correctOption: "Cuando una decisión depende de otra",
      wordBank: ["decisión", "depende", "otra"],
      correctAnswer: ["decisión", "depende", "otra"]
    },
    {
      title: "Lectura",
      question: "Las anidadas deben cuidarse porque pueden volverse...",
      hint: "Dificultad de lectura.",
      type: "multiple-choice",
      options: ["Difíciles de leer", "Más rápidas siempre", "Obligatorias", "Inútiles"],
      correctOption: "Difíciles de leer",
      wordBank: ["difíciles", "leer"],
      correctAnswer: ["difíciles", "leer"]
    },
    {
      title: "Indentación extra",
      question: "Una condicional anidada requiere...",
      hint: "Cada nivel aumenta el sangrado.",
      type: "multiple-choice",
      options: ["Más niveles de indentación", "Menos variables", "Menos líneas", "Punto y coma"],
      correctOption: "Más niveles de indentación",
      wordBank: ["niveles", "indentación"],
      correctAnswer: ["niveles", "indentación"]
    },
    {
      title: "Segundo if",
      question: "Completa: if usuario == \"admin\": ____ activo == True:",
      hint: "Se anida otra condición.",
      type: "code-completion",
      wordBank: ["if", "elif", "else", "for"],
      correctAnswer: ["if"]
    },
    {
      title: "Acceso",
      question: "Completa: if edad >= 18: if tiene_id == True: print(____)",
      hint: "Mensaje de autorización.",
      type: "code-completion",
      wordBank: ["\"Acceso permitido\"", "\"Error\"", "\"Lista\"", "\"Else\""],
      correctAnswer: ["\"Acceso permitido\""]
    },
    {
      title: "Dependencia",
      question: "Completa: una anidada evalúa una condición ____ de otra.",
      hint: "Relación jerárquica.",
      type: "code-completion",
      wordBank: ["dentro", "fuera", "antes", "igual"],
      correctAnswer: ["dentro"]
    },
    {
      title: "Caso final",
      question: "Completa: un if anidado también puede incluir ____.",
      hint: "Alternativa cuando no cumple.",
      type: "code-completion",
      wordBank: ["else", "import", "def", "set"],
      correctAnswer: ["else"]
    },
    {
      title: "Claridad",
      question: "Completa: demasiadas anidadas pueden afectar la ____ del código.",
      hint: "Se entiende peor.",
      type: "code-completion",
      wordBank: ["claridad", "suma", "memoria", "pantalla"],
      correctAnswer: ["claridad"]
    },
    {
      title: "Bloques",
      question: "Completa: cada if anidado crea un nuevo ____.",
      hint: "Agrupación de instrucciones.",
      type: "code-completion",
      wordBank: ["bloque", "texto", "archivo", "teclado"],
      correctAnswer: ["bloque"]
    }
  ],
  "3.1": [
    {
      title: "While",
      question: "¿Cuándo se ejecuta un ciclo while?",
      hint: "Mientras la condición sea verdadera.",
      type: "multiple-choice",
      options: ["Mientras la condición sea verdadera", "Solo una vez", "Cuando es falsa", "Nunca"],
      correctOption: "Mientras la condición sea verdadera",
      wordBank: ["while", "condición", "verdadera"],
      correctAnswer: ["while", "condición", "verdadera"]
    },
    {
      title: "Riesgo",
      question: "¿Qué pasa si la condición nunca cambia?",
      hint: "El ciclo podría no terminar.",
      type: "multiple-choice",
      options: ["Ciclo infinito", "Error de sintaxis", "Se vuelve if", "Nada"],
      correctOption: "Ciclo infinito",
      wordBank: ["ciclo", "infinito"],
      correctAnswer: ["ciclo", "infinito"]
    },
    {
      title: "Primera revisión",
      question: "Si la condición es falsa desde el inicio, while...",
      hint: "No entra al bloque.",
      type: "multiple-choice",
      options: ["No se ejecuta", "Se ejecuta una vez", "Se ejecuta dos veces", "Da error"],
      correctOption: "No se ejecuta",
      wordBank: ["while", "no", "ejecuta"],
      correctAnswer: ["while", "no", "ejecuta"]
    },
    {
      title: "Contador",
      question: "¿Qué suele usarse para controlar un while?",
      hint: "Variable que cambia.",
      type: "multiple-choice",
      options: ["Un contador", "Una tupla", "Un import", "Una clase"],
      correctOption: "Un contador",
      wordBank: ["contador", "while"],
      correctAnswer: ["contador", "while"]
    },
    {
      title: "Contador inicial",
      question: "Completa: i ____ 0",
      hint: "Asigna el valor inicial.",
      type: "code-completion",
      wordBank: ["=", "==", ":", "=>"],
      correctAnswer: ["="]
    },
    {
      title: "Condición",
      question: "Completa: while i < ____:",
      hint: "Límite típico.",
      type: "code-completion",
      wordBank: ["5", "print", "Truee", "\"5\""],
      correctAnswer: ["5"]
    },
    {
      title: "Actualización",
      question: "Completa: i = i ____ 1",
      hint: "Incrementa el contador.",
      type: "code-completion",
      wordBank: ["+", "-", "*", "/"],
      correctAnswer: ["+"]
    },
    {
      title: "Salida",
      question: "Completa: while i < 3: print(i); i = i + ____",
      hint: "Debe avanzar.",
      type: "code-completion",
      wordBank: ["1", "0", "3", "i"],
      correctAnswer: ["1"]
    },
    {
      title: "Palabra clave",
      question: "Completa: el ciclo usa la palabra ____.",
      hint: "Empieza con w.",
      type: "code-completion",
      wordBank: ["while", "for", "if", "def"],
      correctAnswer: ["while"]
    },
    {
      title: "Finalidad",
      question: "Completa: while repite un bloque mientras una condición sea ____.",
      hint: "No falsa.",
      type: "code-completion",
      wordBank: ["verdadera", "nula", "vacía", "rota"],
      correctAnswer: ["verdadera"]
    }
  ],
  "3.2": [
    {
      title: "For",
      question: "¿Para qué sirve el ciclo for en Python?",
      hint: "Recorre elementos o rangos.",
      type: "multiple-choice",
      options: ["Para iterar sobre elementos", "Para definir funciones", "Para comentar", "Para importar"],
      correctOption: "Para iterar sobre elementos",
      wordBank: ["for", "iterar", "elementos"],
      correctAnswer: ["for", "iterar", "elementos"]
    },
    {
      title: "Rango",
      question: "¿Qué función se usa comúnmente con for para repetir varias veces?",
      hint: "Genera secuencias de números.",
      type: "multiple-choice",
      options: ["range()", "print()", "input()", "type()"],
      correctOption: "range()",
      wordBank: ["range", "for"],
      correctAnswer: ["range", "for"]
    },
    {
      title: "Lista",
      question: "¿Cuál línea recorre una lista llamada nombres?",
      hint: "Usa in.",
      type: "multiple-choice",
      options: ["for n in nombres:", "for(nombres)", "while nombres:", "if nombres:"],
      correctOption: "for n in nombres:",
      wordBank: ["for", "n", "in", "nombres", ":"],
      correctAnswer: ["for", "n", "in", "nombres", ":"]
    },
    {
      title: "Número de repeticiones",
      question: "range(5) genera valores desde...",
      hint: "Empieza en 0.",
      type: "multiple-choice",
      options: ["0 hasta 4", "1 hasta 5", "0 hasta 5", "1 hasta 4"],
      correctOption: "0 hasta 4",
      wordBank: ["0", "4", "range", "5"],
      correctAnswer: ["0", "4"]
    },
    {
      title: "Sintaxis base",
      question: "Completa: ____ i in range(3):",
      hint: "Palabra reservada del ciclo.",
      type: "code-completion",
      wordBank: ["for", "while", "if", "def"],
      correctAnswer: ["for"]
    },
    {
      title: "Recorrido",
      question: "Completa: for letra ____ \"hola\":",
      hint: "Conector de pertenencia.",
      type: "code-completion",
      wordBank: ["in", "on", "at", "to"],
      correctAnswer: ["in"]
    },
    {
      title: "Inicio-fin",
      question: "Completa: range(1, 4) produce 1, 2 y ____.",
      hint: "No incluye el 4.",
      type: "code-completion",
      wordBank: ["3", "4", "5", "0"],
      correctAnswer: ["3"]
    },
    {
      title: "Variable de ciclo",
      question: "Completa: for ____ in lista:",
      hint: "Nombre común de iteración.",
      type: "code-completion",
      wordBank: ["item", "print", "input", "int"],
      correctAnswer: ["item"]
    },
    {
      title: "Rango con salto",
      question: "Completa: range(0, 10, ____)",
      hint: "Salto de dos en dos.",
      type: "code-completion",
      wordBank: ["2", "0", "1", "10"],
      correctAnswer: ["2"]
    },
    {
      title: "Propósito",
      question: "Completa: for es útil cuando sabes cuántas veces ____.",
      hint: "Se repetirá.",
      type: "code-completion",
      wordBank: ["repetir", "saltar", "cerrar", "copiar"],
      correctAnswer: ["repetir"]
    }
  ],
  "3.3": [
    {
      title: "Break",
      question: "¿Qué hace break en un ciclo?",
      hint: "Lo detiene por completo.",
      type: "multiple-choice",
      options: ["Sale del ciclo", "Reinicia el ciclo", "Ignora una vuelta", "Crea un error"],
      correctOption: "Sale del ciclo",
      wordBank: ["break", "sale", "ciclo"],
      correctAnswer: ["break", "sale", "ciclo"]
    },
    {
      title: "Continue",
      question: "¿Qué hace continue?",
      hint: "Salta a la siguiente iteración.",
      type: "multiple-choice",
      options: ["Omite la iteración actual", "Termina el programa", "Borra variables", "Cierra Python"],
      correctOption: "Omite la iteración actual",
      wordBank: ["continue", "omite", "iteración"],
      correctAnswer: ["continue", "omite", "iteración"]
    },
    {
      title: "Pass",
      question: "¿Para qué sirve pass?",
      hint: "Es un marcador vacío.",
      type: "multiple-choice",
      options: ["Para no hacer nada temporalmente", "Para salir del ciclo", "Para repetir dos veces", "Para sumar"],
      correctOption: "Para no hacer nada temporalmente",
      wordBank: ["pass", "nada", "temporalmente"],
      correctAnswer: ["pass", "nada", "temporalmente"]
    },
    {
      title: "Uso de break",
      question: "¿Cuándo usarías break?",
      hint: "Cuando ya encontraste lo que buscas.",
      type: "multiple-choice",
      options: ["Para terminar antes el ciclo", "Para imprimir siempre", "Para definir una lista", "Para comentar"],
      correctOption: "Para terminar antes el ciclo",
      wordBank: ["terminar", "antes", "ciclo"],
      correctAnswer: ["terminar", "antes", "ciclo"]
    },
    {
      title: "Salir del bucle",
      question: "Completa: if x == 5: ____",
      hint: "Detén el ciclo.",
      type: "code-completion",
      wordBank: ["break", "continue", "pass", "print"],
      correctAnswer: ["break"]
    },
    {
      title: "Saltar vuelta",
      question: "Completa: if x == 5: ____",
      hint: "No procesa esa iteración.",
      type: "code-completion",
      wordBank: ["continue", "break", "pass", "range"],
      correctAnswer: ["continue"]
    },
    {
      title: "Bloque vacío",
      question: "Completa: if x > 0: ____",
      hint: "No hace nada por ahora.",
      type: "code-completion",
      wordBank: ["pass", "break", "continue", "len"],
      correctAnswer: ["pass"]
    },
    {
      title: "Efecto",
      question: "Completa: break termina el ____ actual.",
      hint: "Piensa en while o for.",
      type: "code-completion",
      wordBank: ["ciclo", "archivo", "texto", "módulo"],
      correctAnswer: ["ciclo"]
    },
    {
      title: "Siguiente repetición",
      question: "Completa: continue pasa a la siguiente ____.",
      hint: "Unidad del ciclo.",
      type: "code-completion",
      wordBank: ["iteración", "función", "lista", "condición"],
      correctAnswer: ["iteración"]
    },
    {
      title: "Marcador",
      question: "Completa: pass se usa cuando el bloque aún no está ____.",
      hint: "Todavía no lo escribes.",
      type: "code-completion",
      wordBank: ["implementado", "cerrado", "sumado", "ejecutado"],
      correctAnswer: ["implementado"]
    }
  ],
  "4.1": [
    {
      title: "Lista",
      question: "¿Con qué símbolos se define una lista?",
      hint: "Usa corchetes.",
      type: "multiple-choice",
      options: ["[]", "()", "{}", "<>"],
      correctOption: "[]",
      wordBank: ["[", "]", "lista"],
      correctAnswer: ["[", "]", "lista"]
    },
    {
      title: "Primer elemento",
      question: "¿Cómo accedes al primer elemento de lista?",
      hint: "El índice inicia en 0.",
      type: "multiple-choice",
      options: ["lista[0]", "lista[1]", "lista(-1)", "lista(0)"],
      correctOption: "lista[0]",
      wordBank: ["lista", "[0]"],
      correctAnswer: ["lista", "[0]"]
    },
    {
      title: "Agregar",
      question: "¿Qué método agrega un elemento al final de una lista?",
      hint: "Muy común.",
      type: "multiple-choice",
      options: ["append()", "add()", "push()", "insertEnd()"],
      correctOption: "append()",
      wordBank: ["append", "lista"],
      correctAnswer: ["append", "lista"]
    },
    {
      title: "Modificar",
      question: "¿Se pueden modificar los elementos de una lista?",
      hint: "Las listas son mutables.",
      type: "multiple-choice",
      options: ["Sí", "No"],
      correctOption: "Sí",
      wordBank: ["listas", "mutables"],
      correctAnswer: ["listas", "mutables"]
    },
    {
      title: "Crear lista",
      question: "Completa: numeros = ____",
      hint: "Tres enteros.",
      type: "code-completion",
      wordBank: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "\"1,2,3\""],
      correctAnswer: ["[1, 2, 3]"]
    },
    {
      title: "Segundo elemento",
      question: "Completa: numeros[____] accede al segundo valor.",
      hint: "El índice inicia en cero.",
      type: "code-completion",
      wordBank: ["1", "2", "0", "-2"],
      correctAnswer: ["1"]
    },
    {
      title: "Agregar método",
      question: "Completa: numeros.____(4)",
      hint: "Añade al final.",
      type: "code-completion",
      wordBank: ["append", "add", "push", "insert"],
      correctAnswer: ["append"]
    },
    {
      title: "Longitud",
      question: "Completa: len(____)",
      hint: "Nombre de la lista.",
      type: "code-completion",
      wordBank: ["numeros", "append", "print", "int"],
      correctAnswer: ["numeros"]
    },
    {
      title: "Eliminar final",
      question: "Completa: numeros.____()",
      hint: "Quita el último.",
      type: "code-completion",
      wordBank: ["pop", "append", "sort", "clearall"],
      correctAnswer: ["pop"]
    },
    {
      title: "Ordenar",
      question: "Completa: numeros.____()",
      hint: "Ordena ascendentemente.",
      type: "code-completion",
      wordBank: ["sort", "append", "pop", "copy"],
      correctAnswer: ["sort"]
    }
  ],
  "4.2": [
    {
      title: "Tupla",
      question: "¿Con qué símbolos se define normalmente una tupla?",
      hint: "Usa paréntesis.",
      type: "multiple-choice",
      options: ["()", "[]", "{}", "<>"],
      correctOption: "()",
      wordBank: ["(", ")", "tupla"],
      correctAnswer: ["(", ")", "tupla"]
    },
    {
      title: "Mutabilidad",
      question: "¿Una tupla se puede modificar después de creada?",
      hint: "A diferencia de la lista.",
      type: "multiple-choice",
      options: ["No", "Sí"],
      correctOption: "No",
      wordBank: ["tupla", "inmutable"],
      correctAnswer: ["tupla", "inmutable"]
    },
    {
      title: "Acceso",
      question: "¿Cómo accedes al primer elemento de una tupla t?",
      hint: "Mismo estilo de índice.",
      type: "multiple-choice",
      options: ["t[0]", "t(0)", "t{0}", "t<-0>"],
      correctOption: "t[0]",
      wordBank: ["t", "[0]"],
      correctAnswer: ["t", "[0]"]
    },
    {
      title: "Uso",
      question: "¿Cuándo conviene usar una tupla?",
      hint: "Cuando los datos no cambian.",
      type: "multiple-choice",
      options: ["Cuando quieres datos inmutables", "Cuando quieres agregar mucho", "Cuando necesitas claves", "Cuando quieres métodos append"],
      correctOption: "Cuando quieres datos inmutables",
      wordBank: ["datos", "inmutables", "tupla"],
      correctAnswer: ["datos", "inmutables", "tupla"]
    },
    {
      title: "Crear tupla",
      question: "Completa: punto = ____",
      hint: "Par de coordenadas.",
      type: "code-completion",
      wordBank: ["(4, 5)", "[4, 5]", "{4, 5}", "\"4,5\""],
      correctAnswer: ["(4, 5)"]
    },
    {
      title: "Elemento dos",
      question: "Completa: punto[____] devuelve 5.",
      hint: "Segundo índice.",
      type: "code-completion",
      wordBank: ["1", "0", "2", "-3"],
      correctAnswer: ["1"]
    },
    {
      title: "Inmutabilidad",
      question: "Completa: una tupla es ____.",
      hint: "No cambia.",
      type: "code-completion",
      wordBank: ["inmutable", "mutable", "vacía", "booleana"],
      correctAnswer: ["inmutable"]
    },
    {
      title: "Un elemento",
      question: "Completa: sola = (7, ____)",
      hint: "La coma la convierte en tupla.",
      type: "code-completion",
      wordBank: [",", "7", ")", "["],
      correctAnswer: [","]
    },
    {
      title: "Longitud",
      question: "Completa: len(____)",
      hint: "Nombre de la tupla.",
      type: "code-completion",
      wordBank: ["punto", "tuple", "print", "int"],
      correctAnswer: ["punto"]
    },
    {
      title: "Conversión",
      question: "Completa: tuple([1,2,3]) crea una ____.",
      hint: "Estructura resultante.",
      type: "code-completion",
      wordBank: ["tupla", "lista", "cadena", "clave"],
      correctAnswer: ["tupla"]
    }
  ],
  "4.3": [
    {
      title: "Diccionario",
      question: "¿Qué estructura guarda pares clave-valor?",
      hint: "Muy usada para datos asociados.",
      type: "multiple-choice",
      options: ["Diccionario", "Lista", "Tupla", "While"],
      correctOption: "Diccionario",
      wordBank: ["clave", "valor", "diccionario"],
      correctAnswer: ["clave", "valor", "diccionario"]
    },
    {
      title: "Acceso por clave",
      question: "¿Cómo accedes al valor de la clave 'nombre' en persona?",
      hint: "Usa corchetes y la clave.",
      type: "multiple-choice",
      options: ["persona[\"nombre\"]", "persona[0]", "persona.nombre()", "get(persona,nombre)"],
      correctOption: "persona[\"nombre\"]",
      wordBank: ["persona", "[\"nombre\"]"],
      correctAnswer: ["persona", "[\"nombre\"]"]
    },
    {
      title: "Símbolos",
      question: "¿Qué símbolos suelen iniciar un diccionario?",
      hint: "Pueden confundirse con set.",
      type: "multiple-choice",
      options: ["{}", "[]", "()", "<>"],
      correctOption: "{}",
      wordBank: ["{", "}", "diccionario"],
      correctAnswer: ["{", "}", "diccionario"]
    },
    {
      title: "Método",
      question: "¿Qué método devuelve las claves de un diccionario?",
      hint: "Empieza con k.",
      type: "multiple-choice",
      options: ["keys()", "values()", "items()", "append()"],
      correctOption: "keys()",
      wordBank: ["keys", "diccionario"],
      correctAnswer: ["keys", "diccionario"]
    },
    {
      title: "Crear dict",
      question: "Completa: persona = ____",
      hint: "Debe tener clave y valor.",
      type: "code-completion",
      wordBank: ["{\"nombre\": \"Ana\"}", "[\"nombre\", \"Ana\"]", "(\"nombre\", \"Ana\")", "{\"Ana\"}"],
      correctAnswer: ["{\"nombre\": \"Ana\"}"]
    },
    {
      title: "Agregar clave",
      question: "Completa: persona[\"edad\"] = ____",
      hint: "Asignar un entero.",
      type: "code-completion",
      wordBank: ["20", "\"20\"", "edad", "==20"],
      correctAnswer: ["20"]
    },
    {
      title: "Valores",
      question: "Completa: persona.____() devuelve los valores.",
      hint: "Complemento de keys.",
      type: "code-completion",
      wordBank: ["values", "keys", "append", "sort"],
      correctAnswer: ["values"]
    },
    {
      title: "Pares",
      question: "Completa: persona.____() devuelve clave y valor.",
      hint: "Todos los ítems.",
      type: "code-completion",
      wordBank: ["items", "values", "keys", "getall"],
      correctAnswer: ["items"]
    },
    {
      title: "Obtener seguro",
      question: "Completa: persona.____(\"nombre\")",
      hint: "Método útil si la clave puede no existir.",
      type: "code-completion",
      wordBank: ["get", "keys", "values", "pop"],
      correctAnswer: ["get"]
    },
    {
      title: "Eliminar",
      question: "Completa: persona.____(\"edad\")",
      hint: "Quita una clave.",
      type: "code-completion",
      wordBank: ["pop", "append", "add", "sort"],
      correctAnswer: ["pop"]
    }
  ],
  "4.4": [
    {
      title: "Set",
      question: "¿Qué estructura no permite elementos duplicados?",
      hint: "Colección sin repetidos.",
      type: "multiple-choice",
      options: ["set", "list", "tuple", "dict"],
      correctOption: "set",
      wordBank: ["set", "sin", "duplicados"],
      correctAnswer: ["set", "sin", "duplicados"]
    },
    {
      title: "Característica",
      question: "¿Los conjuntos mantienen orden fijo?",
      hint: "Generalmente se consideran no ordenados.",
      type: "multiple-choice",
      options: ["No", "Sí"],
      correctOption: "No",
      wordBank: ["set", "no", "ordenado"],
      correctAnswer: ["set", "no", "ordenado"]
    },
    {
      title: "Agregar",
      question: "¿Qué método agrega un elemento a un set?",
      hint: "No es append.",
      type: "multiple-choice",
      options: ["add()", "append()", "push()", "insert()"],
      correctOption: "add()",
      wordBank: ["add", "set"],
      correctAnswer: ["add", "set"]
    },
    {
      title: "Duplicados",
      question: "Si agregas dos veces el mismo valor a un set...",
      hint: "Solo queda una copia.",
      type: "multiple-choice",
      options: ["No se duplica", "Se duplica", "Da error", "Se convierte en lista"],
      correctOption: "No se duplica",
      wordBank: ["set", "no", "duplica"],
      correctAnswer: ["set", "no", "duplica"]
    },
    {
      title: "Crear set",
      question: "Completa: letras = ____",
      hint: "Tres letras distintas.",
      type: "code-completion",
      wordBank: ["{\"a\", \"b\", \"c\"}", "[\"a\", \"b\", \"c\"]", "(\"a\", \"b\", \"c\")", "{\"a\":1}"],
      correctAnswer: ["{\"a\", \"b\", \"c\"}"]
    },
    {
      title: "Agregar elemento",
      question: "Completa: letras.____(\"d\")",
      hint: "Método del set.",
      type: "code-completion",
      wordBank: ["add", "append", "insert", "sort"],
      correctAnswer: ["add"]
    },
    {
      title: "Longitud",
      question: "Completa: len(____)",
      hint: "Nombre del set.",
      type: "code-completion",
      wordBank: ["letras", "add", "set", "print"],
      correctAnswer: ["letras"]
    },
    {
      title: "Eliminar",
      question: "Completa: letras.____(\"a\")",
      hint: "Quita un elemento si existe.",
      type: "code-completion",
      wordBank: ["remove", "append", "popitem", "clearall"],
      correctAnswer: ["remove"]
    },
    {
      title: "Conversión",
      question: "Completa: set([1,1,2,3]) elimina los ____.",
      hint: "Valores repetidos.",
      type: "code-completion",
      wordBank: ["duplicados", "enteros", "textos", "índices"],
      correctAnswer: ["duplicados"]
    },
    {
      title: "Operación",
      question: "Completa: A | B representa la ____ de conjuntos.",
      hint: "Combina elementos.",
      type: "code-completion",
      wordBank: ["unión", "resta", "lista", "clave"],
      correctAnswer: ["unión"]
    }
  ],
  "5.1": [
    {
      title: "Definir función",
      question: "¿Qué palabra clave define una función?",
      hint: "Empieza con d.",
      type: "multiple-choice",
      options: ["def", "func", "function", "lambda"],
      correctOption: "def",
      wordBank: ["def", "función"],
      correctAnswer: ["def", "función"]
    },
    {
      title: "Llamada",
      question: "¿Cómo llamas una función llamada saludar?",
      hint: "Usa paréntesis.",
      type: "multiple-choice",
      options: ["saludar()", "call saludar", "run saludar", "saludar[]"],
      correctOption: "saludar()",
      wordBank: ["saludar", "()"],
      correctAnswer: ["saludar", "()"]
    },
    {
      title: "Parámetro",
      question: "¿Qué son los parámetros de una función?",
      hint: "Datos que recibe.",
      type: "multiple-choice",
      options: ["Variables de entrada", "Errores", "Comentarios", "Ciclos"],
      correctOption: "Variables de entrada",
      wordBank: ["parámetros", "entrada"],
      correctAnswer: ["parámetros", "entrada"]
    },
    {
      title: "Retorno",
      question: "¿Qué palabra devuelve un valor desde una función?",
      hint: "Muy común.",
      type: "multiple-choice",
      options: ["return", "print", "input", "pass"],
      correctOption: "return",
      wordBank: ["return", "valor"],
      correctAnswer: ["return", "valor"]
    },
    {
      title: "Def básica",
      question: "Completa: ____ saludar():",
      hint: "Palabra reservada.",
      type: "code-completion",
      wordBank: ["def", "for", "if", "class"],
      correctAnswer: ["def"]
    },
    {
      title: "Print en función",
      question: "Completa: def saludar(): ____ (\"Hola\")",
      hint: "Función de salida.",
      type: "code-completion",
      wordBank: ["print", "input", "type", "len"],
      correctAnswer: ["print"]
    },
    {
      title: "Parámetro nombre",
      question: "Completa: def saludar(____):",
      hint: "Dato recibido.",
      type: "code-completion",
      wordBank: ["nombre", "return", "print", "Hola"],
      correctAnswer: ["nombre"]
    },
    {
      title: "Retornar suma",
      question: "Completa: def sumar(a,b): ____ a + b",
      hint: "Palabra reservada para devolver.",
      type: "code-completion",
      wordBank: ["return", "print", "input", "pass"],
      correctAnswer: ["return"]
    },
    {
      title: "Invocación",
      question: "Completa: resultado = sumar(2, ____)",
      hint: "Segundo argumento.",
      type: "code-completion",
      wordBank: ["3", "sumar", "a", "b"],
      correctAnswer: ["3"]
    },
    {
      title: "Utilidad",
      question: "Completa: las funciones sirven para ____ código.",
      hint: "No repetirlo.",
      type: "code-completion",
      wordBank: ["reutilizar", "romper", "borrar", "copiar"],
      correctAnswer: ["reutilizar"]
    }
  ],
  "5.2": [
    {
      title: "Lambda",
      question: "¿Qué es una función lambda?",
      hint: "Función pequeña y anónima.",
      type: "multiple-choice",
      options: ["Una función anónima", "Una lista especial", "Un ciclo", "Un tipo de error"],
      correctOption: "Una función anónima",
      wordBank: ["lambda", "anónima"],
      correctAnswer: ["lambda", "anónima"]
    },
    {
      title: "Palabra clave",
      question: "¿Qué palabra crea una lambda?",
      hint: "Igual que su nombre.",
      type: "multiple-choice",
      options: ["lambda", "def", "return", "anon"],
      correctOption: "lambda",
      wordBank: ["lambda"],
      correctAnswer: ["lambda"]
    },
    {
      title: "Uso común",
      question: "Las lambdas suelen usarse en funciones como...",
      hint: "Ejemplos de ordenación y mapeo.",
      type: "multiple-choice",
      options: ["map y filter", "print e input", "while y if", "dict y set"],
      correctOption: "map y filter",
      wordBank: ["map", "filter", "lambda"],
      correctAnswer: ["map", "filter", "lambda"]
    },
    {
      title: "Cantidad",
      question: "Una lambda normalmente se usa para...",
      hint: "Expresión corta.",
      type: "multiple-choice",
      options: ["Expresiones simples", "Programas completos", "Comentarios", "Importaciones"],
      correctOption: "Expresiones simples",
      wordBank: ["expresiones", "simples"],
      correctAnswer: ["expresiones", "simples"]
    },
    {
      title: "Lambda suma",
      question: "Completa: suma = ____ a, b: a + b",
      hint: "Palabra reservada.",
      type: "code-completion",
      wordBank: ["lambda", "def", "return", "map"],
      correctAnswer: ["lambda"]
    },
    {
      title: "Un parámetro",
      question: "Completa: doble = lambda x: x ____ 2",
      hint: "Operación de multiplicación.",
      type: "code-completion",
      wordBank: ["*", "+", "-", "/"],
      correctAnswer: ["*"]
    },
    {
      title: "Llamada lambda",
      question: "Completa: doble(____)",
      hint: "Valor de prueba.",
      type: "code-completion",
      wordBank: ["4", "x", "lambda", "*"],
      correctAnswer: ["4"]
    },
    {
      title: "Mapeo",
      question: "Completa: map(____ x: x * 2, [1,2,3])",
      hint: "Función anónima.",
      type: "code-completion",
      wordBank: ["lambda", "def", "if", "for"],
      correctAnswer: ["lambda"]
    },
    {
      title: "Filtro",
      question: "Completa: filter(lambda x: x > 0, ____)",
      hint: "Colección de entrada.",
      type: "code-completion",
      wordBank: ["lista", "return", "if", "print"],
      correctAnswer: ["lista"]
    },
    {
      title: "Característica",
      question: "Completa: una lambda no necesita nombre ____.",
      hint: "Es opcional.",
      type: "code-completion",
      wordBank: ["explícito", "booleano", "numérico", "final"],
      correctAnswer: ["explícito"]
    }
  ],
  "5.3": [
    {
      title: "len",
      question: "¿Qué hace len()?",
      hint: "Cuenta elementos.",
      type: "multiple-choice",
      options: ["Devuelve la longitud", "Convierte a entero", "Imprime", "Ordena"],
      correctOption: "Devuelve la longitud",
      wordBank: ["len", "longitud"],
      correctAnswer: ["len", "longitud"]
    },
    {
      title: "type",
      question: "¿Qué hace type()?",
      hint: "Indica clase de dato.",
      type: "multiple-choice",
      options: ["Muestra el tipo de dato", "Lee entrada", "Suma listas", "Crea una función"],
      correctOption: "Muestra el tipo de dato",
      wordBank: ["type", "tipo", "dato"],
      correctAnswer: ["type", "tipo", "dato"]
    },
    {
      title: "int",
      question: "¿Qué hace int(\"5\")?",
      hint: "Convierte texto numérico.",
      type: "multiple-choice",
      options: ["Convierte a entero", "Convierte a lista", "Imprime cinco", "Da falso"],
      correctOption: "Convierte a entero",
      wordBank: ["int", "entero"],
      correctAnswer: ["int", "entero"]
    },
    {
      title: "str",
      question: "¿Qué hace str(25)?",
      hint: "Pasa a cadena.",
      type: "multiple-choice",
      options: ["Convierte a texto", "Convierte a bool", "Resta 25", "Ordena"],
      correctOption: "Convierte a texto",
      wordBank: ["str", "texto"],
      correctAnswer: ["str", "texto"]
    },
    {
      title: "Longitud lista",
      question: "Completa: ____([1,2,3])",
      hint: "Cuenta elementos.",
      type: "code-completion",
      wordBank: ["len", "type", "int", "sum"],
      correctAnswer: ["len"]
    },
    {
      title: "Tipo dato",
      question: "Completa: ____ (3.14)",
      hint: "Identifica float.",
      type: "code-completion",
      wordBank: ["type", "len", "str", "list"],
      correctAnswer: ["type"]
    },
    {
      title: "Suma integrada",
      question: "Completa: ____([1,2,3]) devuelve 6",
      hint: "Función integrada.",
      type: "code-completion",
      wordBank: ["sum", "len", "max", "min"],
      correctAnswer: ["sum"]
    },
    {
      title: "Máximo",
      question: "Completa: ____([4,9,2]) devuelve 9",
      hint: "Valor más alto.",
      type: "code-completion",
      wordBank: ["max", "min", "sum", "round"],
      correctAnswer: ["max"]
    },
    {
      title: "Mínimo",
      question: "Completa: ____([4,9,2]) devuelve 2",
      hint: "Valor más bajo.",
      type: "code-completion",
      wordBank: ["min", "max", "sum", "type"],
      correctAnswer: ["min"]
    },
    {
      title: "Redondeo",
      question: "Completa: ____ (3.7) devuelve 4",
      hint: "Aproxima el valor.",
      type: "code-completion",
      wordBank: ["round", "int", "float", "abs"],
      correctAnswer: ["round"]
    }
  ],
  "6.1": [
    {
      title: "Sintaxis",
      question: "¿Qué tipo de error ocurre si escribes mal la estructura del código?",
      hint: "Antes de ejecutar.",
      type: "multiple-choice",
      options: ["Error de sintaxis", "Error lógico", "Error semántico", "Error visual"],
      correctOption: "Error de sintaxis",
      wordBank: ["error", "sintaxis"],
      correctAnswer: ["error", "sintaxis"]
    },
    {
      title: "Ejecución",
      question: "¿Qué error ocurre durante la ejecución del programa?",
      hint: "Por ejemplo división entre cero.",
      type: "multiple-choice",
      options: ["Runtime o ejecución", "Comentario", "Indentación visual", "Estilo"],
      correctOption: "Runtime o ejecución",
      wordBank: ["error", "ejecución"],
      correctAnswer: ["error", "ejecución"]
    },
    {
      title: "Lógico",
      question: "Un error lógico produce...",
      hint: "El programa corre pero falla el resultado.",
      type: "multiple-choice",
      options: ["Resultados incorrectos", "Cierre inmediato siempre", "Comentarios rotos", "Instalación fallida"],
      correctOption: "Resultados incorrectos",
      wordBank: ["resultados", "incorrectos", "lógico"],
      correctAnswer: ["resultados", "incorrectos", "lógico"]
    },
    {
      title: "NameError",
      question: "¿Qué ocurre si usas una variable no definida?",
      hint: "Nombre inexistente.",
      type: "multiple-choice",
      options: ["NameError", "TypeError", "IndexError", "KeyError"],
      correctOption: "NameError",
      wordBank: ["NameError", "variable"],
      correctAnswer: ["NameError", "variable"]
    },
    {
      title: "ZeroDivisionError",
      question: "Completa: dividir entre 5 y ____ causa un error de división.",
      hint: "No se puede dividir entre este valor.",
      type: "code-completion",
      wordBank: ["0", "1", "5", "-1"],
      correctAnswer: ["0"]
    },
    {
      title: "Indentación",
      question: "Completa: una mala sangría puede causar un error de ____.",
      hint: "Relacionada con espacios.",
      type: "code-completion",
      wordBank: ["indentación", "diccionario", "lista", "suma"],
      correctAnswer: ["indentación"]
    },
    {
      title: "Tipo incorrecto",
      question: "Completa: sumar \"2\" + 3 puede generar ____.",
      hint: "Incompatibilidad de tipos.",
      type: "code-completion",
      wordBank: ["TypeError", "KeyError", "ImportError", "StopError"],
      correctAnswer: ["TypeError"]
    },
    {
      title: "Índice",
      question: "Completa: acceder a lista[10] cuando no existe puede generar ____.",
      hint: "Fuera de rango.",
      type: "code-completion",
      wordBank: ["IndexError", "ValueError", "SyntaxError", "NameError"],
      correctAnswer: ["IndexError"]
    },
    {
      title: "Clave",
      question: "Completa: buscar una clave inexistente en un dict puede causar ____.",
      hint: "Error de clave.",
      type: "code-completion",
      wordBank: ["KeyError", "TypeError", "EOFError", "LoopError"],
      correctAnswer: ["KeyError"]
    },
    {
      title: "Conversión",
      question: "Completa: int(\"hola\") puede producir ____.",
      hint: "Valor no convertible.",
      type: "code-completion",
      wordBank: ["ValueError", "NameError", "FileError", "CodeError"],
      correctAnswer: ["ValueError"]
    }
  ],
  "6.2": [
    {
      title: "try-except",
      question: "¿Para qué sirve try-except?",
      hint: "Maneja errores sin detener todo el programa.",
      type: "multiple-choice",
      options: ["Para manejar excepciones", "Para crear ciclos", "Para definir listas", "Para comentar"],
      correctOption: "Para manejar excepciones",
      wordBank: ["try", "except", "manejar", "excepciones"],
      correctAnswer: ["try", "except", "manejar", "excepciones"]
    },
    {
      title: "Try",
      question: "¿Qué bloque contiene el código que podría fallar?",
      hint: "Va primero.",
      type: "multiple-choice",
      options: ["try", "except", "finally", "else"],
      correctOption: "try",
      wordBank: ["try", "bloque"],
      correctAnswer: ["try", "bloque"]
    },
    {
      title: "Except",
      question: "¿Qué bloque se ejecuta si ocurre una excepción?",
      hint: "Captura el error.",
      type: "multiple-choice",
      options: ["except", "try", "def", "for"],
      correctOption: "except",
      wordBank: ["except", "error"],
      correctAnswer: ["except", "error"]
    },
    {
      title: "Continuidad",
      question: "¿Qué ventaja tiene usar try-except?",
      hint: "Evita que el programa termine abruptamente.",
      type: "multiple-choice",
      options: ["Permite controlar errores", "Hace el código más corto siempre", "Elimina bugs automáticamente", "Duplica variables"],
      correctOption: "Permite controlar errores",
      wordBank: ["controlar", "errores"],
      correctAnswer: ["controlar", "errores"]
    },
    {
      title: "Bloque inicial",
      question: "Completa: ____:",
      hint: "Comienza el manejo.",
      type: "code-completion",
      wordBank: ["try", "except", "finally", "if"],
      correctAnswer: ["try"]
    },
    {
      title: "Captura",
      question: "Completa: ____ ValueError:",
      hint: "Bloque de captura específico.",
      type: "code-completion",
      wordBank: ["except", "try", "finally", "for"],
      correctAnswer: ["except"]
    },
    {
      title: "Conversión segura",
      question: "Completa: try: numero = ____ (input())",
      hint: "Conversión de entero.",
      type: "code-completion",
      wordBank: ["int", "str", "len", "type"],
      correctAnswer: ["int"]
    },
    {
      title: "Mensaje de error",
      question: "Completa: except: ____ (\"Error\")",
      hint: "Muestra aviso.",
      type: "code-completion",
      wordBank: ["print", "input", "len", "return"],
      correctAnswer: ["print"]
    },
    {
      title: "Palabra clave",
      question: "Completa: try-except maneja ____.",
      hint: "Otro nombre para errores controlables.",
      type: "code-completion",
      wordBank: ["excepciones", "listas", "tuplas", "variables"],
      correctAnswer: ["excepciones"]
    },
    {
      title: "Valor específico",
      question: "Completa: except ____:",
      hint: "Tipo de error común por conversión.",
      type: "code-completion",
      wordBank: ["ValueError", "PrintError", "LoopError", "MathError"],
      correctAnswer: ["ValueError"]
    }
  ],
  "6.3": [
    {
      title: "finally",
      question: "¿Cuándo se ejecuta finally?",
      hint: "Haya error o no.",
      type: "multiple-choice",
      options: ["Siempre al final del bloque try", "Solo si no hay error", "Solo si hay error", "Nunca"],
      correctOption: "Siempre al final del bloque try",
      wordBank: ["finally", "siempre", "final"],
      correctAnswer: ["finally", "siempre", "final"]
    },
    {
      title: "Uso común",
      question: "finally se usa mucho para...",
      hint: "Liberar recursos.",
      type: "multiple-choice",
      options: ["Cerrar archivos o conexiones", "Crear listas", "Declarar variables", "Hacer comentarios"],
      correctOption: "Cerrar archivos o conexiones",
      wordBank: ["cerrar", "archivos", "conexiones"],
      correctAnswer: ["cerrar", "archivos", "conexiones"]
    },
    {
      title: "Orden",
      question: "¿Cuál orden es correcto?",
      hint: "Bloques de manejo.",
      type: "multiple-choice",
      options: ["try - except - finally", "except - try - finally", "finally - try - except", "try - finally - except"],
      correctOption: "try - except - finally",
      wordBank: ["try", "except", "finally"],
      correctAnswer: ["try", "except", "finally"]
    },
    {
      title: "Sin excepción",
      question: "Si no ocurre error, finally...",
      hint: "Aun así corre.",
      type: "multiple-choice",
      options: ["También se ejecuta", "No se ejecuta", "Se convierte en else", "Da error"],
      correctOption: "También se ejecuta",
      wordBank: ["finally", "también", "ejecuta"],
      correctAnswer: ["finally", "también", "ejecuta"]
    },
    {
      title: "Bloque final",
      question: "Completa: ____:",
      hint: "Palabra reservada de cierre.",
      type: "code-completion",
      wordBank: ["finally", "except", "while", "lambda"],
      correctAnswer: ["finally"]
    },
    {
      title: "Cerrar archivo",
      question: "Completa: finally: archivo.____()",
      hint: "Método típico.",
      type: "code-completion",
      wordBank: ["close", "open", "read", "write"],
      correctAnswer: ["close"]
    },
    {
      title: "Limpieza",
      question: "Completa: finally se usa para tareas de ____.",
      hint: "Se liberan recursos.",
      type: "code-completion",
      wordBank: ["limpieza", "suma", "entrada", "comparación"],
      correctAnswer: ["limpieza"]
    },
    {
      title: "Conexión",
      question: "Completa: finally puede cerrar una ____ a base de datos.",
      hint: "Recurso externo.",
      type: "code-completion",
      wordBank: ["conexión", "lista", "tupla", "clase"],
      correctAnswer: ["conexión"]
    },
    {
      title: "Garantía",
      question: "Completa: finally garantiza una acción al ____ del proceso.",
      hint: "Momento final.",
      type: "code-completion",
      wordBank: ["final", "inicio", "medio", "borde"],
      correctAnswer: ["final"]
    },
    {
      title: "Ejemplo",
      question: "Completa: try: ... except: ... finally: ____ (\"Fin\")",
      hint: "Muestra un cierre.",
      type: "code-completion",
      wordBank: ["print", "input", "len", "type"],
      correctAnswer: ["print"]
    }
  ]
};
