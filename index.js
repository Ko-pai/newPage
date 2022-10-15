const textElement = document.querySelector(".textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingEl = document.getElementById("remaining-counter")
const move = document.getElementById("gg")

textElement.addEventListener("keyup",(key)=>{
    updateTotalCounter(); 
});
  
updateTotalCounter()

function updateTotalCounter  () {
    totalCounterEl.innerText =  textElement.value.length    
    remainingEl.innerText = textElement.getAttribute("maxLength") - textElement.value.length 
    if (textElement.value.length === 50 ){
        move.classList.add("gg")
        move.innerText ="hola Text limit is fulled."
        setTimeout(()=>{
            move.classList.remove("gg")
            move.innerText =""
        },8000)
    }else if (textElement.value.length > 100) {
        move.classList.add("good")
        move.innerText ="Limit is over 100.Please press backspace"
        setTimeout(()=>{
            move.classList.remove("good")
            move.innerText =""
        },5000)
    }
}
