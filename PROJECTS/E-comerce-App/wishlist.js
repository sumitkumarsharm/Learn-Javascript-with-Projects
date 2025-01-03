let bagItemsObject;
onLoad();

function onLoad() {
  LoadbagItemsObject();
  DisplayBagItemas();
  DisplayBagSummery();
}
function LoadbagItemsObject() {
  bagItemsObject = Cart.map((itemId) => {
    // console.log(items);
    for (let i = 0; i < Products.length; i++) {
      if (itemId == Products[i].Id) {
        return Products[i];
      }
    }
  });
}

function DisplayBagItemas() {
  const containerElement = document.querySelector(".Bag_Item_ContainerOne");
  let innrHtml = "";
  bagItemsObject.forEach((item) => {
    innrHtml += generateItemHTML(item);
  });
  containerElement.innerHTML = innrHtml;
}

function removeFromBag(Id) {
  Cart = Cart.filter((item) => item != Id);
  localStorage.setItem("Cart", JSON.stringify(Cart));
  LoadbagItemsObject();
  DisplayBagItemas();
  BagItemCount();
  DisplayBagSummery();
}

function generateItemHTML(item) {
  const {
    productImage,
    productName,
    productDetails,
    currentPrice,
    originalPrice,
    discountPercentage,
    Id,
  } = item;
  return `
    <div class="Bag_Item_Container">
                    <div class="item-left-part">
                        <img src="${productImage}" alt="">
                    </div>
                    <div class="item-right-part">
                        <p class="ProductName">${productName}</p>
                        <p class="ProductDetails">${productDetails}</p>
                        <p class="Price">
                            <span class="CurrentPrice">Rs ${currentPrice}</span>
                            <span class="originalPrice">Rs ${originalPrice}</span>
                            <span class="discountPercentage">(${discountPercentage}% off)</span>
                        </p>
                        <p class="returnDays"><span>14 days </span>return availabe</p>
                        <p class="DeliveryData">Delivery by<span> 10 jan 2025</span></p>
                    </div>
                    <div class="cross-Icon" onClick="removeFromBag(${Id})">X</div>
                </div>
  `;
}

// showing bag summery
function DisplayBagSummery() {
  const BagSummery = document.querySelector(".Bag_Summery");
  let TotalItems = bagItemsObject.length;
  let TotalMRP = 0;
  let TotalDiscount = 0;
  const ConvinienceFee = 99;
  let FinalPrice = 0 + ConvinienceFee;

  bagItemsObject.forEach((item) => {
    TotalMRP += item.originalPrice;
    TotalDiscount += item.originalPrice - item.currentPrice;
  });

  FinalPrice = TotalMRP - TotalDiscount + ConvinienceFee;
  BagSummery.innerHTML = `
                    <div class="Bag_Summery-Container">
                    <p class="price-details">Price Details <span>(${TotalItems} item)</span></p>
                    <div class="total_price">
                        <span>total MRP</span>
                        <span>₹ ${TotalMRP}</span>
                    </div>
                    <div class="Discount_MRP">
                        <span>Discount on MRP</span>
                        <span class="discount">-₹ ${TotalDiscount}</span>
                    </div>
                    <div class="Convinience_fee">
                        <span>Convinience fee</span>
                        <span>₹ ${ConvinienceFee}</span>
                    </div>
                    <div class="border-line"></div>
                    <div class="Paybal_Amout">
                        <span>Total Amount</span>
                        <span>₹ ${FinalPrice}</span>
                    </div>
                </div>
                <button class="place_order-btn">Place Order</button>
    `;
}
