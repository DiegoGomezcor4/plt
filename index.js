/*
for in --->objetos

for (variable in obejto) {
    codigo
}
*/

const listaDeCompras = {
    manzana: 5,
    pera: 2,
    naranja: 3,
    uva: 1
}

for(fruta in listaDeCompras) {
    console.log(fruta)

}

for(fruta in listaDeCompras) {
    console.log(`elementos: ${fruta} : ${listaDeCompras[fruta]}`)
}