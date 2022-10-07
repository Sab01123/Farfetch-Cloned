


// let data = JSON.parse(localStorage.getItem("itemData"));


// let data = []
let data = JSON.parse(localStorage.getItem("itemData"));
// console.log(obj);
// data.push(obj)

let allRowTotal = 0;
let sum = 0;
showData(data);
var price = 0;
var total = 0;
// console.log(data);
function showData(data) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = null;
  sum = 0;
  allRowTotal = 0;
  data.forEach(function (elem, index) {
    sum += Number(elem.price);

    /*---creating table---*/

    var tr = document.createElement("tr");

    // td 2
    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = elem.img1;
    img.className = "image";
    td1.append(img);

    // td 2
    var td2 = document.createElement("td");
    let p1 = document.createElement("h3");
    let p2 = document.createElement("p");
    p1.innerText = elem.brand;
    p2.innerText = elem.category;
    td2.append(p1, p2);

    // td 3
    var td3 = document.createElement("td");
    let icon = document.createElement("img");
    let divicon = document.createElement("div");
    divicon.id = "divicon";
    divicon.append(icon);
    td3.append(divicon);
    let size = document.createElement("p");
    size.innerText = "Size : M\n\nQuantity";

    td3.append(size);
    var increase = document.createElement("button");
    var decrease = document.createElement("button");
    increase.className = "btn";
    decrease.className = "btn";
    var quantity = document.createElement("p");
    var count = 1;

    // td 4
    var td4 = document.createElement("td");
    let showprice = document.createElement("h4");
    let duties = document.createElement("p");
    duties.innerHTML = "(import duties included)";
    showprice.innerText = "$ " + elem.price;
    td4.append(showprice, duties);

    /*increase decrease button */
    quantity.innerText = 1;
    increase.innerText = "+";
    decrease.innerText = "-";

    /*---incrase quantity---*/
    increase.addEventListener("click", function (event) {
      event.target;
      count++;
      let singlePrice = elem.price;

      price = elem.price * count;
      quantity.innerText = count;
      showprice.innerText = "$" + price;
      td4.prepend(showprice);

      incresedisplayTotal(singlePrice);
    });

    /*---decrase quantity---*/
    decrease.addEventListener("click", function (event) {
      event.target;
      count--;
      if (count < 1) {
        count = 1;
        quantity.innerText = count;
      } else {
        quantity.innerText = count;
        price = elem.price * count;
        let singlePrice = elem.price;

        sum -= elem.price;
        showprice.innerText = "$" + price;
        td4.prepend(showprice);
        decreseDisplayTotal(singlePrice);
      }
    });

    /*---all row total calculation */
    allRowTotal += elem.price * count;
    // console.log(allRowTotal);

    let wish = document.createElement("p");
    wish.innerText = "🤍" + "Add to wishlist";
    td3.append(quantity, increase, decrease, wish);

    icon.className = "icon";
    icon.src =
      "https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg";

    icon.addEventListener("click", function () {
      deleteData(elem, index);
    });

    tr.append(td1, td2, td4, td3);
    tbody.append(tr);
  });
}

/*-----Outside of Show data function-----*/

var totalprice = document.querySelector("#totalPrice");
let totalcash = document.querySelector("#totalcash");
let delivery = document.querySelector("#delivery");

// allRowTotal
console.log(allRowTotal);
// sending total data
localStorage.setItem("total", JSON.stringify(allRowTotal + 600));

displayTotalPrice(allRowTotal);
function displayTotalPrice(value) {
  totalprice.innerText = value;
  totalcash.innerText = `USD $ ${value + 600}`;
}
function incresedisplayTotal(sPrice) {
  let prePrice = totalprice.innerText;
  let cPrice = +prePrice + sPrice;
  totalprice.innerText = cPrice;
  totalcash.innerText = `USD $ ${cPrice + 600}`;
}
function decreseDisplayTotal(sPrice) {
  let prePrice = totalprice.innerText;
  let cPrice = +prePrice - sPrice;
  totalprice.innerText = cPrice;
  totalcash.innerText = `USD $ ${cPrice + 600}`;
}

function deleteData(elem, index) {
  data.splice(index, 1);
  console.log(data);
  localStorage.setItem("itemData", JSON.stringify(data));
  showData(data);
  window.location.reload();
}
