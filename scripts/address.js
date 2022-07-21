let data2 = JSON.parse(localStorage.getItem("total"));

document.querySelector("button").addEventListener("click", myfun)



function myfun(event) {
    event.preventDefault()
    //console.log("hello")

    let obj1 = {
     firstname : document.querySelector("#firstname").value,
      lastname :document.querySelector("#lastname").value,
      country: document.querySelector("#country").value,
      state: document.querySelector("#state").value,
      city: document.querySelector("#city").value,
      code : document.querySelector("#code").value,
     address : document.querySelector("#address").value,
     phone: document.querySelector("#phone").value,
     
    }
    console.log(obj1)
   //checkout.push(obj1)

   localStorage.setItem("addressdata",JSON.stringify(obj1))
   window.location.href = "payment.html"

}


// let btn = document.getElementById("savebtn").addEventListener("click",function(){
//     let first = document.getElementById("first").value
//     let last = document.getElementById("last").value

//     let state= document.getElementById("state").value
//     let city = document.getElementById("city").value
//     let phone = document.getElementById("phone").value
    
//   })
  
  let data = JSON.parse(localStorage.getItem("cartData"));
 

console.log(data);
localStorage.setItem("cartData",JSON.stringify(data))

console.log(data2);
 let dlvry = document.getElementById("delivery1");
 delivery1.innerText = data2[1]
 let price = document.getElementById("price")
   price.innerText = data2[0]
    let delivery = document.getElementById("delivery");
function append() {
  let product = document.getElementById("product");
  data.forEach(function (el) {
    let smalldiv = document.createElement("div");
    smalldiv.setAttribute("id", "smalldiv");
    let imagediv = document.createElement("div");
    imagediv.setAttribute("id", "imagediv");
    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");
   
    
    let image = document.createElement("img");
    image.setAttribute("id", "avtar");
    image.src = el.img1;

    let h3 = document.createElement("h4");
    h3.setAttribute("id","head");

    h3.innerText = el.brand;
    let price = document.createElement("p");
    price.innerText = el.price;

    imagediv.append(image);
    pricediv.append(h3, price);
    smalldiv.append(imagediv, pricediv);
    product.append(smalldiv);
  });
}

append();