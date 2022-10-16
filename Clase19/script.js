const personas = [
    {
        dni: 12345678,
        nombre: 'juan',
        direcciones: [
            {
                calle: 'Avenida siempreviva',
                numero: 1234,
                localidad: {
                    cp: 1236,
                    nombre: 'CABA'
                },
            },
            {
                calle: 'calle 14',
                numero: 5678,
                localidad: {
                    cp: 6321,
                    nombre: 'AMBA'
                }
            }
        ]
    },
    {
        dni: 12345678,
        nombre: 'carlos',
        direcciones: [
            {
                calle: 'calle 16',
                numero: 4321,
                localidad: {
                    cp: 1236,
                    nombre: 'CABA'
                },
            },
            {
                calle: 'calle 17',
                numero: 5679,
                localidad: {
                    cp: 6321,
                    nombre: 'AMBA'
                }
            }
        ]
    }
];
console.log(personas);
// Ahora convierto a JSON como string
const strPersona = JSON.stringify(personas);
console.log(strPersona);

// Ahora "parseo" strpersona a un objeto
const otraPersona = JSON.parse(strPersona);
console.log(otraPersona);

/*// Averiguar si extiste el codigo postal 6321

const existeCodigoPostal = persona.direcciones.some (dir => dir.localidad.cp === 6321);
console.log(existeCodigoPostal);

// Averiguar si existe el codigo postal 1236

let existe = false;
for (let i = 0; i<persona.length;i++){
    const existe = persona[i].direcciones.some(dir=>dir.localidad.cp === 1236);
}
console.log(existe);*/

// usando un MAP

const dirs = personas.map(p =>p.direcciones);
console.log(dirs);

const dirsflat = dirs.flat();
console.log(dirsflat);

const existeV3 = dirsflat.some(d=>d.localidad.cp === 6321);
console.log(existeV3);

let array1 = [1,2,3,[4,5,6],7,8];
// quiero transformar el array en [1,2,3,4,5,6,7,8]
array1 = array1.flat(); // flat transforma el los elementos del array interno en elementos individuales del array externo
console.log(array1);

// dibujar los datos en un div

function repasoArray(){

} 
 
function CrearDivPersona (personas){
    const divPersona = document.getElementById ('contenidoExterno');
    personas.forEach(persona=> {
        divPersona.innerHTML = crearCardPersona(personas);
    });
}
function crearCardPersona (unaPersona){
    const html = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${unaPersona.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  return html;
}