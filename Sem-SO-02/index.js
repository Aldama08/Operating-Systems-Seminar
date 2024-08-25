//Cuenta progresiva 
let count = document.querySelector("#One") //Puedo seleccionar cualquier etiqueta html donde quiera que se muestre
let counter = 0;
setInterval(()=>{ //Inicia conteo
    if (counter < Infinity) //Si el contador es menor que 200
    {
        counter ++; //Lo hace hasta llegar a 200
        count.innerText = counter;//Muestra en pantalla
    }
}, 1000) //Lo hace cada segundo

let totalSeconds = 0; // Tiempo restante
let totalSeconds1 = 0; // Tiempo estimado
let interval; 

// Función que actualiza el tiempo restante y el estimado
function Timer() {
    if (totalSeconds > 0) { //decrementamos si el total es mayor a 0
        totalSeconds--;
        document.getElementById('Two').innerText = `Tiempo Restante: ${totalSeconds} segundos \n Estimado: ${totalSeconds1} segundos`; //Lo mostramos
    } else { //Sino limpiamos y lo igualamos a null, al igual si el contador llega a 0
        clearInterval(interval);
        interval = null;
        
        // Limpiar pantalla cuando TMR llega a 0
        totalSeconds = 0;
        totalSeconds1 = 0;
        document.getElementById('Two').innerText = '';
    }
}

// Evento para manejar el click en el botón 'Done'
    document.getElementById('Done').addEventListener('click', () => {  //Escuchamos el click
    const TiempoEstimado = parseInt(document.getElementById('TME').value.trim(), 10); // lo tomamos en base 10 (decimal), le quitamos espacios con trim, lo mandamos el valor, qye tomamos del documento con TME, vemos si es un entero y lo asignamos a tiempo estimado

    if (!isNaN(TiempoEstimado) && TiempoEstimado > 0) { //Si TE es distinto a un Not a Number y mayor a 0
        // Sumar el nuevo tiempo estimado a ambos contadores
        totalSeconds += TiempoEstimado;
        totalSeconds1 += TiempoEstimado;

        // Iniciar el intervalo si no está ya en ejecución cada segundo 
        if (!interval) {
            interval = setInterval(Timer, 1000);
        }

        // Limpiar el input de tiempo estimado
        document.getElementById('TME').value = '';
    } else { //Si es una letra mandamos alerta BB
        alert("Ingrese un número válido.");
    }
});


