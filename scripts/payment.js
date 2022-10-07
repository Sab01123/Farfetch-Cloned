let paydata = JSON.parse(localStorage.getItem("addressdata"));
console.log(paydata);

let div = document.createElement("div");
div.setAttribute("class", "div1");

let first = document.createElement("h5");
first.innerText = `Name:- ${paydata.firstname}`;
let last = document.createElement("h5");
last.innerText = paydata.lastname;

let div2 = document.createElement("div");
div2.setAttribute("class", "div2");
let address = document.createElement("h5");
address.innerText = `Address:-${paydata.address},`;

let div3 = document.createElement("div");
div3.setAttribute("class", "div3");
let city = document.createElement("h5");
city.innerText = `City:- ${paydata.city} ,`;
let code = document.createElement("h5");
code.innerText = paydata.code;
let phone = document.createElement("h5");
phone.innerText = `Phone:-${paydata.phone}`;
let div4 = document.createElement("div");
div4.setAttribute("class", "div4");
let country = document.createElement("h5");
country.innerText = `Country:- ${paydata.country}`;

div.append(first, last);
div2.append(address, city, code);
div3.append(country);
div4.append(phone);
document.querySelector(".container").append(div, div2, div3, div4);

var btn = document.getElementById("savebtn");

btn.addEventListener("click", function () {
  var cardNumber = document.getElementById("cardno").value;
  var ExpiryDate = document.getElementById("exp").value;
  var Cvv = document.getElementById("code_no").value;

  if (cardNumber == "" && ExpiryDate == "" && Cvv == "") {
    alert("Please fill all the fields");
  } else if (cardNumber.length != 16) {
    alert("Please Enter correct 16 digit card number");
  } else {
    alert("Payment Successful");
    window.location.href = ".../review.html";
  }
});

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
