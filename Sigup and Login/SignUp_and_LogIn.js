let tab = document.querySelector(".tab-form");
let tabHeader = document.querySelector(".tab-header");
let tabHeaderElements = tab.querySelectorAll(".tab-header > div");
let tabBody = tab.querySelector(".tab-body");
let tabBodyElements = tab.querySelectorAll(".tab-body > div");

console.log(tabBodyElements);

/*----login tab----*/
console.log(tabHeaderElements);
let login = tabHeaderElements[1];
login.addEventListener("click", function () {
  tabBodyElements[1].classList.add("active");
  tabBodyElements[0].classList.remove("active");
  tabHeaderElements[1].classList.add("active");
  tabHeaderElements[0].classList.remove("active");
});

/*----Signup tab----*/

let signup = tabHeaderElements[0];
signup.addEventListener("click", function () {
  tabBodyElements[0].classList.add("active");
  tabBodyElements[1].classList.remove("active");
  tabHeaderElements[0].classList.add("active");
  tabHeaderElements[1].classList.remove("active");
});

/*----Login functionality-----*/

let signupbtn = document.querySelector("#signup");
signupbtn.addEventListener("click", function () {
  let email = document.querySelector("#signupemail").value;
  let pass = document.querySelector("#signuppass").value;
  let obj = {
    email: email,
    pass: pass,
  };
  localStorage.setItem("userData", JSON.stringify(obj));
});

/*----Login functionality-----*/

let loginbtn = document.querySelector("#login");
loginbtn.addEventListener("click", function () {
  let obj = JSON.parse(localStorage.getItem("userData"));
  let email = document.querySelector("#loginemail").value;
  let pass = document.querySelector("#loginpass").value;
  if (email != obj.email) alert("User does not Exist⛔");
  else if (pass != obj.pass) alert("Wrong Credentials❌");
  else {
    alert("Login Successful😀");
    document.location.href = "../index.html";
  }
});
