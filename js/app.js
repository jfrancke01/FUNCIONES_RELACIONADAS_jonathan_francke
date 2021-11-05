let tipo = parseInt(prompt(
    `MENU

    ingrese el tipo de Moneda al que desea convertir:
    1 - Peso Chileno
    2 - Peso Peruano
    3 - Peso Argentino `));

const cantidad = prompt("Ingrese Cantidad de Dolares a Convertir:");

const pchile = (x) =>{
    const valor_dolar = 815.13;
    const resultado = valor_dolar * x;
    return resultado;
}
const pperuano = (x) =>{
    const valor_dolar = 4.02;
    const resultado = valor_dolar * x;
    return resultado;

}
const pargentino = (x)=>{
    const valor_dolar = 99.091;
    const resultado = valor_dolar * x;
    return resultado;
}
switch (tipo) {
    case 1:
        alert(`${cantidad} Dolares son: ${pchile(cantidad)} Peso/s Chilenos`);
        break;
    case 2:
        alert(`${cantidad} Dolares son: ${pperuano(cantidad)} Sole/s`);
        break;
    case 3:
        alert(`${cantidad} Dolares son: ${pargentino(cantidad)} Peso/s Argentinos`);
        break;
    default:
        break;
    }


    
        

