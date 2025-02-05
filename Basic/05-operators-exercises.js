/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 1+1
let resta = 3-1
let multiplicacion = 2*1
let division = 4/2
let modulo = 2%3
let potencia = 2**1

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(potencia)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let suma2 = 4
let resta2 = 4
let multiplicacion2= 4
let division2 = 4
let modulo2 = 4
let potencia2 = 4


suma2 += 1
resta2 -= 1
multiplicacion2 *=1
division2 /= 1
modulo2 %= 1
potencia **= 1

console.log(suma2)
console.log(resta2)
console.log(multiplicacion2)
console.log(division2)
console.log(modulo2)
console.log(potencia2)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let edad = 24

console.log( (edad == 24) )
console.log( (edad >= 24) )
console.log( (edad <= 24) )
console.log( ( 25 > edad ))
console.log( (26 >= edad))


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log( (edad != 24) )
console.log( (edad < 24) )
console.log( (edad > 24) )
console.log( ( 25 < edad ))
console.log( (26 < edad))


// 5. Utiliza el operador lógico and

let comproBebidas = true
let comproComida = false

console.log(comproBebidas && comproComida)

// 6. Utiliza el operador lógico or

console.log(comproBebidas || comproComida)


// 7. Combina ambos operadores lógicos

let cumpleaños = true

console.log(comproBebidas || comproComida && cumpleaños)

// 8. Añade alguna negación


console.log(comproBebidas || comproComida && !cumpleaños)


// 9. Utiliza el operador ternario

let comerChocalate = true
comerChocalate ? console.log("Hay que comer chocolateeeeeeeeeeeee viva la pepa") : console.log("No hay que comer chocolate. Todo es dolor y sufrimiento")

comerChocalate = false
comerChocalate ? console.log("Hay que comer chocolateeeeeeeeeeeee viva la pepa") : console.log("No hay que comer chocolate. Todo es dolor y sufrimiento")


// 10. Combina operadores aritméticos, de comparáción y lógicas


cumpleaños && comproBebida && !comproComida ? console.log("Hay que comprar comida") : console.log("se puede hacer la fiestita")

