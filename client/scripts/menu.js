const products = document.getElementById("products");
const input = document.getElementById("input");

const imgRoutePrefix = "../img/"

const productList = [
  {
    productName: "Orange Juice",
    imgsrc: "orange_juice.jpg"
  },
  {
    productName: "Apple Juice",
    imgsrc: "apple_juice.jpg"
  },
  {
    productName: "Grape Juice",
    imgsrc: "grapes.jpg"
  },
  {
    productName: "Pineapple Juice",
    imgsrc: "pineapple_juice.jpg"
  },
  {
    productName: "Espresso",
    imgsrc: "espresso.jpg"
  },
  {
    productName: "Cappuccino",
    imgsrc: "cappuccino.jpg"
  }
];

let likedProducts = new Array(productList.length).fill(false);

function displayProducts() {
  const productContainer = document.getElementById("product-list");

  productContainer.innerHTML = ""; 

  productList.forEach((product, index) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const img = document.createElement("img");
    img.src = imgRoutePrefix + product.imgsrc;  
    img.alt = product.productName;

    const heartButton = document.createElement("button");
    heartButton.classList.add("heart-btn");
    // Unicode for heart symbol
    heartButton.innerHTML = "&#10084;"; 

    if (likedProducts[index]) {
      heartButton.classList.add("liked");
    }

    heartButton.addEventListener("click", () => toggleLike(index, heartButton)); 



    const productName = document.createElement("h3");
    productName.innerText = product.productName;

    productItem.appendChild(img);
    productItem.appendChild(heartButton); 
    productItem.appendChild(productName);
    productContainer.appendChild(productItem);
  });
}

function toggleLike(index, heartButton) {
  likedProducts[index] = !likedProducts[index];
  heartButton.classList.toggle("liked", likedProducts[index]);
}


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

displayProducts()

let username = getCookie("userAuth");
if (!username) {
  location.href = "/";
}