var boxs=document.getElementsByClassName("box");
console.log(boxs);
var button1=document.getElementById("firstButton");
var button2=document.getElementById("secondButton");
var button3=document.getElementById("thirdButton");
button1.addEventListener("click",function(){
    boxs[0].style.display="flex";
    boxs[1].style.display="none";
    boxs[2].style.display="none";
})
button2.addEventListener("click",function(){
    boxs[0].style.display="none";
    boxs[1].style.display="flex";
    boxs[2].style.display="none";
})
button3.addEventListener("click",function(){
    boxs[0].style.display="none";
    boxs[1].style.display="none";
    boxs[2].style.display="flex";
})