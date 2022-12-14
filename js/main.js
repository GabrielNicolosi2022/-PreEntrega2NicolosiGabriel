alert("Descubre tu numero de la suerte\n para participar indica cuantos integrantes tiene tu grupo...")
// Creo el constructor para los objetos Participante
class Participante {
  constructor(name, gender, age) {
    this.nombre = name;
    this.genero = gender;
    this.edad = age;
  }
}
// Creo las variables donde se guardarán los dados ingresados por el usuario
const todosLosParticipantes = [];
let cantParticipantes;

// Pido al usuario que ingrese los datos necesarios para poder calcular su numero de la suerte
cantParticipantes = parseInt(prompt("Ingrese la cantidad de participantes"));

// Utilizo un bucle para pedir los datos de los todos participantes
for (let i = 0; i < cantParticipantes; i++) {
  const name = prompt("Ingrese el nombre del participante:");
  const gender = parseInt(
    prompt(
      "Ingrese el género del participante:\n masculino ingrese = 1\n femenino ingrese =  2"
    )
  );
  const age = parseInt(prompt("Ingrese la edad del participante:"));

  const participante = new Participante(name, gender, age);
  todosLosParticipantes.push(participante);
}
// Verifico en consola que se hayan cargado los datos de los participantes en el array de objetos
console.log(todosLosParticipantes);

// Utilizo el método map para extaer del array de objetos los datos necesarios para la operación (generos y edades) y los guardo en variables
const generos = todosLosParticipantes.map(
  (participante) => participante.genero
);
const edades = todosLosParticipantes.map((participante) => participante.edad);

// Verifico en consola que se hayan cargado los datos extraidos
console.log("Generos: " + generos);
console.log("Edades: " + edades);

// Utilizo el método reduce para sumar todos los valores guardados en las variables anteriores
const sumaGeneros = generos.reduce(
  (acumulador, generos) => acumulador + generos,
  0
);
const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);

// Verifico en consola que los resultados obtenidos sean los correctos
console.log(sumaGeneros);
console.log(sumaEdades);
console.log((sumaEdades + sumaGeneros) / cantParticipantes);

// Realizo la operación final a partir de los datos ingresados y utilizo el objeto Math para redondear el resultado de la operación
const numSuerte = Math.round((sumaEdades + sumaGeneros) / cantParticipantes);

// Devuelvo el numero obtenido en un alert
alert(`Felicitaciones, su numero de la suerte es el ${numSuerte}!!!`);

alert("Gracias por participar")
