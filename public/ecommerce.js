const parent = document.getElementsByClassName("thegrand")[0];
const card1 = document.getElementById("card1");
const showItems = document.createElement("div");
const body = document.getElementById("maiin");
const black = document.getElementById("noway");
const close = document.getElementsByClassName("close")[0];
const btn = document.getElementById("finalbtn");
const div = document.getElementsByClassName("final")[0];
const loop = document.querySelectorAll(".myButton");
const fin = document.getElementById("finaliseprice");
const inpit = document.querySelectorAll(".price");
const allProductsInBlackScreen = document.querySelectorAll(".itemscontainer");
const del = document.getElementsByClassName("del")[0];
const headTitle = document.getElementById("headTitle");

// change buttons to done//
parent.addEventListener("click", (eo) => {
  if (eo.target.className == "myButton") {
    eo.target.setAttribute("disabled", "");
    eo.target.innerHTML = "&#10004; Done";
    const popUp = document.createElement("div");
    body.append(popUp);
    popUp.classList.add("done-popup");
    popUp.innerHTML = `&#128525;  Congrats `;
    setTimeout(() => {
      popUp.style.transform = "translateX(-100vw)";
    }, 1500);

    setTimeout(() => {
      popUp.remove();
    }, 4000);

    body.prepend(showItems);
    showItems.classList.add("items");
    showItems.innerText = "Show List";

    const imgSrc = eo.target.parentElement.parentElement
      .getElementsByClassName("firsttshirt")[0]
      .getAttribute("src");
    console.log(imgSrc);
    const itemName =
      eo.target.parentElement.parentElement.getElementsByTagName("h2")[0]
        .innerText;
    console.log(itemName);
    const itemPrice =
      eo.target.parentElement.getElementsByClassName("price")[0].innerText;
    console.log(itemPrice);

    const addedProducts = `<div class="itemscontainer">
    <div class="imgpapapa">
      <img src="${imgSrc}"/>
    </div>
    <div class="itemName">
    <p class="product-name">"${itemName}"</p>
    
    </div>
    
    <div class="quantity">
      <input value="1" class="input quantity" id="inputt" type="number" min="1" />
      <p class="quantitywritten">Amount</p>


    </div>
    
    <div   class="price1  soha">${itemPrice}</div>

    <div class="btn sec">
      <button class="del">delete</button>
    </div>
    </div>
`;

    black.innerHTML += addedProducts;
  }
  updateTotalPrice();
});

close.addEventListener("click", (eo) => {
  black.style.display = "none";
  close.style.display = "none";
  div.style.display = "none";
});

showItems.addEventListener("click", (eo) => {
  black.style.display = "block";
  close.style.display = "block";
  div.style.display = "block";

  setTimeout(() => {
    showItems.remove();
  }, 1000);
});

black.addEventListener("change", (eo) => {
  updateTotalPrice();
});

const updateTotalPrice = () => {
  const allProductsInBlackScreen = document.querySelectorAll(".itemscontainer");
  let total = 0;

  allProductsInBlackScreen.forEach((item) => {
    const pricess = item
      .getElementsByClassName("soha")[0]
      .innerText.replace("$", "");
    console.log(pricess);

    const quantitys = parseInt(item.getElementsByClassName("input")[0].value);
    console.log(quantitys);

    total = total + pricess * quantitys;
    console.log(total);
  });
  fin.innerText = ` ${total}$`;
};

btn.addEventListener("click", (eo) => {
  updateTotalPrice();
  btn.style.border = "2px solid red";
});

black.addEventListener("click", (eo) => {
  if (eo.target.className == "del") {
    console.log("ff");
    black.getElementsByClassName("itemscontainer")[0].remove();

    updateTotalPrice();
  }
});

// section3 develop //
const big = document.querySelectorAll(".product-container")
const nxtButton = document.querySelector(".nxt-btn");
const preButton = document.querySelector(".pre-btn");
const productContainers = document.querySelectorAll(".product-card");




big.forEach(item => {

let dimensions = item.getBoundingClientRect()
let width = dimensions.width;



preButton.addEventListener("click",(eo) => {


  item.scrollLeft +=width;
  behavior:"smooth";

  
})




nxtButton.addEventListener("click", (eo) => {
  item.scrollLeft -=width;
  behavior:"smooth";

});





  
});


    
let i = 1;

const autoWriting = () => {

const title = "enjoy your shopping"
headTitle.innerText = title.slice(0,i) 
i++
if (i === title.length+1) {


   clearInterval(stopAutofun)

  
}


}

  


 
const stopAutofun = setInterval(autoWriting, 100); 



const abs = document.getElementById("abs")
const face = document.getElementById("face");
const iconmo = document.getElementById("insta");
const snab = document.getElementById("snab");
const tik = document.getElementById("tik");
const youtube = document.getElementById("youtube")


abs.addEventListener("click", (eo) => {

  face.classList.toggle("class")
  console.log("Ss");
  iconmo.classList.toggle("class2")
behavior="smooth";
transition="all 1s ease-in-out" ;

snab.classList.toggle("class3");
tik.classList.toggle("class4");
youtube.classList.toggle("class5");
behavior="smooth";

  
})


youtube.addEventListener("click", (params) => {

  window.open('https://www.youtube.com/watch?v=--vbd7Y0Lnc');
 


  
})
