// Funcionalidades basicas para el form New Tarea

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.needs-validation');
    const alerta = document.querySelector('#mensaje-alerta');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // Calling los campos que necesitan validación
        const nombreInput = document.querySelector('#nombre-tarea');
        const descripcionInput = document.querySelector('#description-tarea');
        const fechaInput = document.querySelector('#fecha-entrega');
        const estadoInput = document.querySelector('#estado-tarea');

        // Renombramos en variables más cortas
        const nombre = nombreInput.value.trim();
        const descripcion = descripcionInput.value.trim();
        const fecha = fechaInput.value;
        const estado = estadoInput.value;

        // Un console para comprobar los datos insertados en consola
        console.log("--- Comprobando datos recuperados ---");
        console.log("Nombre: " + nombre);
        console.log("Descripcion: " + descripcion);
        console.log("Fecha: " + fecha);
        console.log("Estado: " + estado);

        // Creamos el objeto de datos para pasarle a la función requerida
        const formData = { nombre, descripcion, fecha, estado };

        // Calling función validFormFieldInput que va a verificar los campos
        const esValido = validFormFieldInput(formData);

        if (!esValido) {
            evento.stopPropagation();
            // Muestra la alerta quitando d-none y añade estilos visuales de Bootstrap
            alerta.classList.remove('d-none');
            formulario.classList.add('was-validated');
        } else {
            // Si los datos son válidos oculta la alerta agregando d-none
            alerta.classList.add('d-none');
            formulario.classList.remove('was-validated');
            
            console.log("¡Formulario válido! Procesando la tarea...");

            // Limpiamos el formulario
            formulario.reset();
        }
    });

    // Función de validación requerida por la rúbrica
    function validFormFieldInput(data) {
        // Validaciones de la tabla de condiciones
        if (data.nombre === "") return false;         
        if (data.descripcion === "") return false;   
        if (data.fecha === "") return false;       
        if (data.estado === "") return false;        
        
        return true; // Si pasa todos los filtros, el objeto es válido
    }
});


// Ocultar y mostrar con btn New Tarea

const btnAgregarTarea = document.getElementById("btn-crear-tarea");
const formularioTarea = document.getElementById("formulario");

btnAgregarTarea.addEventListener("click", () => {
    formularioTarea.classList.toggle("d-none");
});

// Evento para que cuando se haga enter se pase al siguiente recuadro y no se envíe directamente
formulario.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        const campos = Array.from(
            formulario.querySelectorAll("input, select, textarea")
        );

        // Se define Indice Actual para el Enter
        const indiceActual = campos.indexOf(event.target);

        if (indiceActual < campos.length - 1) {
            campos[indiceActual + 1].focus();
        }
    }
});
