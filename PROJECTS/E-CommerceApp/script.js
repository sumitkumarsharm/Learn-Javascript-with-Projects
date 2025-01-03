document.addEventListener("DOMContentLoaded", () => {
  const Products = [
    { id: 1, name: "Product 1", price: 599.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 290.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 548.99, quantity: 3 },
    { id: 4, name: "Product 4", price: 298.99, quantity: 1 },
    { id: 5, name: "Product 5", price: 899.99, quantity: 2 },
  ];

  let cart = [];

  const productsList = document.getElementById("products-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const CartTotalMessage = document.getElementById("Cart-total");
  const TotalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  Products.forEach((product) => {
    productsList.innerHTML += `<div class="flex justify-between  bg-slate-500 px-2 py-3 rounded text-xl my-2">
    <span class="">${product.name}</span>
    <span class="product-price">₹${product.price.toFixed(2)}</span>
    <button class="bg-red-700 px-2 py-1 rounded cursor-pointer hover:bg-red-800 transition-all duration-200" data-id = "${
      product.id
    }">Add to Cart</button>
  </div>`;
    // productsList.innerHTML += productHTML;
  });

  productsList.addEventListener("click", (event) => {
    // here i want to add the product to the cart
    if (event.target.tagName === "BUTTON") {
      const productId = parseInt(event.target.dataset.id);
      const product = Products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    TotalPrice.textContent = 0.0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      CartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        cartItems.innerHTML += `<div class="flex justify-between  bg-slate-500 px-2 py-3 rounded text-xl my-2">
        <span class="">${item.name}</span>
        <span class="product-price">₹${item.price.toFixed(2)}</span>
        <button class="bg-red-700 px-2 py-1 rounded cursor-pointer hover:bg-red-800 transition-all duration-200" data-id = "${
          item.id
        }">Delete</button>
      </div>`;
        // when i click the delete button the item is deleted that item is deleted from the cart
        cartItems.addEventListener("click", (event) => {
          if (event.target.tagName === "BUTTON") {
            const productId = parseInt(event.target.dataset.id);
            const productIndex = cart.findIndex((p) => p.id === productId);
            if (productIndex !== -1) {
              cart.splice(productIndex, 1);
              renderCart();
            }
          }
        });

        // adding the total price of the cart
        TotalPrice.textContent =
          parseFloat(TotalPrice.textContent) +
          parseFloat(item.price.toFixed(2));
      });
    } else {
      // if the cart is empty display the empty cart message
      emptyCartMessage.classList.remove("hidden");
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Thank you for your purchase!");
    renderCart();
  });
});
