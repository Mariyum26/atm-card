document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
e.preventDefault();


const redBorder=(selector, cls)=>{
    if(document.querySelector(selector).value.length==0){
        document.querySelector(selector).classList.add(cls); 
    }
    else{
        document.querySelector(selector).classList.remove(cls); 
    }
}
redBorder("#month","error");
redBorder("#year","error");
redBorder("#name","error");
redBorder("#acc-num","error");
redBorder("#cvv","error");
if(document.querySelector("#month").value.length==0 || document.querySelector("#year").value.length==0){
    document.querySelectorAll("h5")[1].classList.add("appear2");
}
else{
    document.querySelectorAll("h5")[1].classList.remove("appear2");
}

if(document.querySelector("#cvv").value.length==0){
    document.querySelectorAll("h5")[2].classList.add("appear2");
}
else{
    document.querySelectorAll("h5")[2].classList.remove("appear2");
}

const arr=Array.from(document.querySelectorAll("input"));
const arr2=arr.map(x=> x.value.length==0 ? "incomplete" : "complete");
if(arr2.includes("incomplete")){
    alert("please complete the form")
}
else{
    e.target.style.display="none";
    document.getElementsByClassName("after-submit")[0].classList.add("appear");
document.getElementsByClassName("continue")[0]?.addEventListener("click",function(){
    // document.getElementsByClassName("after-submit")[0].classList.remove("appear");
    // document.getElementsByTagName("form")[0].style.display="flex";
    location.reload();
});
}
});



document.querySelector("#name").addEventListener("input",function(e){
    document.querySelector("#atm-name").innerText= e.target.value;
});
document.querySelector("#acc-num").addEventListener("input",function(e){
    const regExp=/[a-zA-Z]/;
    if(regExp.test(e.target.value)){
        e.target.classList.add("error");
        e.target.nextElementSibling.classList.add("appear2");
       }
    else{
        e.target.classList.remove("error");
        e.target.nextElementSibling.classList.remove("appear2");
    }
    if(e.target.value.length==4 || e.target.value.length==9 || e.target.value.length==14){
        e.target.value=e.target.value+" ";
    }
    document.querySelector("#atm-num").innerText= e.target.value;
});
document.querySelector("#month").addEventListener("input",function(e){
    document.querySelector("#atm-mm").innerText=e.target.value;
});
document.querySelector("#year").addEventListener("input",function(e){
    document.querySelector("#atm-yy").innerText=e.target.value;
});
document.querySelector("#cvv").addEventListener("input",function(e){
    document.querySelector("#atm-cvv").innerText=e.target.value;
});