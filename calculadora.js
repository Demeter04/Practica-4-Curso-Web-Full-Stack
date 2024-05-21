// --------------------- Ejercio de lectura y Escritura ---------------------
const mostrarValor = () => {
    // --------------------- OBETENER ELEMENTO POR ID ---------------------
    const input1 = document.getElementById("valor1")
    let valor1 = input1.value
    console.log(valor1) 
    console.log("Mostrar valor: ")

    const span = document.getElementById("DatoInput")
    console.log(span)
    // ------ innerHTML es ingresar al texto o frase que esta dentro de la etiqueta y poderlo cambiar----------
    span.innerHTML=valor1
}
// --------------------- CALCULADORA ---------------------
// 4 OPERACIONES BASICAS., DOS VALORES Y PUEDA HACER LAS CUATRO OPERACIONES CON DOS VALORES Y MOSTRARNOS EL RESULTADO
const suma = () => {
    const input1 = document.getElementById("value1")
    let n1 = parseInt(input1.value)
    console.log(n1)
    const input2 = document.getElementById("operation")
    let op = input2.value
    console.log(op)
    const input3 = document.getElementById("value2")
    let n2 = parseInt(input3.value) 
    parseInt(n2)
    console.log(n2)
    const input4 = document.getElementById("Resultado")
    let Resultado = 0


    if (op === "+") {
        Resultado = n1 + n2
        console.log(Resultado)
        input4.innerHTML=Resultado
    }
    else if (op === "-"){
        Resultado = n1 - n2
        console.log(Resultado)
        input4.innerHTML=Resultado
    }
    else  if (op === "*"){
        Resultado = n1 * n2
        console.log(Resultado)
        input4.innerHTML=Resultado
    }
    else  if (op === "/" && n2 !== 0){
      
        Resultado = n1 / n2
        console.log(Resultado)
        input4.innerHTML=Resultado
    }

   
} 
