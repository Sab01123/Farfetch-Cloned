// let data2 = JSON.parse(localStorage.getItem("total"));

document.querySelector("button").addEventListener("click", myfun);

function myfun(event) {
  event.preventDefault();
  //console.log("hello")

  let obj1 = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    country: document.querySelector("#country").value,
    state: document.querySelector("#state").value,
    city: document.querySelector("#city").value,
    code: document.querySelector("#code").value,
    address: document.querySelector("#address").value,
    phone: document.querySelector("#phone").value,
  };
  console.log(obj1);

  localStorage.setItem("addressdata", JSON.stringify(obj1));
  //  window.location.href = "payment.html"

  if (
    obj1.firstname == "" &&
    obj1.lastname == "" &&
    obj1.city == "" &&
    obj1.state == "" &&
    obj1.phone == ""
  ) {
    alert("Please Fill all the information");
  } else {
    window.location.href = ".../payment.html";
  }
}

/**********summary data*************/

let data = JSON.parse(localStorage.getItem("itemData")) || [];
let data2 = JSON.parse(localStorage.getItem("total"));

// console.log(data);
// console.log(data2);
// localStorage.setItem("itemData",JSON.stringify(data))

console.log(data);
mydata(data);
mydata1(data2);

// console.log(data2);
function mydata(data) {
  // let delivery1 = document.getElementById("delivery1")
  data.forEach(function (ele) {
    let product = document.getElementById("product");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "mainbox");

    let detaildiv = document.createElement("div");
    detaildiv.setAttribute("class", "detail");

    let detaildiv2 = document.createElement("div");
    detaildiv2.setAttribute("class", "detail2");

    let image = document.createElement("img");
    image.src = ele.img1;
    image.setAttribute("class", "imagee");

    let name = document.createElement("p");
    name.innerText = ele.category;

    let price = document.createElement("p");
    price.innerText = `USD $ ${ele.price}`;
    price.setAttribute("class", "price1");
    imgdiv.append(image);
    detaildiv.append(name, price);
    detaildiv2.append(imgdiv, detaildiv);
    product.append(detaildiv2);
  });
}

function mydata1(data2) {
  let pricediv = document.getElementById("price");
  let totalprice = document.createElement("p");
  totalprice.innerText = `USD $ ${data2}`;
  pricediv.append(totalprice);
}
