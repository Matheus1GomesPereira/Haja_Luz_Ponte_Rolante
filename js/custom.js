/*---------------------------------------------------------------------
    File Name: custom.js (versão otimizada)
---------------------------------------------------------------------*/

"use strict";

$(function () {

    /* Preloader */
    setTimeout(() => $('.loader_bg').fadeOut(), 1200);

    /* Tooltip */
    $('[data-toggle="tooltip"]').tooltip();

    /* Menu overlay */
    $(".main-menu ul li.megamenu")
        .on("mouseenter", () => $("#wrapper").addClass("overlay"))
        .on("mouseleave", () => $("#wrapper").removeClass("overlay"));

    /* Sidebar toggle */
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    /* Product slider */
    $('#blogCarousel').carousel({
        interval: 5000
    });

});

/* Sidepanel */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

/* Google Map (Lazy Load) */
function initMap() {
    document.getElementById("map").innerHTML = `
        <iframe
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1778.9889260040509!2d-48.659932!3d-26.904198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc6d5a99874f%3A0xe6e252a8d0018385!2sItaja%C3%AD%20Shopping!5e0!3m2!1spt-BR!2sus!4v1767567574052!5m2!1spt-BR!2sus">
        </iframe>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const mapDiv = document.getElementById("map");

    const observer = new IntersectionObserver(
        (entries, obs) => {
            if (entries[0].isIntersecting) {
                initMap();
                obs.disconnect();
            }
        },
        {
            root: null,
            rootMargin: "300px 0px",
            threshold: 0
        }
    );

    observer.observe(mapDiv);
});

// Inicializa o EmailJS
emailjs.init("M7372gEu3N-jEtJY6");

// Seleciona o formulário
const form = document.getElementById("request");
const button = form.querySelector(".send_btn");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Loading no botão
    button.disabled = true;
    button.innerHTML = "Enviando...";

    emailjs.sendForm("service_g1olyos", "template_s6vtu1l", form)
        .then(() => {

            form.reset();

            // Redireciona para página de obrigado
            window.location.href = "obrigado.html";

        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao enviar. Tente novamente.");

            button.disabled = false;
            button.innerHTML = "Enviar";
        });
});

