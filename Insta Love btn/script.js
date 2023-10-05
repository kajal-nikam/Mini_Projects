var box = document.querySelector("#box");
var love = document.querySelector("i");

box.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        love.style.transform ="translate(-50%,-50%) scale(0)";
},3000)
});


