const gameData = [
  {
    id: 12,
    title: "Centro de mesa",
    category: "Barro Negro",
    artesano: "José Perez",
    img: "/assets/images/producto/producto1.png",
    price: "$ 2,500",
    url:"/assets/html/producto.html",
  },

{
    id: 2,
    title: "Alebrije Perro",
    category: "Alebrijes",
    artesano: "José Pérez",
    img: "/assets/images/productos/1a3927b1d28959f46cc7d944aec11784.jpeg",
    price: "$ 1,000",
  },
  {
    id: 3,
    title: "Jarron",
    category: "Barro Negro",
    artesano: "José Pérez",
    img: "/assets/images/productos/56109N002G7_02_600x.jpg",
    price: "$ 1,250",
  },
  {
    id: 4,
    title: "Alebrije Pantera",
    category: "Alebrijes",
    artesano: "José Pérez",
    img: "/assets/images/productos/alebrije-de-jaguar-con-alas-con-significado.jpeg",
    price: "$ 2,500",
  },
  {
    id: 5,
    title: "Craneo Huichol",
    category: "Huichol",
    artesano: "José Pérez",
    img: "/assets/images/productos/craneo_grande1_600x.jpg",
    price: "$ 400",
  },
  {
    id: 6,
    title: "Plato Talavera",
    category: "Talavera",
    artesano: "José Pérez",
    img: "/assets/images/productos/download.jpeg",
    price: "$ 250",
  },
  {
    id: 7,
    title: "Coyote Alebrije",
    category: "Alebrijes",
    artesano: "José Pérez",
    img: "/assets/images/productos/PhotoRoom_20220116_213503_2048x.jpg",
    price: "$ 400",
  },
  {
    id: 8,
    title: "Juego de Jarrones",
    category: "Barro Negro",
    artesano: "José Pérez",
    img: "/assets/images/productos/Portada-Alfareria-Barro-Negro.jpeg",
    price: "$ 2,300",
  },
  {
    id: 9,
    title: "Juego de Te",
    category: "Talavera",
    artesano: "José Pérez",
    img: "/assets/images/productos/TALAVERA.jpeg",
    price: "$ 999",
  },
  {
    id: 10,
    title: "Jarron de Talavera",
    category: "Talavera",
    artesano: "José Pérez",
    img: "/assets/images/productos/TB3P4OA03_02_600x.jpg",
    price: "$ 1,350",
  },
  {
    id: 11,
    title: "Tejido Tradicional",
    category: "Textiles",
    artesano: "José Pérez",
    img: "/assets/images/productos/Tenangos-3.jpeg",
    price: "$ 700",
  },
  {
    id: 1,
    title: "Venado Acostado",
    category: "Huichol",
    artesano: "José Pérez",
    img: "/assets/images/productos/Venado_acostado_EPX055_tierrahuichol_03_2024.jpg",
    price: "$ 350",
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
  return `<a href="${cat_items.url}"<div class="products">
          <div class="pr_img">
            <img src="${cat_items.img}" alt="" />
          </div>
          <div class="content">
            <h3 class="title">${cat_items.title}</h3>
            <p class="artesanos">Artesano: ${cat_items.artesano}</p>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <p class="price"> ${cat_items.price}</p>
            <div class="btnproducto">
            <button class="button-33"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg></button>
          <button class="button-33"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg></button>
            
            </div>
          </div>
        </div>>`;
});
displayData = displayData.join("");
productContainer.innerHTML = displayData;
}

