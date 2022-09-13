let Cardholder = document.getElementById("Cardholder");
let cna = document.getElementById("cna");
// console.log(Cardholder);
// console.log(cna);

Cardholder.onkeyup = function(){
    cna.value = this.value;
    cna.style.color = "white";
    personp.classList.add("hidden");

}

let Numbercard = document.getElementById("Numbercard");
let cn = document.getElementById("cn");
// console.log(Numbercard);
// console.log(cn);

Numbercard.onkeyup = function(){
    cn.value = this.value;
    numberp.classList.add("hidden");
}

let month = document.getElementById("month");
let cy = document.getElementById("cy");
// console.log(month);
// console.log(cy);

month.onchange = function(){
    cy.value = this.value;
    cy.style.color = "white";
    onep.classList.add("hidden");
}

let CVC = document.getElementById("CVC");
// console.log(CVC);

let thelast = document.getElementById("thelast");
// console.log(thelast);

CVC.onkeyup = function(){
    thelast.value = this.value;
    twop.classList.add("hidden");
}



let Confirm = document.getElementById("Confirm");
// console.log(Confirm);
let personp = document.getElementById("personp");
// console.log(personp);
let numberp = document.getElementById("numberp");
// console.log(numberp);
let onep = document.getElementById("onep");
// console.log(onep);
let twop = document.getElementById("twop");
// console.log(twop);


let main = document.getElementById("main");
// console.log(main);
let need = document.getElementById("need");
// console.log(need);
let card = document.querySelector(".card");
// console.log(card);

need.onsubmit = function(e){
    if(Cardholder.value === ""){
            e.preventDefault();
            // console.log("true");
            personp.classList.remove("hidden");
           }
    if(Numbercard.value === ""){
                e.preventDefault();
                // console.log("true");
                numberp.classList.remove("hidden");
               } 
              
    if(month.value === ""){
                e.preventDefault();
                // console.log("true");
                onep.classList.remove("hidden");
               } 
            
    if(CVC.value === ""){
                e.preventDefault();
                // console.log("true");
                twop.classList.remove("hidden");
               }else{
            need.style.display = "none";
            card.classList.remove("hidden");
           }
}

