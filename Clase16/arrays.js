// Defino mi primer vector
const edadCarlos = 36;
const edadEduardo = 40;
const edadCesar = 25;

// los vectores son dinámicos
const edades = [];
// Agregar un vector
edades.push(36); // Agrego 36 al array edades invocando el método push a la primer posición (cero)
edades.push(edadEduardo);
edades[2]= edadCesar;
console.log(edades);
// Recorrer el vector
console.log('0:',edades[0]);
console.log('1:',edades[1]);
console.log('2:',edades[2]);

// Ciclo for
for(let i=0; i<edades.length; i++){
    console.log(`Dentro del for ${i}:`,edades[i]);
}
//Agrego mas edades
edades.push(38);
edades.push(39);
edades.push(51);

for(let i=0; i<edades.length; i++){
    console.log(`Dentro del for ${i}:`,edades[i]);
}
function calcular(){
    const nota1Value = document.getElementById('nota1').value;
    const nota2Value = document.getElementById('nota2').value;
    if (nota1Value !=='' && nota2Value !== '' ){
        procesarNotas(+nota1Value,+nota2Value);
    }
    else{
        alert('Complete las dos notas');
    }
}
function procesarNotas(nota1,nota2){
    const notas=[nota1,nota2];
    let promedio = calcularPromedio(notas);
    let min = calcularMinimo(notas);
    let max= calcularMaximo(notas);
    console.log('Minimo: ',min);
    console.log('Maximo: ',max);
    console.log('Promedio: ',promedio);
}
function calcularMaximo (notas){
    if(notas[0]>notas[1]){
        max=notas[0];
    } 
    if(notas[0]<notas[1]){
        max=notas[1];
    }
    if (notas[0]=== notas [1]){
        max=notas[0];
    }
    return max;
}
function calcularMinimo (notas){
    if(notas[0]<notas[1]){
        min=notas[0];
    } 
    if(notas[0]>notas[1]){
        min=notas[1];
    }
    if (notas[0]=== notas [1]){
        min=notas[0];
    }
    return min;
}
function calcularPromedio (notas) {
    let acumulador = 0;
    for(let j=0; j< notas.length ;j++ ) {
        acumulador = acumulador + notas [j];
    }
    const promedio = acumulador / notas.length
    return promedio;
}
