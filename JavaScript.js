console.log("Hola Mundo")
console.log("Aqui es mi primer programa en JavaScript")
console.log(12334)
//--------------------Tipos de datos --------------------

/* Let declara una variable modificable */

let nombre = "oscar"
let edad = 18

console.log(nombre)

let n1 = 7
let n2 = 6

console.log(n1)
console.log(n2)
console.log(n1 + n2)

/* Declarar una constante la cual su valor no podra modificarse*/

const pi = 3.1416
console.log(pi)

//-------------------- CLASIFICACION DE DATOS PRIMITIVOS --------------------

/* Strings == TEXTO */
const ciudad = "Bogotá"
const pais = "Colombia"
console.log("La ciudad es:", ciudad, " El pais es:", pais)

/* Int,float = Numeros (La consola evade el tipo de numero entero o decimal)*/
const suma = 5
const medida = 20.5
const numeroNegativo = -10
console.log(suma + medida + numeroNegativo)

/* Boolean = Bool = Verdadero o Falso */
let esVerde = true
let esMorado = false

//  --------------------Estructura de Datos --------------------

/* Arrays = Vectores = Listas  */
let ListaDeNumeros = [1000, 232, 300, 34]
let ListaCiudades = ["Bogota", "Cali", "Medellin", "Bucaramanga"]
console.log(ListaDeNumeros)

ListaCiudades[2]= "Boyaca"
console.log(ListaCiudades)
/* Ver elemento de la lista, empieza desde cero en adelante */
console.log(ListaDeNumeros[0])
console.log(ListaCiudades[3])

/* Listas de listas */
let ListaDeListas = [ListaDeNumeros, ListaCiudades]

/* Acceder al dato de una lista de una lista */
console.log(ListaDeListas[1][1])

// ------------------- JSON (JavaScript Object Notation) = Objetos -------------------
// Estructura: clave - valor {} 
let usuario = {
    nombre:"Oscar", 
    clave:1234, 
    edad:18,
    ubicacion: {
        latidud: 1.202312,
        longitud: -2.2216598,
    },
    amigos: ["sebastian","pedro"]
}
console.log(usuario)
console.log(usuario.clave)
console.log(usuario.ubicacion)

/* Cambiar una propiedad de un JSON */
usuario.clave = "oscar123"
console.log(usuario.clave)

// ------------------- Tipos de datos vacios (Especiales) (Errores)-------------------

/* null = nulo */
const espacioVacio = null

/* undefined = indefinido */
let noDefinido = undefined

/* Not a Number = No es un numero */
const noEsNumero = NaN
const operacionMat = 10 * "Hola"
console.log(operacionMat)

// ------------------ Estructuras de Control --------------------

// Bucles = un proceso que se repite
// loop = blucle infinito

const ListaAnimales = [
    "Perro",
    "Gato",
    "Oso",
    "Conejo",
    "Pez",
]
/* Obtener el tamaño de la lista    */
console.log("Tamaño del array", ListaAnimales.length)

/* For indica un bucle */
/* parametro 1: contador */
/* parametro 2: condicion para que se detenga*/
/* parametro 3: comportamiento del contador */
/* i o contador = inicializar en */

// condiciones
/* -igualdad: === */
/* -menor que: < */
/* -mayor que: > */
/* -menor o igual que: <= */
/* -mayor o igual que: >= */

// Una forma
for( let contador = 0; contador <= 4; contador++) {
    console.log(contador)
    console.log(ListaAnimales[contador])
}
// segunda forma automatizada 
for( let i = 0; i < ListaAnimales.length; i++){
    console.log(i)
    console.log(ListaAnimales[i])
}
