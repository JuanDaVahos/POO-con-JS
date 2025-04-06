const sectionOfProducts = document.querySelector(".products");

function addProducts() {
  AllProducts.forEach((product) => {
    const articleProduct = document.createElement("article");
    articleProduct.classList = "product";
    articleProduct.innerHTML = `
    <h4 class="name">${product.name}</h4>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="price">${product.price}</h3>
          <p class="description">
            ${product.description}
          </p>
    `;
    const article = document.querySelector(".product");
    sectionOfProducts.appendChild(articleProduct);
  });
}

addProducts();
