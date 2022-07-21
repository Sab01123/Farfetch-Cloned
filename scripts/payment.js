let paydata = JSON.parse(localStorage.getItem("addressdata"))
console.log(paydata)


    let div = document.createElement("div")
    div.setAttribute("class", "div1")

    let first = document.createElement("h5")
    first.innerText =  `Name:- ${paydata.firstname}`
    let last = document.createElement("h5")
    last.innerText = paydata.lastname

    let div2 = document.createElement("div")
    div2.setAttribute("class", "div2")
    let address = document.createElement("h5")
    address.innerText = `Address:-${paydata.address},`

    let div3 = document.createElement("div")
    div3.setAttribute("class", "div3")
    let city = document.createElement("h5")
    city.innerText = `City:- ${paydata.city} ,`
    let code = document.createElement("h5")
    code.innerText = paydata.code
    let phone = document.createElement("h5")
    phone.innerText = `Phone:-${paydata.phone}`
    let div4 = document.createElement("div")
    div4.setAttribute("class", "div4")
    let country = document.createElement("h5")
    country.innerText = `Country:- ${paydata.country}`

    div.append(first, last)
    div2.append(address,city,code)
    div3.append(country)
    div4.append(phone)
    document.querySelector(".container").append(div, div2, div3, div4,)