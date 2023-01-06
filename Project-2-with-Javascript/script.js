//SELECTORS
const starIcon= document.querySelector(".circle");
const backBtn= document.querySelector(".back-btn");
const nextBtn= document.querySelector(".button");
const queryBtn= document.querySelector(".query");
const wrongAnswer= document.querySelector(".first");
const rightAnswer= document.querySelector(".second");
const indexBtn= document.querySelector(".back");


//EVENT LISTENERS
if(starIcon){
starIcon.addEventListener("click", ()=> {
    window.location.href= "two.html";
})
}

if(queryBtn){
    queryBtn.addEventListener("click", ()=> {
        window.location.href= "three.html";
    })
}

if(wrongAnswer){
wrongAnswer.addEventListener("click", ()=> {
    if(rightAnswer.classList.contains("right")){
        rightAnswer.classList.remove("right");
    }
    wrongAnswer.classList.add("wrong");
})
}

if(rightAnswer){
rightAnswer.addEventListener("click", ()=> {
    if(wrongAnswer.classList.contains("wrong")){
        wrongAnswer.classList.remove("wrong");
    }
    rightAnswer.classList.add("right");
})
}

if(nextBtn){
nextBtn.addEventListener("click", ()=> {
    if(rightAnswer.classList.contains("right")){
        window.location.href= "four.html";
    }
})
}

if(backBtn){
    backBtn.addEventListener("click", ()=> {
        window.location.href= "two.html";
    })
}

if(indexBtn){
    indexBtn.addEventListener("click", ()=> {
        window.location.href= "index.html";
    })
}