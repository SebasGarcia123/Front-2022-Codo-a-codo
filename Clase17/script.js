// Filtrar elementos
const alumnos = [
    {
        edad: 35,
        nombre: "Carlos"
    },
    {
        edad: 30,
        nombre: "Juan"
    },
    {
        edad: 40,
        nombre: "Eduardo"
    },
    {
        edad: 38,
        nombre: "Gaby"
    }
];
// alumnos con edad < a 40
// declaro un array auxiliar donde guardar los que cumplan la condicion
const aux=[];
for (let unAlumno of alumnos) {
    //console.log(unAlumno);
    if(unAlumno.edad < 40){
        aux.push(unAlumno);
    }
}
console.log('Menores de 40: ',aux);

//FILTER
const aux2 = alumnos.filter(unAlumno => unAlumno.edad < 40);
console.log('Menores de 40: ',aux2);

//MAP
const nombresDeAlumnos = aux2.map(unAlumno => unAlumno.nombre);

//SOME
/*let existe = false;
for (let unAlumno of alumnos){
    if (unAlumno.edad == 40){
        existe = true;
        break;// sale del ciclo for
    }
}

let existe = false;
for (let i=0; i<alumnos.length && !existe;i++){
    if (alumnos[i].edad == 40){
        existe = true;
    }
}*/

const existe2 = alumnos.some(unAlumno => unAlumno.edad == 40);
console.log(existe2);

//EVERY
const todos35_2 = alumnos.every(unAlumno => unAlumno.edad == 35);
console.log(todos35_2);

//SUMAR TODAS LAS EDADES DE LOS ALUMNOS

let edadTotal=0;
alumnos.forEach(unAlumno => edadTotal += unAlumno.edad);
console.log(edadTotal);

const edadTotal2 = alumnos.reduce((total,alumnoActual) => total + alumnoActual.edad,0);
console.log(edadTotal2);