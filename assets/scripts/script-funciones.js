
//lista de productos (listaProductos) con el nombre de las artesanías.
let listaProductos = [
    {
      "nombre": "Cartera morada tipo Clutch",
      "categoria": "Moda",
      "acercaDelProducto": "Cartera elegante para ocasiones especiales.",
      "caracteristicas": "Color morado, diseño tipo Clutch, material sintético.",
      "informacionAdicional": "Incluye cadena para llevarla al hombro.",
      "precio": 50,
      "stock": 20,
      "medidas": "20cm x 10cm",
      "tecnica": "Fabricación industrial"
    },
    {
      "nombre": "Bolsa tejida a manos con Grecas Rosas",
      "categoria": "Moda",
      "acercaDelProducto": "Bolsa artesanal con diseño tejido.",
      "caracteristicas": "Color rosa, tejido a mano, material natural.",
      "informacionAdicional": "Ideal para uso diario o como accesorio.",
      "precio": 80,
      "stock": 15,
      "medidas": "30cm x 25cm",
      "tecnica": "Tejido a mano"
    },
    {
      "nombre": "Bolsa de palma redonda",
      "categoria": "Moda",
      "acercaDelProducto": "Bolsa de estilo casual con diseño redondo.",
      "caracteristicas": "Material de palma, color natural, asas de tela.",
      "informacionAdicional": "Resistente y cómoda para llevar objetos personales.",
      "precio": 40,
      "stock": 30,
      "medidas": "25cm de diámetro",
      "tecnica": "Tejido artesanal"
    },
    {
      "nombre": "Sombrero de hombre cafe",
      "categoria": "Moda",
      "acercaDelProducto": "Sombrero clásico para hombre.",
      "caracteristicas": "Color café, ala ancha, ajustable.",
      "informacionAdicional": "Protección UV, ideal para días soleados.",
      "precio": 35,
      "stock": 25,
      "medidas": "Talla única ajustable",
      "tecnica": "Fabricación industrial"
    },
    {
      "nombre": "Aretes Colores",
      "categoria": "Moda",
      "acercaDelProducto": "Aretes llamativos con diseño colorido.",
      "caracteristicas": "Variedad de colores, diseño moderno.",
      "informacionAdicional": "Ligeros y fáciles de combinar.",
      "precio": 15,
      "stock": 50,
      "medidas": "3cm de diámetro",
      "tecnica": "Fabricación industrial"
    },
    {
      "nombre": "Aretes Clásicos",
      "categoria": "Moda",
      "acercaDelProducto": "Aretes elegantes y versátiles.",
      "caracteristicas": "Color plateado, diseño clásico.",
      "informacionAdicional": "Atemporales, ideales para ocasiones formales.",
      "precio": 25,
      "stock": 40,
      "medidas": "2cm de diámetro",
      "tecnica": "Fabricación industrial"
    },
    {
      "nombre": "Jarron Céramica",
      "categoria": "Hogar",
      "acercaDelProducto": "Jarrón decorativo de cerámica.",
      "caracteristicas": "Diseño moderno, color blanco.",
      "informacionAdicional": "Ideal para arreglos florales o como adorno.",
      "precio": 30,
      "stock": 15,
      "medidas": "30cm de altura",
      "tecnica": "Fabricación artesanal"
    },
    {
      "nombre": "Sombrero pintado a mano estilo Tenango",
      "categoria": "Moda",
      "acercaDelProducto": "Sombrero pintado a mano con diseño Tenango.",
      "caracteristicas": "Diseño colorido y tradicional.",
      "informacionAdicional": "Pieza única y artesanal.",
      "precio": 50,
      "stock": 10,
      "medidas": "Talla única ajustable",
      "tecnica": "Pintura artesanal"
    },
    {
      "nombre": "Pulsera huichol",
      "categoria": "Moda",
      "acercaDelProducto": "Pulsera artesanal con diseño huichol.",
      "caracteristicas": "Colores vibrantes y diseño étnico.",
      "informacionAdicional": "Hecha a mano por artesanos.",
      "precio": 20,
      "stock": 35,
      "medidas": "Ajustable",
      "tecnica": "Tejido artesanal"
    },
    {
      "nombre": "Protector para celular",
      "categoria": "Accesorios",
      "acercaDelProducto": "Protector resistente para celular.",
      "caracteristicas": "Material duradero, varios modelos disponibles.",
      "informacionAdicional": "Protege tu celular de golpes y caídas.",
      "precio": 15,
      "stock": 60,
      "medidas": "Modelo específico para cada celular",
      "tecnica": "Fabricación artesanal"
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
    let indiceElemento = tokenObject.findIndex(producto => producto.nombre === nombreProducto);
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
    let indiceElemento = tokenObject.findIndex(producto => producto.nombre === nombreProducto);
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
  "nombre": "Aretes de Pirita",
  "categoria": "Aretes",
  "acercaDelProducto": "Aretes elaborados con Pirita",
  "caracteristicas": "Tipo de Arete colgante con Pirita 100% Natural, Plata Ag .925, color Ocre",
  "informacionAdicional": "Piezas seleccionadas, auténticas y originales (Marca Argentum Taxco)",
  "precio": 65,
  "stock": 10,
  "medidas": "2 cm x 1 mm" ,
  "tecnica": "Artesanal"
};




//Agregando nueva información a donde se quiere editar
  let nuevaInformacion = {
    "categoria": "Pulseras",
    "precio": 100,
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
  

 





  

  