
window.onload = function () {
    
    // div des carrées 
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("class","divCarre");
    document.body.appendChild(squareDiv);
 
//creation du carré rouge 
let redSquare = document.createElement("div");
redSquare.setAttribute("class","redSquare");
redSquare.style.backgroundColor ="red";
redSquare.style.height = "30px";
redSquare.style.width = "30px";
squareDiv.appendChild(redSquare);

//creation du carré jaune 
let yellowSquare = document.createElement("div");
yellowSquare.setAttribute("class","yellowSquare");
yellowSquare.style.backgroundColor ="yellow";
yellowSquare.style.height = "30px";
yellowSquare.style.width = "30px";
squareDiv.appendChild(yellowSquare);

//creation du carré vert 
let greenSquare = document.createElement("div");
greenSquare.setAttribute("class","greenSquare");
greenSquare.style.backgroundColor ="green";
greenSquare.style.height = "30px";
greenSquare.style.width = "30px";
squareDiv.appendChild(greenSquare);

//creation du carré orange 
let orangeSquare = document.createElement("div");

orangeSquare.setAttribute("class","orangeSquare");
orangeSquare.style.backgroundColor ="orange";
orangeSquare.style.height = "30px";
orangeSquare.style.width = "30px";
squareDiv.appendChild(orangeSquare);

let whiteSquare = document.createElement("div");

whiteSquare.setAttribute("class","whiteSquare");
whiteSquare.style.backgroundColor ="white";
whiteSquare.style.height = "30px";
whiteSquare.style.width = "30px";
squareDiv.appendChild(whiteSquare);
// creation du titre 

let titre = document.createElement("h1");

function changetitre (color){
    titre.innerHTML= `le titre est ${color}`;  
}
document.body.appendChild(titre);

redSquare.addEventListener("click",function(){
    document.body.style.backgroundColor ="red";
    changetitre("rouge");
});

yellowSquare.addEventListener("click",function(){
    document.body.style.backgroundColor ="yellow";
    changetitre("jaune");
});

greenSquare.addEventListener("click",function(){
    document.body.style.backgroundColor ="green";
    changetitre("vert");
});
orangeSquare.addEventListener("click",function(){
    document.body.style.backgroundColor ="orange";
    changetitre("orange");
});
whiteSquare.addEventListener("click",function(){
    document.body.style.backgroundColor ="white";
    changetitre("Blanc");
});

} //fin du dom 