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
    "Satan",
    "pila",
]
/* Obtener el tamaño de la lista    */
console.log("Tamaño del array", ListaAnimales.length)

/* For indica un bucle */
/* parametro 1: contador */
/* parametro 2: condicion para que se detenga*/
/* parametro 3: comportamiento del contador */
/* i o contador = inicializar en */

// condiciones
/*  -igualdad: ===  */
/*  Diferente de: !==  */
/*  -menor que: <  */
/*  -mayor que: > */
/*  -menor o igual que: <=  */
/*  -mayor o igual que: >=  */

// ------------------------- Bucles = un proceso que se repite --------------------------------

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
 
// ---------------- VALIDACIONES ----------------------
// IF = CONDICION == Si hago esto, pasa esto....
// Else = caso contrario
/* Ejemplo mio declarar para declarar si son muchos animales */

if (ListaAnimales.length>=6){
    console.log("Son muchos")
}
else {
    console.log(ListaAnimales)
}

/* EJEMPLO CONDICION DE VALIDACION DE UNA PALABRA */
if("Hola"==="hola"){
    console.log("la condicion es verdadera")
}
else{
    console.log("La condicion es falsa")
}

/* EJEMPLO VALIDACION DE UNA VARIABLE */
let numero = 13 

if (numero === 10){
    console.log("La condicion es verdadera")
}
else if (numero === 11 ){ 
    console.log("La condicion es falsa ")
}
else if (numero === 12){
    console.log("El numero es 12")  
}
else
{
console.log("El numero no es ni 10, ni 11, ni 12")
}

//OPERADORES LOGICOs
// and = y - &&
// or = o - ||

let texto = "algo"

if (texto === "ALGO" || texto === "Algo"){
    console.log("La frase es verdadera")
}
else{
    console.log("La frase no tiene mayuscula")
}

/* Validacion contraseña con una letra*/
let password = "A123456"; // La contraseña debería ser una cadena
const letras = /[a-zA-Z]/.test(password)
if (password.length < 6 || password === "123456"|| !letras) {
    console.log("No es segura");
} else if (password.length >= 6 && password !== "123456") {
    console.log("Su contraseña es segura");
}

// -------------------------- Bucles - while (No recomendado)--------------------------
let i = 0
while (i<7){
    console.log("animal:",ListaAnimales[i])
    i++
    console.log("ciclo:", i)
}

// ------------------------ Funciones ----------------------
// estructuras reciben parametros, procesarlos y devuelven parametros
// Ademas de encapsular código

// Caracterisitcas 
// 1. Agrupar codigo relacionado a un cierto fin
// 2. La funcion es reutilizable

// Function en JavaScript Antiguo
/* Parametros son los valores que debe recibir en este caso valor1 y valor2 */
function sumar(valor1, valor2){
    let resultado = valor1+valor2
    return resultado
}


/* Llamado o ejecución de la función */

// Forma uno de guardado en una variable
let n6 = 3
let resultadoSuma = sumar(n6,4)
console.log("resultado suma forma uno:",resultadoSuma)

// Forma dos de escribir sin guardar en una variable
console.log("resultado suma forma dos:",sumar(11,4))


// Function en ECMAScript
// funcion flecha

const resta = (valor1,valor2) => {
    let resultado = valor1-valor2
    return resultado
}
console.log("resultado resta funcion flecha:",resta (3,2))