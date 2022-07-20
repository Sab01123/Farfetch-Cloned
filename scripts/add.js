function user(f,l,s,c,p){
    this.first =f;
    this.last =l;
    this.state =s;
    this.city =c;
    this.phone =p;
}

function userdata(e){
    event.preventDefault()

    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let state= document.getElementById("state").value
    let city = document.getElementById("city").value
    let phone = document.getElementById("phone").value

    if(first !="" && last!="" && city!="" && state != "" && city != "" && phone !=""){
      
        window.location.href="../payment.html"
     }
     else{
       
       alert("Please Fill all the information")
      }

    let u1 = new user(first,last,state,city,phone)
    console.log(u1)

    let u1data = JSON.parse(localStorage.getItem("user")) || []
    // u1data.push(u1)
    console.log(u1data)

    localStorage.setItem("user",JSON.stringify(u1data))
}