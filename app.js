
const button = document.querySelector(".clearingButton")
const firstComment = document.querySelector(".firstComment")
const secondComment = document.querySelector(".secondComment")
const thirdComment = document.querySelector(".thirdComment")
const firstDot =   document.querySelector(".firstDot")
const secondDot =  document.querySelector(".secondDot")
const thirdDot =  document.querySelector(".thirdDot")

button.addEventListener("click", ()=>{
    
    firstComment.classList.remove("unread")
    secondComment.classList.remove("unread")
    thirdComment.classList.remove("unread")
    firstDot.style.display="none"
    secondDot.style.display="none"
    thirdDot.style.display="none"

})