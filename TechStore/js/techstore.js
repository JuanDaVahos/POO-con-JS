const sectionOfProducts = document.querySelector(".products");

function addProducts() {
  AllProducts.forEach((product) => {
    const articleProduct = document.createElement("article");
    articleProduct.classList = "product";
    articleProduct.innerHTML = ``;
  });
}
