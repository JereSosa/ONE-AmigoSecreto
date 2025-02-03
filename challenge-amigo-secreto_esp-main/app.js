// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Creando una array vacio para almacenar los nombres de los amigos ingresados.
let amigos = [];

//Funcion de agregar amigos
function agregarAmigos(){
    let amigoInsertado = document.getElementById("amigo");//Obtengo el valor del input por id amigo del elemento html
    let nombreAmigo = amigoInsertado.value;//Le asigno a una nueva variable el valor

    if (nombreAmigo == ""){ //verificando si lo ingresado no es vacio
        alert("Debe ingresar un nombre"); //Si esta vacio le doy un alert
    } else { //si comprueba que no esta vacio lo agrega al array y ademas limpia el input
        amigos.push(nombreAmigo);
        amigoInsertado.value = "";
    }
    console.log(amigos);
}
