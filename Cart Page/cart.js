let arr = [
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/18/51/67/17185167_37027698_600.jpg",
    name: "MEN'S HERON PRESTON T-SHIRT ",
    brand: "HERON PRESTON",
    category: "T-SHIRT",
    price: 445,
    strikedoffprice: 999,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/45/47/28/17454728_37431510_600.jpg",
    name: " Wales Bonner Power geometric-print trousers",
    brand: "WALES BONNER",
    category: "PANT",
    price: 801,
    strikedoffprice: 1099,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/35/10/06/17351006_37528125_600.jpg",
    name: "Alexander McQueen intarsia-pattern cardigan",
    brand: "WALES BONNER",
    category: "SHIRT",
    price: 399,
    strikedoffprice: 799,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/35/10/06/17351006_37528125_600.jpg",
    name: "Alexander McQueen intarsia-pattern cardigan",
    brand: "WALES BONNER",
    category: "SHIRT",
    price: 399,
    strikedoffprice: 799,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/35/10/06/17351006_37528125_600.jpg",
    name: "Alexander McQueen intarsia-pattern cardigan",
    brand: "WALES BONNER",
    category: "SHIRT",
    price: 399,
    strikedoffprice: 799,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/35/10/06/17351006_37528125_600.jpg",
    name: "Alexander McQueen intarsia-pattern cardigan",
    brand: "WALES BONNER",
    category: "SHIRT",
    price: 399,
    strikedoffprice: 799,
    Symbol: "₹",
  },
];

localStorage.setItem("itemsData", JSON.stringify(arr));

let data = JSON.parse(localStorage.getItem("itemsData"));

var body = document.body;
let allRowTotal = 0;
showData(data);
var price = 0;
var total = 0;

function showData(data) {
  console.log(data);
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
    img.src = elem.image_url;
    img.className = "image";
    td1.append(img);

    // td 2
    var td2 = document.createElement("td");
    let p1 = document.createElement("h3");
    let p2 = document.createElement("p");
    p1.innerText = elem.brand;
    p2.innerText = elem.name;
    td2.append(p1, p2);

    // td 4
    var td4 = document.createElement("td");
    let price = document.createElement("h4");
    let duties = document.createElement("p");
    duties.innerHTML = "(import duties included)";
    price.innerText = "$ " + elem.price;
    td4.append(price, duties);

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
    var quantity = document.createElement("p");
    var count = 1;

    /*---all row total calculation */
    allRowTotal += elem.price * count;
    console.log(allRowTotal);

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
      td4.innerText = price;

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
        td4.innerText = price;
        decreseDisplayTotal(singlePrice);
      }
    });
    let wish = document.createElement("p");
    wish.innerText = "🤍" + "Add to wishlist";
    td3.append(quantity, increase, decrease, wish);

    icon.className = "icon";
    icon.src =
      "https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg";

    icon.addEventListener("click", function () {
      deleteData(index);
    });

    tr.append(td1, td2, td4, td3);

    tbody.append(tr);
    // displayTotalPrice()
  });
}

/*-----Outside of Show data function-----*/

var totalprice = document.querySelector("#totalPrice");
let totalcash = document.querySelector("#totalcash");
let delivery = document.querySelector("#delivery");

// allRowTotal
console.log(allRowTotal);
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

function deleteData(index) {
  data.splice(index, 1);
  console.log(data);
  localStorage.setItem("itemsData", JSON.stringify(data));
  showData(data);
  //   window.location.reload();
}
