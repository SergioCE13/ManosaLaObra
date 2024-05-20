let contador = 0;

function like() {
    contador++;
    document.getElementById('contador').textContent = contador;
}

const contadorLike= document.getElementById('btn-like');
contadorLike.addEventListener('click', like);



/* const miniaturas = document.querySelectorAll('.miniaturas img');
const imagenPrincipal = document.getElementById('imagen-principal');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        imagenPrincipal.src = this.src;
    });
}); */

function cambioCorazon() {
    const boton = document.getElementById("boton-corazon2");
    const svgCorazon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#E31B9F"><path d="M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.06 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47q6.63 6.48 14.37 14.03 7.74 7.55 14.37 14.03L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"/></svg>
    `;
    const svgNegro = `
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.06 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47q6.63 6.48 14.37 14.03 7.74 7.55 14.37 14.03L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"/></svg>
    `;
    
    if (boton.dataset.state === "corazon" ) {
        boton.innerHTML = svgNegro.trim();
        boton.dataset.state = "negro";
    } else {
        boton.innerHTML = svgCorazon.trim();
        boton.dataset.state = "corazon";
    }

    alert('¡Su producto a sido agregado a favoritos existosamente!');
}



function cambioCorazon2() {
    const boton = document.getElementById("boton-corazon1");
    const svgCorazon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#E31B9F"><path d="M440-498.33Zm0 377.66-108.33-98.66q-82-75-137.5-130t-90-100.67q-34.5-45.67-49.34-86.67-14.83-41-14.83-87Q40-715 101.33-777.5q61.34-62.5 152-62.5 55.34 0 103.34 25T440-742.67Q479.33-792 526.33-816t100.34-24q80.71 0 135.52 51.83 54.81 51.84 69.48 126.84H764q-12-50-48.67-81-36.66-31-88.66-31-51 0-92.67 29.83t-70.33 82.83h-48Q388-713 345.5-743.17q-42.5-30.16-92.17-30.16-63 0-104.83 42.83t-41.83 106.83q0 37 15 73t52.59 82.22q37.59 46.21 102.33 108Q341.33-298.67 440-209.33q30-27 60.67-53.67 30.66-26.67 56.33-49.33l7.42 7.31q7.42 7.32 16.08 15.85 8.66 8.54 16.08 15.85L604-266q-25.33 22.67-56 49.17t-61.33 54.16l-46.67 42ZM726.67-280v-126.67H600v-66.66h126.67V-600h66.66v126.67H920v66.66H793.33V-280h-66.66Z"/></svg>
    `;
    const svgNegro = `
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M440-498.33Zm0 377.66-108.33-98.66q-82-75-137.5-130t-90-100.67q-34.5-45.67-49.34-86.67-14.83-41-14.83-87Q40-715 101.33-777.5q61.34-62.5 152-62.5 55.34 0 103.34 25T440-742.67Q479.33-792 526.33-816t100.34-24q80.71 0 135.52 51.83 54.81 51.84 69.48 126.84H764q-12-50-48.67-81-36.66-31-88.66-31-51 0-92.67 29.83t-70.33 82.83h-48Q388-713 345.5-743.17q-42.5-30.16-92.17-30.16-63 0-104.83 42.83t-41.83 106.83q0 37 15 73t52.59 82.22q37.59 46.21 102.33 108Q341.33-298.67 440-209.33q30-27 60.67-53.67 30.66-26.67 56.33-49.33l7.42 7.31q7.42 7.32 16.08 15.85 8.66 8.54 16.08 15.85L604-266q-25.33 22.67-56 49.17t-61.33 54.16l-46.67 42ZM726.67-280v-126.67H600v-66.66h126.67V-600h66.66v126.67H920v66.66H793.33V-280h-66.66Z"/></svg>
    `;
    
    if (boton.dataset.state === "corazon" ) {
        boton.innerHTML = svgNegro.trim();
        boton.dataset.state = "negro";
    } else {
        boton.innerHTML = svgCorazon.trim();
        boton.dataset.state = "corazon";
    }

    alert('¡Su producto a sido agregado a favoritos existosamente!');
}

/* ------------------------   ------Inicia el código JS del carrusel -----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let counter = 0;
    const intervalTime = 3000; // 3 segundos
    let slideInterval;

    // Función para pasar a la siguiente imagen
    function nextSlide() {
        if (counter >= images.length - 1) {
            counter = 0; // Si es la última imagen, volver a la primera
        } else {
            counter++;
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
        restartInterval(); // Reiniciar el temporizador
    }

    // Función para pasar a la imagen anterior
    function prevSlide() {
        if (counter <= 0) {
            counter = images.length - 1; // Si es la primera imagen, ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
        restartInterval(); // Reiniciar el temporizador
    }

    // Botón para la siguiente imagen
    nextBtn.addEventListener("click", () => {
        nextSlide();
    });

    // Botón para la imagen anterior
    prevBtn.addEventListener("click", () => {
        prevSlide();
    });

    // Función para reiniciar el temporizador
    function restartInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, intervalTime);
    }

    startSlide(); // Iniciar el autoplay al cargar la página

    // Autoplay
    function startSlide() {
        slideInterval = setInterval(() => {
            nextSlide();
        }, intervalTime);
    }

    // Event listeners para pausar y reiniciar el autoplay al pasar el mouse sobre el carrusel
    carouselSlide.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
    });

    carouselSlide.addEventListener("mouseleave", startSlide);
});

/* PrUBEAS.................................................................. */
document.querySelectorAll('.imagen-zoom img').forEach(img => {
    const zoomArea = img.nextElementSibling; // Asume que .zoom-area es el siguiente elemento hermano
    const zoom = document.getElementById('zoom');
    
    img.addEventListener('mouseenter', function() {
        const imgSrc = img.src;
        zoom.style.backgroundImage = `url(${imgSrc})`;
        zoom.style.display = 'block';
        zoomArea.style.display = 'block';
    });

    img.addEventListener('mousemove', function(event) {
        const rect = img.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const zoomWidth = zoom.offsetWidth;
        const zoomHeight = zoom.offsetHeight;
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const zoomAreaSize = 50; // Tamaño del área de zoom

        // Calcular las posiciones de fondo para el zoom
        const bgPosX = (offsetX / imgWidth) * 100;
        const bgPosY = (offsetY / imgHeight) * 100;
        zoom.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;

        // Limitar el movimiento del cuadro gris dentro de la imagen
        let zoomAreaLeft = offsetX - zoomAreaSize / 2;
        let zoomAreaTop = offsetY - zoomAreaSize / 2;

        if (zoomAreaLeft < 0) {
            zoomAreaLeft = 0;
        } else if (zoomAreaLeft + zoomAreaSize > imgWidth) {
            zoomAreaLeft = imgWidth - zoomAreaSize;
        }

        if (zoomAreaTop < 0) {
            zoomAreaTop = 0;
        } else if (zoomAreaTop + zoomAreaSize > imgHeight) {
            zoomAreaTop = imgHeight - zoomAreaSize;
        }

        zoomArea.style.width = `${zoomAreaSize}px`;
        zoomArea.style.height = `${zoomAreaSize}px`;
        zoomArea.style.left = `${zoomAreaLeft}px`;
        zoomArea.style.top = `${zoomAreaTop}px`;

        // Posicionar el contenedor de zoom
        zoom.style.left = `${event.pageX + 10}px`;
        zoom.style.top = `${event.pageY + 10}px`;
    });

    img.addEventListener('mouseleave', function() {
        zoom.style.display = 'none';
        zoomArea.style.display = 'none';
    });
});



