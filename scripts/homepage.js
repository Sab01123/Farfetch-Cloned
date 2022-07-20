import {navbar,navbarjs,navbarResp} from "../components/navbar.js";
import {guideSection,appContainer,aboutContainer} from "../components/BottomSection.js";

let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
let app=document.getElementById("app").innerHTML=appContainer();
let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();

// let FavList=JSON.parse(localStorage.getItem("wishlist"));
// let favCount=document.getElementById("countFav");
// console.log(FavList);
let nav=document.getElementById("nav").innerHTML=navbar();
let departments=document.querySelectorAll("#departments>div>a>img");
let depart=document.querySelectorAll("#departments>div>a>h2");
// if(FavList!==null && FavList!==undefined){
//     favCount.innerText=FavList.length;
// }

let width= screen.width;
navbarResp();
navbarjs();

if(width<768){
  for(let i=0;i<departments.length;i++){
    departments[i].style.width="auto";
  }
}
if(width<1000 && width>768){
  for(let i=0;i<depart.length;i++){
    depart[i].style.fontSize="20px"
  }
}
