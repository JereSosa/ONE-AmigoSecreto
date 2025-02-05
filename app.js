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
        actualizarLista();
    }
    console.log(amigos);
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; // Limpio la lista antes de agregar los elementos nuevos

    for (let amigo of amigos) {
        let li = document.createElement("li"); // Creo un nuevo elemento <li>
        li.textContent = amigo; // Asigno el nombre del amigo como texto del <li>
        lista.appendChild(li); // Agrego el <li> a la lista
    }
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos disponibles
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre correspondiente

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}