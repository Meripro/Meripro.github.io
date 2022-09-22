var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');
var pic = document.getElementById('pic');

 window.onscroll = function(){
     if(window.pageYOffset >= menu.offsetTop){
         navbar.classList.add('sticky');
         pic.style.display = "block";

     }else{
         navbar.classList.remove('sticky');
         pic.style.display = "none";
     }
 }