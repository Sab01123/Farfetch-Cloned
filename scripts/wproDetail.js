let data = JSON.parse(localStorage.getItem("proDetails"));
console.log(data)

displayData(data);

function displayData(data) {
 
    let img = document.createElement("div"); // width--65%
    img.setAttribute("id","image")


    let info = document.createElement("div"); // width--35%
    info.setAttribute("id","information")
    let pic = document.createElement("img");
    pic.src=data.img1
    let pic2 = document.createElement("img");
    pic2.src=data.img2
    
    let brand = document.createElement("p");
    brand.innerText=data.brand;
    brand.style.fontSize="19px"
    brand.style.fontWeight="700";
   
    let category = document.createElement("p");
    category.textContent = data.category
    category.style.color="rgb(34, 34, 34)"
    category.style.fontWeight="400"
    category.style.fontSize="16px"

    let div = document.createElement("div")
    div.setAttribute("id","addbutton")
    let bag = document.createElement("button")
    bag.innerText="Add to Bag"
    let wishlist = document.createElement("button")
    wishlist.innerText="Wishlist 💚"
    div.append(bag,wishlist)


    let desc = document.createElement("p");
    desc.textContent = data.desc
    let price = document.createElement("p");
    price.innerText="$"+data.price;
    price.setAttribute("id", "price");
    let type = document.createElement("p")
    type.textContent = data.type

    info.append( brand, category, type,price,div);

    img.append(pic,pic2)

    document.querySelector("#details").append(img,info);
    document.querySelector("#prodesc").append(desc)
}
