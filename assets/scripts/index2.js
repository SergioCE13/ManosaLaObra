const listOfCardElements = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener('click', () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });
});
const listaDestacados = document.querySelectorAll('.card-destacados');
const cardContainerP = document.querySelector('.card-container-p');

listaDestacados.forEach((cardElement, index) => {
  cardElement.addEventListener('click', () => {
    const scrollLeft = index * listaDestacados[0].offsetWidth;
    cardContainerP.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });
});
const gameData = [
    {
      id: 1,
      title: "Venado Acostado",
      category: "Huichol",
      artesano: "Tienda Huichol",
      img: "../images/productos/Venado_acostado_EPX055_tierrahuichol_03_2024.jpg",
      price: "$ 350",
    },
  
  {
      id: 2,
      title: "Alebrije Perro",
      category: "Alebrijes",
      artesano: "Tienda Huichol",
      img: "../images/productos/1a3927b1d28959f46cc7d944aec11784.jpeg",
      price: "$ 1,000",
    },
    {
      id: 3,
      title: "Jarron",
      category: "Barro Negro",
      artesano: "Tienda Huichol",
      img: "../images/productos/56109N002G7_02_600x.jpg",
      price: "$ 1,250",
    },
    {
      id: 4,
      title: "Alebrije Pantera",
      category: "Alebrijes",
      artesano: "Tienda Huichol",
      img: "../images/productos/alebrije-de-jaguar-con-alas-con-significado.jpeg",
      price: "$ 2,500",
    },
    {
      id: 5,
      title: "Craneo Huichol",
      category: "Huichol",
      artesano: "Tienda Huichol",
      img: "../images/productos/craneo_grande1_600x.jpg",
      price: "$ 400",
    },
    {
      id: 6,
      title: "Plato Talavera",
      category: "Talavera",
      artesano: "Tienda Huichol",
      img: "../images/productos/download.jpeg",
      price: "$ 250",
    },
    {
      id: 7,
      title: "Coyote Alebrije",
      category: "Alebrijes",
      artesano: "Tienda Huichol",
      img: "../images/productos/PhotoRoom_20220116_213503_2048x.jpg",
      price: "$ 400",
    },
    {
      id: 8,
      title: "Juego de Jarrones",
      category: "Barro Negro",
      artesano: "Tienda Huichol",
      img: "../images/productos/Portada-Alfareria-Barro-Negro.jpeg",
      price: "$ 2,300",
    },
    {
      id: 9,
      title: "Juego de Te de Talavera",
      category: "Talavera",
      artesano: "Tienda Huichol",
      img: "../images/productos/TALAVERA.jpeg",
      price: "$ 999",
    },
    {
      id: 10,
      title: "Jarron de Talavera",
      category: "Talavera",
      artesano: "Tienda Huichol",
      img: "../images/productos/TB3P4OA03_02_600x.jpg",
      price: "$ 1,350",
    },
    {
      id: 11,
      title: "Tejido Tradicional",
      category: "Textiles",
      artesano: "Tienda Huichol",
      img: "../images/productos/Tenangos-3.jpeg",
      price: "$ 700",
    }
  ];
  
const productContainer = document.querySelector(".products_wrapper");
const ulEl = document.querySelector(".cats");


// Muestra todos los productos
window.addEventListener("DOMContentLoaded", () => {
  displayGameData(gameData);
  //recibe nueva categoria
  const categories = gameData.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Todos"],
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<li><a href="#" data-id="${category}">${category}</a></li>`;
    })
    .join("");
  ulEl.innerHTML = categoryBtns;
  // Links de las categorias
  const linksEl = document.querySelectorAll(".cats");
  linksEl.forEach((links) => {
    links.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
      const gameCategory = gameData.filter(function (data) {
        if (data.category === category) {
          return data;
        }
      });
      if (category === "Todos") {
        displayGameData(gameData);
      } else {
        displayGameData(gameCategory);
      }
    });
  });
});
// funcion para mostrar los productos
function displayGameData(productosCard) {
  let displayData = productosCard.map(function (cat_items) {
    return `<div class="products">
            <div class="pr_img">
              <img src="${cat_items.img}" alt="" />
            </div>
            <div class="content">
              <h3 class="title">${cat_items.title}</h3>
              <p class="artesanos">Por: ${cat_items.artesano}</p>
              <span onclick="gfg(1)"
              class="star">★
              </span>
              <span onclick="gfg(2)"
              class="star">★
              </span>
              <span onclick="gfg(3)"
              class="star">★
              </span>
              <span onclick="gfg(4)"
              class="star">★
              </span>
              <span onclick="gfg(5)"
              class="star">★
              </span>
              <p class="price"> ${cat_items.price}</p>
            </div>
          </div>`;
  });
  displayData = displayData.join("");
  productContainer.innerHTML = displayData;
}
// Para acceder a las estrellas
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Función que registra las estrellas
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}
 
// Funcion que retira las estrellas
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
