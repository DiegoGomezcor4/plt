/* ejemplo de for in */

const listaDeCompras = {
    naranja: 5,
    pera: 3,
    manzana: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
    console.log(`${fruta}: ${listaDeCompras[fruta]}`)
}