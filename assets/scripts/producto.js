const botonComprar = document.getElementById('boton-comprar');
let x = 0;

botonComprar.addEventListener('click', function(){
    console.log('Hola', x);
    x++;
});

const miniaturas = document.querySelectorAll('.miniaturas img');
const imagenPrincipal = document.getElementById('imagen-principal');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        imagenPrincipal.src = this.src;
    });
});

function cambioCorazon() {
    const boton = document.getElementById("boton-corazon");
    const svgCorazon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#E31B9F"><path d="M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.06 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47q6.63 6.48 14.37 14.03 7.74 7.55 14.37 14.03L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"/></svg>
    `;
    const svgNegro = `
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.06 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47q6.63 6.48 14.37 14.03 7.74 7.55 14.37 14.03L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"/></svg>
    `;
    
    if (boton.dataset.state === "corazon") {
        boton.innerHTML = svgNegro.trim();
        boton.dataset.state = "negro";
    } else {
        boton.innerHTML = svgCorazon.trim();
        boton.dataset.state = "corazon";
    }

    alert('¡Su producto a sido agregado a favoritos existosamente!');
}
