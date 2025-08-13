document.addEventListener("DOMContentLoaded", function () {
    // Agregar funcionalidad a los botones de filtro
    const botones = document.querySelectorAll(".boton-filtro");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            botones.forEach(btn => btn.classList.remove("activo")); // Quitar activo de todos
            this.classList.add("activo"); // Activar botón clickeado
        });
    });

    // Agregar funcionalidad para cambiar el corazón al hacer clic
    const corazones = document.querySelectorAll(".corazon");

    corazones.forEach(corazon => {
        corazon.addEventListener("click", function () {
            if (this.src.includes("corazon.png")) {
                this.src = "img/corazonRojo.png"; // Cambia al rojo ❤️
            } else {
                this.src = "img/corazon.png"; // Vuelve al original 🤍
            }
        });
    });
});

//carrusel
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cuadro-gris").forEach(cuadro => {
        const imagen = cuadro.querySelector(".imagen-fruta");
        const puntos = cuadro.querySelectorAll(".punto");

        if (!imagen || puntos.length === 0) return; // Si no hay imagen o puntos, ignoramos este cuadro

        // Definir imágenes específicas para cada cuadro
        const imagenes = ["img/mora.png", "img/melocoton.png", "img/maracuya.png", "img/fresas.png"];
        let indiceActual = 0;

        function cambiarImagen(index) {
            imagen.src = imagenes[index];
            puntos.forEach(punto => punto.classList.remove("activo"));
            puntos[index].classList.add("activo");
            indiceActual = index;
        }

        // Evento para cambiar imagen al hacer clic en los puntos
        puntos.forEach((punto, index) => {
            punto.addEventListener("click", () => cambiarImagen(index));
        });

        // Cambio automático cada 3 segundos
        setInterval(() => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            cambiarImagen(indiceActual);
        }, 5000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const botonAll = document.getElementById("boton-all");
    const divGrande = document.getElementById("divGrande");

    if (botonAll && divGrande) {
        botonAll.addEventListener("click", function () {
            // Toggle de visibilidad
            if (divGrande.style.display === "block") {
                divGrande.style.display = "none";
            } else {
                divGrande.style.display = "block";
            }
        });
    }
});
function abrirLogin() {
    document.getElementById('loginPanel').style.display = 'block';
  }
  
  function cerrarLogin() {
    document.getElementById('loginPanel').style.display = 'none';
  }
  
  function abrirAboutUs() {
    document.getElementById("aboutUsModal").style.display = "flex";
}

function cerrarAboutUs() {
    document.getElementById("aboutUsModal").style.display = "none";
}
window.addEventListener('DOMContentLoaded', () => {
    cerrarAboutUs(); // ¡cerramos por si acaso!
  });


