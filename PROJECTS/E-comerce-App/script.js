const ItemsImages = [
  {
    Id: "01",
    CategoryImage: "Assets/items-clothes/Assets1/01_Assets.png",
    CategoryName: "Ethnic Wear",
    DiscountStart: 50,
    DiscountUpto: 80,
  },
  {
    Id: "02",
    CategoryImage: "Assets/items-clothes/Assets1/02_Assets.png",
    CategoryName: "Casual Wear",
    DiscountStart: 55,
    DiscountUpto: 60,
  },
  {
    Id: "03",
    CategoryImage: "Assets/items-clothes/Assets1/03_Assets.png",
    CategoryName: "Men SportsWear",
    DiscountStart: 45,
    DiscountUpto: 55,
  },
  {
    Id: "04",
    CategoryImage: "Assets/items-clothes/Assets1/04_Assets.png",
    CategoryName: "Women SportsWear",
    DiscountStart: 65,
    DiscountUpto: 80,
  },
  {
    Id: "05",
    CategoryImage: "Assets/items-clothes/Assets1/05_Assets.png",
    CategoryName: "Western Wear",
    DiscountStart: 10,
    DiscountUpto: 45,
  },
  {
    Id: "06",
    CategoryImage: "Assets/items-clothes/Assets1/06_Assets.png",
    CategoryName: "SportsWear",
    DiscountStart: 20,
    DiscountUpto: 40,
  },
  {
    Id: "07",
    CategoryImage: "Assets/items-clothes/Assets1/07_Assets.png",
    CategoryName: "Lounge Wear",
    DiscountStart: 20,
    DiscountUpto: 70,
  },
  {
    Id: "08",
    CategoryImage: "Assets/items-clothes/Assets1/08_Assets.png",
    CategoryName: "men's Footwear",
    DiscountStart: 10,
    DiscountUpto: 70,
  },
  {
    Id: "09",
    CategoryImage: "Assets/items-clothes/Assets1/09_Assets.png",
    CategoryName: "Women's Footwear",
    DiscountStart: 35,
    DiscountUpto: 85,
  },
  {
    Id: "10",
    CategoryImage: "Assets/items-clothes/Assets1/10_Assets.png",
    CategoryName: "belt's & wallets",
    DiscountStart: 45,
    DiscountUpto: 65,
  },
  {
    Id: "11",
    CategoryImage: "Assets/items-clothes/Assets1/11_Assets.png",
    CategoryName: "Office Wear",
    DiscountStart: 30,
    DiscountUpto: 40,
  },
  {
    Id: "12",
    CategoryImage: "Assets/items-clothes/Assets1/12_Assets.png",
    CategoryName: "Home Decore",
    DiscountStart: 0,
    DiscountUpto: 66,
  },
  {
    Id: "13",
    CategoryImage: "Assets/items-clothes/Assets1/13_Assets.png",
    CategoryName: "Women's HandBag",
    DiscountStart: 50,
    DiscountUpto: 75,
  },
  {
    Id: "14",
    CategoryImage: "Assets/items-clothes/Assets1/14_Assets.png",
    CategoryName: "Jewellery",
    DiscountStart: 20,
    DiscountUpto: 60,
  },
  {
    Id: "15",
    CategoryImage: "Assets/items-clothes/Assets1/15_Assets.png",
    CategoryName: "EyeWear",
    DiscountStart: 10,
    DiscountUpto: 80,
  },
];

const SelectByCategory = document.querySelector(".SelectByCategoryImage");

ItemsImages.forEach((items) => {
  const { Id, CategoryImage, CategoryName, DiscountStart, DiscountUpto } =
    items;
  SelectByCategory.innerHTML += ` <div class="item_container" data-id="${Id}">
                    <a href="./productsCart.html">
                        <img class="sale-items" src="${CategoryImage}" alt="">
                        <p>${CategoryName}</p>
                        <h2>${DiscountStart}% - ${DiscountUpto}%off</h2>
                        <p>shop now</p>
                    </a>
                </div>`;
});
