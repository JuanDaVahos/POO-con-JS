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
      <button id="openModal">Más Detalles</button>
      <dialog closedby="any">
        <form method="dialog">
          <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <p>Procesador: ${product.processor}</p>
          <p>Unidades = ${product.getStock()}</p>
          <button class="btnBuy">Agregar al carrito</button>
          <button class="closeModal">Cerrar</button>
        </form>
      </dialog>
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
      <button id="openModal">Más Detalles</button>
      <dialog closedby="any">
        <form method="dialog">
          <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <p>Procesador: ${product.processor}</p>
          <p>Memoria Ram: ${product.ram}</p>
          <p>Almacenamiento: ${product.storage}</p>
          <p>GPU: ${product.gpu}</p>
          <p>Unidades = ${product.getStock()}</p>
          <button class="btnBuy">Agregar al carrito</button>
          <button class="closeModal">Cerrar</button>
        </form>
      </dialog>
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
      <button id="openModal">Más Detalles</button>
      <dialog closedby="any">
        <form method="dialog">
          <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
          <p>Procesador: ${product.processor}</p>
          <p>Camara: ${product.camera}</p>
          <p>Almacenamiento: ${product.storage}</p>
          <p>Bateria: ${product.batery}</p>
          <p>Unidades = ${product.getStock()}</p>
          <button class="btnBuy">Agregar al carrito</button>
          <button class="closeModal">Cerrar</button>
        </form>
      </dialog>
      <button class="btnBuy">Agregar al carrito</button>
    `;
    sectionOfmobiles.appendChild(articleProduct);
  });
}

function openModalInfo() {
  const buttonOpenModal = document.querySelectorAll("#openModal");

  buttonOpenModal.forEach((btnOpenModal) => {
    btnOpenModal.addEventListener("click", () => {
      const modal = btnOpenModal.closest("article").querySelector("dialog");
      if (modal) {
        modal.showModal();
        document.body.style.overflow = "hidden";

        modal.addEventListener("close", () => {
          document.body.removeAttribute("style");
        });
      }
    });
  });
}

function addToCart() {
  const btnBuy = document.querySelectorAll("btnBuy");

  btnBuy.forEach((btnAddToCart) => {
    btnAddToCart.addEventListener("click", () => {});
  });
}

addProducts();
openModalInfo();
