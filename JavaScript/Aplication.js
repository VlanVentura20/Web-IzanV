$(document).ready(function () {
    $('#Proyectos, #Contacto').hide();

    $("#BInicio").on("click", function () {
        $("#Inicio").show();
        $("#Proyectos, #Contacto").hide();
    });

    $("#BProyectos").on("click", function () {
        $("#Proyectos").show();
        $("#Inicio, #Contacto").hide();
    });

    $("#BContacto").on("click", function () {
        $("#Contacto").show();
        $("#Proyectos, #Inicio").hide();
    });

    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        if (value) {

            $("#Inicio, #Contacto").hide();
            $("#Proyectos").show();

            let found = false;

            $(".project-card").each(function () {
                const projectTitle = $(this).find('.card-title').text().toLowerCase();
                if (projectTitle.includes(value)) {
                    $(this).show();
                    found = true;
                } else {
                    $(this).hide();
                }
            });

            if (!found) {
                alert('No se encontraron resultados.');
            }
        } else {
            $("#Proyectos").show();
            $('.project-card').show();
        }
    });
    
    $(".project-card").click(function () {
        const projectName = $(this).data("project");  // Obtener el nombre del proyecto
        console.log("Nombre del proyecto:", projectName);  // Verifica el nombre del proyecto
    
        // Hacer la solicitud AJAX
        $.ajax({
            url: "./JavaScript/Descripcion.php",
            type: "GET",
            data: { nombre: projectName },  // Enviar el nombre como parámetro
            dataType: "json",
            success: function (data) {
                console.log("Respuesta del servidor:", data);  // Muestra la respuesta del servidor
    
                if (data && data.descripcion) {
                    const description = data.descripcion;
                    const frontContent = $(".project-card[data-project='" + projectName + "']").html();  // Contenido original de la tarjeta
    
                    // Actualizar la tarjeta con la descripción
                    $(".project-card[data-project='" + projectName + "']").html(`
                        <div class="card-body flip-back">
                            <h5 class="card-title">Descripción del Proyecto: ${projectName}</h5>
                            <p class="card-text">${description}</p>
                        </div>
                    `);
    
                    // Añadir funcionalidad para volver al contenido original
                    $(".project-card[data-project='" + projectName + "'] .flip-back").click(function (e) {
                        e.stopPropagation();  // Evitar que el clic active el evento de la tarjeta nuevamente
                        $(".project-card[data-project='" + projectName + "']").html(frontContent);  // Restaurar el contenido original
                    });
                } else {
                    alert("Error: " + (data.error || "Descripción no encontrada"));
                }
            },
            error: function (xhr, status, error) {
                console.error("Error en la solicitud:", error);  // Muestra el error en la consola
                alert("Hubo un error al obtener la descripción.");
            }
        });
    });
    
    
    
    
});
