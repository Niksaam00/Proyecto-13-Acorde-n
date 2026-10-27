const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {

    pregunta.addEventListener("click", function () {

        const informacion = pregunta.nextElementSibling;

        const estaAbierta = informacion.style.display === "block";


        document.querySelectorAll(".informacion").forEach(function (respuesta) {
            respuesta.style.display = "none";
        });


        preguntas.forEach(function (boton) {
            boton.setAttribute("aria-expanded", "false");

            const flecha = boton.querySelector(".flecha");
            flecha.style.transform = "rotate(0deg)";
        });


        if (!estaAbierta) {
            informacion.style.display = "block";
            pregunta.setAttribute("aria-expanded", "true");

            const flecha = pregunta.querySelector(".flecha");
            flecha.style.transform = "rotate(180deg)";
        }

    });

});