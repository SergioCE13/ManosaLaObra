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
