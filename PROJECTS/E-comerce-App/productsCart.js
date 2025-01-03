let Cart;
onLoad();

function onLoad() {
  Cart = JSON.parse(localStorage.getItem("Cart")) || [];
  renderCart();
  BagItemCount();
}

function addToCart(itemId) {
  Cart.push(itemId);
  localStorage.setItem("Cart", JSON.stringify(Cart));
  BagItemCount();
}

function BagItemCount() {
  let BagItemsElement = document.querySelector(".bagItem-Count");
  if (Cart.length > 0) {
    BagItemsElement.style.visibility = "visible";
    BagItemsElement.textContent = Cart.length;
  } else {
    BagItemsElement.style.visibility = "hidden";
  }
}

function renderCart() {
  const mainProductContainer = document.getElementById("card-Container");
  if(!mainProductContainer) return;
  

  Products.forEach((item) => {
    const {
      Id,
      productImage,
      productName,
      productDetails,
      currentPrice,
      originalPrice,
      discountPercentage,
      rating,
    } = item;

    mainProductContainer.innerHTML += `
 <div class="card">
                <div class="img-container data-id=${Id}">
                    <img src="${productImage}" alt="">
                    <p class="rating">
                        <span>${rating.rate}</span>
                        <span class="material-symbols-outlined starts" style="color: rgb(28, 230, 75)">star</span>
                        | <span> ${rating.count}k</span>
                    </p>
                </div>
                <h2 class="cart-title">${productName}</h2>
                <p class="cart-details">${productDetails}</p>
                <div class="price-container">
                    <span class="price">Rs ${currentPrice}</span>
                    <span class="old-price">Rs ${originalPrice}</span>
                    <span class="offers">(${discountPercentage}% off)</span>
                </div>
                <button class="hidden" onClick="addToCart(${Id})">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    wishlist
                </button>
            </div>
`;
  });
}
