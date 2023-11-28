//alert();



let vidaSamid= 100;
let vidaViale = 100;

let round = 0;


const MIN_POWER = 5;
const MAX_POWER = 20;

let num = 0;

function calcularGolpe() {
  return Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}

function noHuboGolpe() {
  return vidaSamid> 0 && vidaViale > 0;
}

function VialeSigueVivo() {
  return vidaViale > 0;
}

while (noHuboGolpe()) {
 
  round += 1;
 
  let piñaSamid = calcularGolpe();
  let piñaViale= calcularGolpe();

  console.log("--------------Round " + round + "-----------------------");
  if (piñaSamid=== piñaViale) {
    console.log("no hubo golpe");
  } else if (piñaSamid> piñaViale) {
    console.log("Samid pega  con una fuerza de " + piñaSamid);
   
    
    vidaViale -= piñaSamid;
    if (vidaViale < 0) {
      vidaViale = 0;
    }
    console.log("la vida de Viale baja a " + vidaViale);
  } else {
    console.log("Viale pega  con una fuerza de " + piñaViale);


    vidaSamid -= piñaViale;
    if (vidaSamid < 0) {
      vidaSamid = 0;
    }
    console.log("la vida de Samid baja a " + vidaSamid);
  }
}

console.log("--------GANADOR------------");

if (VialeSigueVivo()) {
  console.log(" Viale ganó la pelea en la TV");

} else {
  console.log(" Samid ganó la pelea en la TV");
 
}
