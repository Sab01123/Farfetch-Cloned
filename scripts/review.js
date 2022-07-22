var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+" "+time;
var today = new Date();
// document.write(dateTime)
document.querySelector('#displaytv2').innerHTML='';
var detail1=document.createElement('h3');
detail1.innerText=dateTime;
document.querySelector('#displaytv2').append(detail1)




// function displayImages(food){
    let orderno = Math.floor((Math.random()*1000000)+1)
    document.querySelector('#displaytv1').innerHTML='';
      var detail=document.createElement('h3');
      detail.innerText='#40'+orderno+'';
      detail.setAttribute('id','orderNumberHeading');
      document.querySelector('#displaytv1').append(detail)
// }