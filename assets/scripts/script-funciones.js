//lista de productos (listaProductos) con el nombre de las artesanías.
let listaProductos = [
    {
      "name": "Cartera morada tipo Clutch",
      "cost": 50,
      "category": "Moda",
      "description": "Cartera elegante para ocasiones especiales.",
      "additionalInfo": "Incluye cadena para llevarla al hombro.",
      "stock": 20,
      "height":12,
      "width":25,
      "lenght":8,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]
    },
    {
      "name": "Bolsa tejida a manos con Grecas Rosas",
      "cost": 80,
      "category": "Moda",
      "description": "Bolsa artesanal con diseño tejido.",
      "additionalInfo": "Ideal para uso diario o como accesorio.",
      "stock": 15,
      "height": 80,
      "width": 65,
      "lenght": 10,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Bolsa de palma redonda",
      "cost": 40,
      "category": "Moda",
      "description": "Bolsa de estilo casual con diseño redondo.",
      "additionalInfo": "Resistente y cómoda para llevar objetos personales.",
      "stock": 30,
      "height": 75,
      "width": 42,
      "lenght": 18,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Sombrero de hombre cafe",
      "cost": 35,
      "category": "Moda",
      "description": "Sombrero clásico para hombre.",
      "additionalInfo": "Protección UV, ideal para días soleados.",
      "stock": 25,
      "height": 20,
      "width": 72,
      "lenght": 72,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Aretes Colores",
      "cost": 15,
      "category": "Moda",
      "description": "Aretes llamativos con diseño colorido.",
      "additionalInfo": "Ligeros y fáciles de combinar.",
      "stock": 50,
      "height": 8,
      "width": 5,
      "lenght": 2,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Aretes Clásicos",
      "cost": 25,
      "category": "Moda",
      "description": "Aretes elegantes y versátiles.",
      "additionalInfo": "Atemporales, ideales para ocasiones formales.",
      "stock": 40,
      "height": 8,
      "width": 5,
      "lenght": 3,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Jarron Céramica",
      "cost": 30,
      "category": "Hogar",
      "description": "Jarrón decorativo de cerámica.",
      "additionalInfo": "Ideal para arreglos florales o como adorno.",
      "stock": 15,
      "height": 30,
      "width": 20,
      "lenght": 20,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Sombrero pintado a mano estilo Tenango",
      "cost": 50,
      "category": "Moda",
      "description": "Sombrero pintado a mano con diseño Tenango.",
      "additionalInfo": "Pieza única y artesanal.",
      "stock": 10,
      "height": 20,
      "width": 65,
      "lenght": 65,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "nombre": "Pulsera huichol",
      "cost": 20,
      "category": "Moda",
      "description": "Pulsera artesanal con diseño huichol.",
      "additionalInfo": "Hecha a mano por artesanos.",
      "stock": 35,
      "height": 1.5,
      "width": 12,
      "lenght": 12,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    },
    {
      "name": "Protector para celular",
      "cost": 15,
      "category": "Accesorios",
      "description": "Protector resistente para celular.",
      "additionalInfo": "Protege tu celular de golpes y caídas.",
      "stock": 60,
      "height": 20,
      "width": 12,
      "lenght": 1.2,
      "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]

    }
  ];
  

/*-------------------------------Función para agregar un Objeto al JSON----------------------------------------------*/

//La función toma los parámetros ya creados y los utiliza para crear un nuevo objeto 
//Luego, este objeto se agrega al local storage utilizando el método push(), lo que significa que se añade al final de la lista.
function agregarObjeto(nombreLista,objeto) {
    const localStorageItem = localStorage.getItem(nombreLista);  //Obteniendo el objeto del local Stoage. Se utiliza el getItem para localizar el objeto por key(nombre) 
    const tokenObject = JSON.parse(localStorageItem); //Covirtiendolo a objeto de Js
    tokenObject.push(objeto)
    //console.log(tokenObject);
    addToLocalStorage (nombreLista, tokenObject);
  };
  

/*---------------------------------Función para modificar un Objeto en el JSON-------------------------------------------------*/


function editarObjeto(nombreLista, nombreProducto, nuevaInformacion) {
  const localStorageItem = localStorage.getItem(nombreLista);  //Obteniendo el objeto del local Stoage. Se utiliza el getItem para localizar el objeto por key(nombre) 
    const tokenObject = JSON.parse(localStorageItem); //Covirtiendolo a objeto de Js
    
    // Buscando el índice del objeto cuyo nombre coincida con nombreProducto en listaProductos
    let indiceElemento = tokenObject.findIndex(producto => producto.name === nombreProducto);
     // Verificando si se encontró el elemento (índiceElemento !== -1)
    if (indiceElemento !== -1) {
        // Utiliza el operador de propagación (...) para combinar la información existente con la nueva información
        //Esto permite actualizar solo las propiedades específicas que se proporcionan en nuevaInformacion, manteniendo las demás propiedades del elemento sin cambios.
      tokenObject[indiceElemento] = { ...tokenObject[indiceElemento], ...nuevaInformacion };
    } else {
      console.error("Índice de elemento fuera de rango.");
    }
    addToLocalStorage (nombreLista, tokenObject);
  }


  /*-----------------------------Función para eliminar un objeto  del JSON-----------------------------*/
  
  //La función busca un elemento en una lista por su nombre utilizando findIndex, y si lo encuentra, lo elimina de la lista utilizando splice.
  
  function eliminarObjeto(nombreLista, nombreProducto) {
    const localStorageItem = localStorage.getItem(nombreLista);  //Obteniendo el objeto del local Stoage. Se utiliza el getItem para localizar el objeto por key(nombre) 
    const tokenObject = JSON.parse(localStorageItem); //Covirtiendolo a objeto de Js
    
    // Buscando el índice del objeto cuyo nombre coincida con nombreProducto en listaProductos
    let indiceElemento = tokenObject.findIndex(producto => producto.name === nombreProducto);
    // Verificando si se encontró el elemento (índiceElemento !== -1)
    if (indiceElemento !== -1) {
    // Utilizando el método splice para eliminar 1 elemento a partir del índice indiceElemento
      tokenObject.splice(indiceElemento, 1);
    } else {
      console.log("El producto no existe en la lista.");
    }
    addToLocalStorage (nombreLista, tokenObject);

  }

/**La función de callback producto => producto.nombre === nombreProducto se ejecuta para cada elemento de la lista.
Compara el nombre de cada producto (producto.nombre) con el nombre del producto que queremos eliminar (nombreProducto).
findIndex devuelve el índice del primer elemento para el cual la función de callback devuelve true, es decir, el índice del elemento cuyo nombre coincide con nombreProducto.
Si ningún elemento cumple la condición, findIndex devuelve -1.*/
  
  
  /*----------------------------Función para borrar toda la lista del JSON---------------------------------*/
  
  //En esta función borrarLista, simplemente asignamos un arreglo vacío [] a la variable listaProductosJSON, lo que hace que la lista quede vacía y elimina todos los elementos que había anteriormente.

  function borrarLista(nombreLista) {
     //Covirtiendolo a objeto de Js
    localStorage.removeItem(nombreLista);
  }
  


/*Add to local Storage*/

function addToLocalStorage (nombreLista, lista) {
 localStorage.setItem(nombreLista, JSON.stringify(lista));
}





  /*-------------------------------------------Ejemplo de uso--------------------------------------------*/
  

//Agregando un nuevo Objeto
let nuevoObjeto = {
  "name": "Aretes de Pirita",
  "cost": 65,
  "category": "Aretes",
  "description": "Aretes elaborados con Pirita",
  "additionalInfo": "Piezas seleccionadas, auténticas y originales (Marca Argentum Taxco)",
  "stock": 10,
  "height": 8,
  "width": 2,
  "lenght": 2,
  "images": ["imagen1.jpg", "imagen2.png", "imagen3.jpg"]
};




//Agregando nueva información a donde se quiere editar
  let nuevaInformacion = {
    "category": "Pulseras",
    "cost": 100,
    "stock": 10
  };
  
//llamando local Storage
addToLocalStorage('JSONProducts',listaProductos);


//Agregando objeto
agregarObjeto('JSONProducts',nuevoObjeto);


//editando objeto
editarObjeto('JSONProducts', "Pulsera huichol" , nuevaInformacion); 

  
//eliminando objeto
eliminarObjeto('JSONProducts', "Protector para celular");
  
//borrando lista
//borrarLista('JSONProducts');

