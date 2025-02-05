/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre = "Melanie"
let apellido = "Lista"

console.log(nombre + " " + apellido)


// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string

console.log(nombre[0])
console.log(nombre[6])

// 4. Convierte a mayúsculas y minúsculas un string

nombre = nombre.toUpperCase()
console.log(nombre)
nombre = nombre.toLowerCase()
console.log(nombre)

// 5. Crea una cadena de texto en varias líneas

let cadenaDeTexto = ` cadena
de
texto`



// 6. Interpola el valor de una variable en un string

let año = 2025

let frase = "Estamos en el año"

console.log(frase + año)

let año2 = "dos mil veinticinco"

console.log(`${frase}${año2}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
frase = frase.replace(" ", "-")
console.log(frase + año)
frase = frase.replace(" ", "-")
console.log(frase + año)
frase = frase.replace(" ", "-")
console.log(frase + año)


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(frase.includes("Estamos"))


// 9. Comprueba si dos strings son iguales
let frase2 = "hola"

console.log(frase.includes(frase2))

frase2 = frase

console.log(frase.includes(frase2))


// 10. Comprueba si dos strings tienen la misma longitud

console.log(frase.length == frase2.length)
