const products = document.getElementById("products");
const input = document.getElementById("input");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
let username = getCookie("userAuth");
if (!username) {
  location.href = "/";
}

displayProducts()



const imgRoutePrefix = "../img/"

let productList = [
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

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/product/getProducts');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    productList = await response.json(); 
    return productList;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function loadFavorites() {
  try {
    const response = await fetch(`http://localhost:3000/product/getFavorites/${username}`); 
    if (!response.ok) {
      throw new Error('Failed to load favorites');
    }
    const favorites = await response.json();
    return favorites;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}



async function displayProducts() {
  await fetchProducts();  
  likedProducts = await loadFavorites(); //
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

    heartButton.addEventListener("click", () => toggleLike(product.productName, heartButton)); 



    const productName = document.createElement("h3");
    productName.innerText = product.productName;

    productItem.appendChild(img);
    productItem.appendChild(heartButton); 
    productItem.appendChild(productName);
    productContainer.appendChild(productItem);
  });
}

// Function to toggle like status
async function toggleLike(productName, heartButton) {
  try {
    const response = await fetch('http://localhost:3000/product/toggleFavorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, productName }) 
    });

    if (!response.ok) {
      throw new Error('Failed to toggle favorite');
    }

    const result = await response.json();

    if (result.favorites.includes(productName)) {
      heartButton.classList.add("liked");
    } else {
      heartButton.classList.remove("liked");
    }

  } catch (error) {
    console.error("Error:", error);
  }
}


