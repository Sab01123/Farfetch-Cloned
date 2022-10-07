let data = JSON.parse(localStorage.getItem("proDetails"));
console.log(data);
displayDiscription(data);
displayData(data);

function displayData(data) {
  let img = document.createElement("div"); // width--65%
  img.setAttribute("id", "image");

  let info = document.createElement("div"); // width--35%
  info.setAttribute("id", "information");
  let pic = document.createElement("img");
  pic.src = data.img1;
  let pic2 = document.createElement("img");
  pic2.src = data.img2;

  let brand = document.createElement("p");
  brand.innerText = data.brand;
  brand.setAttribute("class", "headi");

  let category = document.createElement("p");
  category.textContent = data.category;
  category.style.color = "rgb(34, 34, 34)";
  category.style.fontWeight = "400";
  category.style.fontSize = "16px";

  let div = document.createElement("div");
  div.setAttribute("id", "addbutton");
  let bag = document.createElement("button");
  bag.innerText = "Add to Bag";
  bag.addEventListener("click", function () {
    goToCart(data);
  });
  let wishlist = document.createElement("button");
  wishlist.innerText = "Wishlist 💚";
  div.append(bag, wishlist);
  let price = document.createElement("p");
  price.innerText = "$" + data.price;
  price.setAttribute("id", "price");

  let span = document.createElement("span");
  span.setAttribute("id", "price_span");
  span.innerText = "(Import duties included)";
  price.append(span);

  let delivery = document.createElement("p");
  delivery.innerText = "Estimated delivery";
  delivery.style.fontWeight = "700";
  delivery.style.marginTop = "7F0px";

  let dDate = document.createElement("p");
  dDate.innerText = "Jul 29 - Aug 7";
  dDate.style.marginTop = "-10px";

  let type = document.createElement("p");
  type.textContent = data.type;

  info.append(brand, category, price, div, delivery, dDate);

  img.append(pic, pic2);

  document.querySelector("#details").append(img, info);
}

// Add to cart funtion here--------------------------
function goToCart(data) {
  let arr = JSON.parse(localStorage.getItem("itemData")) || [];
  arr.push(data);
  localStorage.setItem("itemData", JSON.stringify(arr));
  window.location.href = "./cart-page/cart.html";
}
function displayDiscription(data) {
  let bottom_div = document.createElement("div");

  let desc = document.createElement("p");
  desc.textContent = data.desc;

  let brand = document.createElement("p");
  brand.innerText = data.brand;
  brand.setAttribute("class", "headi");

  let category = document.createElement("p");
  category.textContent = data.category;
  category.style.color = "rgb(34, 34, 34)";
  category.style.fontWeight = "400";
  category.style.fontSize = "16px";

  let pic2 = document.createElement("img");
  pic2.src = data.img2;

  bottom_div.append(brand, category, desc);

  document.querySelector("#detailDescription").append(bottom_div);
  document.querySelector("#imgDesc").append(pic2);
}
