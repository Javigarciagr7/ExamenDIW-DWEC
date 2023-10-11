// JAVIER GARCÍA RODRÍGUEZ
//


//Se carga el contenido 
document.addEventListener("DOMContentLoaded", () => {

    const calcularBoton = document.getElementById("calcular");
    const contenedorresultado = document.getElementById("resultado");
    const contenedorresultado2 = document.getElementById("resultado2");
    const contenedorresultado3 = document.getElementById("resultado3");

    //Se pasan los valores de los inputs a las variables
    calcularBoton.addEventListener("click", () => {
        const lenght = parseFloat(document.getElementById("lenght").value);
        const width = parseFloat(document.getElementById("width").value);

        //Si se han introducido los valores correctamente y no son nulos, se harán las correspondientes formulas
        if(!isNaN(lenght) && !isNaN(width)){

            const area = lenght * width
            const perimetro = 2 * (lenght + width)
            const diagonal = Math.sqrt((lenght * lenght) + (width * width)) //Con Math.sqrt se hará la raíz cuadrada

        //Se pasa el resultado de las formulas y se muestran junto a un mensaje
            contenedorresultado.innerHTML = `El Área del rectángulo: ${area.toFixed(2)}`; //.toFixed(2), hará que solo aparezcan 2 decimales
            contenedorresultado2.innerHTML = `El Perímetro del rectángulo: ${perimetro.toFixed(2)}`;
            contenedorresultado3.innerHTML = `La Diagonal del rectángulo: ${diagonal.toFixed(2)}`;

        //En caso de que los valores introducidos no sean validos saltará el siguiente mensaje
        } else{
            contenedorresultado.innerHTML = `Introduzca datos validos o rellene los campos`;
            contenedorresultado2.innerHTML = ``;
            contenedorresultado3.innerHTML = ``;
        }
    });
});