// Como se inicializa un vector
// Inicializar vacio
let vector = [];

// Inicializar un vector con informacion
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombres = ["Brandon", "Alexa", "Siri"];

let logicos = [true, false, true, true];

// Como se muestra la informacion de un vector

// Mostrar todo el vector
console.log(numeros);
console.log(nombres);
console.log(logicos);

// Mostrar un valor en especifico
console.log(numeros[6]);
console.log(nombres[2]);
console.log(logicos[3]);

// Como recorrer un vector
for (let i=0; i < numeros.length; i++){
console.log(numeros[i]);
}

for (let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
   }

for (let i=0; i < logicos.length; i++){
     console.log(logicos[i]);    
     }

// Como agregar datos en un vector
numeros.push(300, 500, 100);
console.log(numeros);
nombres.push("Laura", "Martin");
console.log(nombres);
logicos.push(true, false);
console.log(logicos);

// Como se eliminan datos de un vector
// pop() elimina el ultimo dato
numeros.pop();
console.log(numeros);

// slice (posicion inicial, cantidad de datos a borrar)
numeros.splice(4, 2);
console.log(numeros);

