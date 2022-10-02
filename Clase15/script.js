let edad = 0;

edad = edad + 1;

let otraEdad = edad++;
let otraEdad2 = ++edad; 
function incrementar(){
// Obtengo la etiqueta label por su Id, usando el objeto document
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = labelContador.innerHTML;
    valorDelLabelContador = parseInt(valorDelLabelContador);
    valorDelLabelContador++;
    console.log(valorDelLabelContador);
    //console.log(typeof valorDelLabelContador);
    labelContador.innerHTML= valorDelLabelContador;
    
}
function decrementar(){
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = labelContador.innerHTML;
    valorDelLabelContador = parseInt(valorDelLabelContador);
    valorDelLabelContador--;
    console.log(valorDelLabelContador);
    //console.log(typeof valorDelLabelContador);
    labelContador.innerHTML= valorDelLabelContador;
    
    
}
function imprimePar() {
    if (esPar(valor)){
        const labelParidad = document.getElementById('paridad');
        labelParidad.innerHTML = 'ES PAR';
    } else {
        const labelParidad = document.getElementById('paridad');
        labelParidad.innerHTML = 'ES IMPAR';
    }
     
}
function esPar(valor) {
    if((valor % 2) === 0){
        return true;
    } else {
        return false;
    }
}
function actualizarTexto(id, nuevoValor){
    const labelParidad = document.getElementById(id);
    labelParidad.innerHTML = nuevoValor;
}