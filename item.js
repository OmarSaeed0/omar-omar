let input= document.querySelector("input");
let count=document.querySelector("count");
let maxlength=input.getAttribute("maxlength");
count.innerHTML=maxlength;
input.oninput=function(){
    count.innerHTML=maxlength - this.value.length;
};
