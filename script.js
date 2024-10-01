document.getElementById("firstPara").innerHTML += "<span class ='tan'>This is new tan text.</span>"

//selecting by tag name
let images = document.getElementsByTagName ("img");
for( let image of images){
image.width = "250";
}