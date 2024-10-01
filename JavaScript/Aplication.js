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