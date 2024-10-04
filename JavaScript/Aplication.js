$(document).ready(function () {
    $('#Proyectos, #Contacto, #Formulario').hide();
});
$(document).ready(function () {
    $("#BInicio").on("click", function () {
        $("#Inicio").show();
        $("#Proyectos, #Contacto, #Formulario").hide();
    });
});
$(document).ready(function () {
    $("#BProyectos").on("click", function () {
        $("#Proyectos").show();
        $("#Inicio, #Contacto, #Formulario").hide();
    });
});
$(document).ready(function () {
    $("#BContacto").on("click", function () {
        $("#Contacto").show();
        $("#Proyectos, #Inicio, #Formulario").hide();
    });
});
$(document).ready(function () {
    $("#BFormulario").on("click", function () {
        $("#Formulario").show();
        $("#Proyectos, #Contacto, #Inicio").hide();
    });
});
$(document).ready(function () {
    // Evento de entrada en la barra de búsqueda
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase(); // Captura el valor del input y lo convierte en minúsculas
        $(".result").filter(function () {
            // Filtra los divs según el texto ingresado
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
const projectDescriptions = {
    1: "Descripción detallada del Proyecto 1. Es un proyecto enfocado en el desarrollo de una aplicación móvil que permite a los usuarios gestionar sus tareas diarias de manera eficiente. Incluye funcionalidades como recordatorios, listas de tareas y un calendario integrado que ayuda a los usuarios a mantenerse organizados y productivos.",
    2: "Descripción detallada del Proyecto 2. En este proyecto, se trabajó en la creación de una página web interactiva que facilita la compra de productos online. La plataforma fue diseñada con un enfoque en la usabilidad, asegurando que los usuarios puedan navegar y realizar compras sin complicaciones. Se implementaron características como un sistema de filtrado avanzado y un carrito de compras intuitivo.",
    3: "Descripción detallada del Proyecto 3. El objetivo principal fue desarrollar un sistema de gestión para empresas que optimiza sus procesos internos. Este software permite a las organizaciones gestionar sus recursos humanos, inventarios y finanzas de manera más efectiva, con informes en tiempo real que ayudan a la toma de decisiones.",
    4: "Descripción detallada del Proyecto 4. Esta iniciativa se centró en la creación de una API de servicios que proporciona acceso a datos en tiempo real para diversas aplicaciones. Se diseñó con un enfoque en la escalabilidad y la seguridad, permitiendo a los desarrolladores integrar fácilmente los servicios en sus propias aplicaciones.",
    5: "Descripción detallada del Proyecto 5. Es un desarrollo innovador que aborda la necesidad de educación accesible mediante una plataforma de e-learning. Esta plataforma ofrece cursos en línea sobre una variedad de temas, incluyendo programación, marketing digital y diseño gráfico, con recursos multimedia y ejercicios prácticos.",
    6: "Descripción detallada del Proyecto 6. Se realizó un análisis de inteligencia artificial para crear un chatbot inteligente que ayuda a los usuarios a resolver dudas frecuentes. Este sistema utiliza procesamiento de lenguaje natural para entender las preguntas de los usuarios y proporcionar respuestas precisas y útiles.",
    7: "Descripción detallada del Proyecto 7. Esta plataforma permite a los usuarios realizar transacciones seguras mediante tecnología blockchain. El objetivo es ofrecer una solución confiable para el manejo de criptomonedas y activos digitales, asegurando la integridad y privacidad de las transacciones.",
    8: "Descripción detallada del Proyecto 8. Fue creado para mejorar la salud y el bienestar de los usuarios mediante una aplicación que monitoriza la actividad física. La app ofrece seguimiento de entrenamientos, consejos de nutrición y recordatorios para mantenerse activo, todo personalizado según las necesidades del usuario.",
    9: "Descripción detallada del Proyecto 9. El proyecto incluye funcionalidades como chat, grupos de interés y publicaciones para que los usuarios se conecten con personas de ideas afines. La red social está diseñada para fomentar la interacción y el intercambio de conocimientos entre sus miembros."
};

$(document).ready(function() {
    $(".project-card").click(function() {
        const projectId = $(this).data("project");
        const description = projectDescriptions[projectId];

        // Guardamos el contenido original
        const frontContent = $(this).html();  

        // Cambiamos el contenido por la descripción
        $(this).html(`
            <div class="card-body">
                <h5 class="card-title">Descripción del Proyecto ${projectId}</h5>
                <p class="card-text">${description}</p>
            </div>
        `);

        // Al hacer clic en "Volver", restauramos el contenido original
        $(this).find(".flip-back").click(function(e) {
            e.stopPropagation();  // Evita que el clic en "Volver" active nuevamente el clic de la carta
            $(this).closest(".project-card").html(frontContent);
        });

        // Asegúrate de que cualquier clic en el área de la carta también restablezca el contenido
        $(this).click(function(e) {
            if (!$(e.target).hasClass("flip-back")) {  // Evitar restaurar si se hace clic en "Volver"
                $(this).html(frontContent);
            }
        });
    });
});
