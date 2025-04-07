const sectionOfLaptops = document.querySelector(".laptops");

function addProducts() {
  laptops.forEach((product) => {
    const articleProduct = document.createElement("article");
    articleProduct.classList = "product";
    articleProduct.innerHTML = `
    <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <button>Más Detalles</button>
          <button class="btnBuy">Agregar al carrito</button>
    `;
    sectionOfLaptops.appendChild(articleProduct);
  });

  const sectionOfpcs = document.querySelector(".pcs");
  pcs.forEach((product) => {
    const articleProduct = document.createElement("article");
    articleProduct.classList = "product";
    articleProduct.innerHTML = `
    <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <button>Más Detalles</button>
          <button class="btnBuy">Agregar al carrito</button>
    `;
    sectionOfpcs.appendChild(articleProduct);
  });

  const sectionOfmobiles = document.querySelector(".mobiles");
  mobiles.forEach((product) => {
    const articleProduct = document.createElement("article");
    articleProduct.classList = "product";
    articleProduct.innerHTML = `
    <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <button>Más Detalles</button>
          <button class="btnBuy">Agregar al carrito</button>
    `;
    sectionOfmobiles.appendChild(articleProduct);
  });
}

addProducts();
