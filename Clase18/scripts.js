// funcion flecha o arrow function

/* REACT
const addPalabra = () => {
    
}

jquery!
addPalabra = function () {
} */
const arrayDePalabras = [];
function addPalabra() {
    //capturo el valor del input
    const valuePalabra = document.getElementById('palabra').value;
    if (valuePalabra === ''){
        alert('Debe completar la palabra');
        return;
    }
    arrayDePalabras.push(valuePalabra);
    console.log(arrayDePalabras);
    listarPalabras();
}
function listarPalabras(){
    if(arrayDePalabras.length === 0){
        return;
    }
    //limpio el div
    //document.getElementById('listado').innerHTML='';
    // D.O.M.
    //recorro el array y voy agregando palabras
    const ul = document.createElement('ul');
    for(let unaPalabra of arrayDePalabras){
        const li = document.createElement('li');
        // le asigno un -Id y una class al li
        li.id = Math.random(); // Le asigna un id numerico aleatorio en tre 0 y 0.99999
        li.className = 'texto-rojo';
        li.innerHTML = unaPalabra;
        ul.appendChild(li);
    }       


    //document.getElementById('listado').innerHTML += ul;
    document.getElementById('listado').appendChild(ul);
    }
