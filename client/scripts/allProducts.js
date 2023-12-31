const itemWrapper = document.getElementById("itemWrapper");

async function getProducts() {
  const apiURL = "https://fakestoreapi.com/products";
  const response = await fetch(apiURL);
  const data = await response.json();

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength) + "…" : str;
  }
  const products = data.map((each) => {
    const { title, price, description, category, image } = each;
    const newTitle = truncate(title, 50);
    const shortDescription = truncate(description, 80);

    return `
    <div class="item">
    
        <div class="product-details">
            <span class="category">${category}</span>
            <div class="image-wrapper">
                <img class="img" src="${image}" alt="backpack" />
            </div>
            <div class="prod-name">
                ${newTitle}
            </div>
            <div class="prod-desc">
                ${shortDescription}
            </div>
        <div class="prod-price">${price} MAT</div>
        </div>

        <div class="add-to-cart">Add to Cart</div>
    </div>`;
  });

  itemWrapper.innerHTML = products;
}

window.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
