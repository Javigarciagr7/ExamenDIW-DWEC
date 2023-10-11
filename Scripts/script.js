// JAVIER GARCÍA RODRÍGUEZ
// https://github.com/Javigarciagr7/ExamenDIW-DWEC.git


//Se carga el documento HTML
document.addEventListener("DOMContentLoaded", () => {

    //Se definen constantes para almacenar referencias a elementos HTML con IDs específicos
    const calcularBoton = document.getElementById("calcular");
    const contenedorresultado = document.getElementById("resultado");
    const contenedorresultado2 = document.getElementById("resultado2");
    const contenedorresultado3 = document.getElementById("resultado3");

    //Se agrega un "escuchador de eventos" al botón con el ID "calcular". Este escuchador está configurado para responder al evento "click" en el botón.
    calcularBoton.addEventListener("click", () => {

    //Se obtienen los valores ingresados por el usuario desde dos campos de entrada de texto con los IDs "lenght" (longitud) y "width" (ancho). Estos valores se convierten a números utilizando ParseFloat
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
        } else {
            contenedorresultado.innerHTML = `Introduzca datos validos o rellene los campos`;
            contenedorresultado2.innerHTML = ``;
            contenedorresultado3.innerHTML = ``;
        }
    });
});