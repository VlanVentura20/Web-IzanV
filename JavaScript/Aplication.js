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