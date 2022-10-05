let count = document.querySelector(".count")
let buttons = document.querySelector(".buttons")

buttons.addEventListener("click",(e)=>{
 if(e.target.classList.contains("add")){
  count.innerHTML++
 }
 if(e.target.classList.contains("reset")){
  count.innerHTML = 0
 }
 if(e.target.classList.contains("subtract")){
  count.innerHTML--
 }

})