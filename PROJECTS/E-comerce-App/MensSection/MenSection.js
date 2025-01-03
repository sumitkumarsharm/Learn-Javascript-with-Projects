function addToCart(itemId) {
  Cart.push(itemId);
  localStorage.setItem("Cart", JSON.stringify(Cart));
  BagItemCount();
}

ShowingItemsOnPage();
function ShowingItemsOnPage() {
  const MenContainer = document.getElementById("Men_Container");

  // getting items form the database whch all are prersent in the MensData.js
  MensClothesesAccesseroies.forEach((item) => {
    const {
      Id,
      productImage,
      productName,
      productDetails,
      currentPrice,
      originalPrice,
      Discount,
    } = item;
    MenContainer.innerHTML += `

          <div class="card">
                <div class="img-container" data-id=${Id}>
                    <img src="${productImage}" alt="">
                    <p class="rating">
                        <span>4.5</span>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                        | <span>11.5k</span>
                    </p>
                </div>
                <h2 class="cart-title">${productName}</h2>
                <p class="cart-details">${productDetails}</p>
                <div class="price-container">
                    <span class="price">₹ ${currentPrice}</span>
                    <span class="old-price">₹ ${originalPrice}</span>
                    <span class="offers">(${Discount}% off)</span>
                </div>
                <button class="hidden" onClick="addToCart(${Id}">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    wishlist
                </button>
          </div>
`;
  });
}
