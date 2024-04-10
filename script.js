const input=document.querySelector(".input")
const submit=document.querySelector(".submit")
const refresh=document.querySelector(".refresh")
const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const inputcaptcha=document.createElement("h2")
inputcaptcha.classList.add("captcha");
const captchas=document.querySelector(".captchas")

// function random(){
//     return chars[]
// }
refresh.addEventListener("click",()=>{
    let password="";
    for(let i=0;i<6;i++){
    password+=chars[Math.floor(Math.random()*chars.length)]
    inputcaptcha.textContent=password
    }
    captchas.appendChild(inputcaptcha)
})

submit.addEventListener("click",()=>{
    let inpval=input.value;
    let captcha=inputcaptcha.textContent;
    if(inpval===captcha){
        alert("Your captcha matched")
    }
    else{
        alert("Your captcha didn't matched")
    }
})