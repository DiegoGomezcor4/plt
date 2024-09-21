const numerSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina elnumero secreto entre 1 al 10"));

console.log(`Este es el número con el que juegas: ${numeroJugador}`);

if (numeroJugador === numerSecreto) {
    console.log("Felicidades ganaste")
} else {
    console.log("perdiste")
    console.log(`el numero secreto era: ${numerSecreto}`)
}