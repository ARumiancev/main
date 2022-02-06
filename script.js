"use strict";

//NAVBAR SELECTED
var anchors = document.getElementsByClassName("link")

for(var x of anchors){
    x.addEventListener("click", function(){
      for(var i = 0; i < anchors.length; i++){
          anchors[i].classList.remove("selected");
      }
      this.classList.add("selected");
    });
}

// STICKY NAVBAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// NAVBAR burger
var burger = document.getElementById("burger");
var sideMenu = document.getElementById("sideMenu");

burger.addEventListener("click", function(){
    sideMenu.classList.toggle("width");
    this.classList.toggle("rotateZ");
    console.log(this);
});

window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
        sideMenu.classList.remove("width");
        burger.classList.remove("rotateZ");
    }
})


// TABS
const skaidres = document.getElementsByClassName("skaidre");
const mygtukai = document.getElementsByClassName("tabMygtukas");

function changeContent(index){
    
    for (let i = 0; i < skaidres.length; i++) {
        skaidres[i].classList.remove("parodyk");
        skaidres[i].classList.remove("opacity");
        // skaidres[i].classList.remove("transform");
        mygtukai[i].classList.remove("paspaustas");
    };

    var element = document.getElementsByClassName("skaidre")[index];
    element.classList.add("parodyk");
    mygtukai[index].classList.add("paspaustas");

    setTimeout(function(){
        // element.classList.add("transform");
        skaidres[index].classList.add("opacity")
    }, 100)
};

// SIDE MENU
