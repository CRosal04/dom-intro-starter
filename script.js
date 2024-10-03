document.getElementById("firstPara").innerHTML += "<span class ='tan'>This is new tan text.</span>"

//selecting by tag name
let images = document.getElementsByTagName ("img");
for( let image of images){
image.width = "250";
}
// selecting by class name
let ltBlueSpans = document.getElementsByClassName ("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");
console.log(ltBlueSpans);
for (let span of ltBlueSpans){
    span.style.color = "7C9EA6";
}
for (let span of medBlueSpans){
    span.style.color = "#3C5E73";
}
//select many with css selector
let  colors =["#283040","#3C5E73","#7C9EA6","#D9BCA3","#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svg");
 for(let i = 0; i< 5; i++){
     svgs[i].style.stroke = colors[i];
 }

 //change the span 
 document.querySelector("#query .bold").style.color = "#7c9ea9";
let list = document.querySelector("#change .content_list");
console.log(list);
//replace text un first li
list.children[0].textContent = "this is new list item text";
//add name to third li
list.children[2].innerHTML += "<strong> Christopher Rosales</strong>";

///remove hidden attribute
document.querySelector("#remove a").removeAttribute("hidden");
 /// bold selector
 let bOld= document.querySelector("bold");
 for(let span of bOld){
    span.style.color = "#7C9EA6";
 }