


const bookmarkElements = document.querySelectorAll ('[data-js="bookmark"]');


bookmarkElements.forEach(element => {
    element.addEventListener ('click', () => {
      
        element.classList.toggle('bookmark-select')
    
    });
});

const answerButtons = document.querySelectorAll(`[data-js="answer-btn"]`);
console.log(answerButtons)

answerButtons.forEach(button => {

    button.addEventListener("click" , ()=> {
        if (button.innerHTML === "Show Answer") {
            button.innerHTML = "Hide Answer"
        }else{
            button.innerHTML = "Show Answer"
        }    
        
        const showAnswer = button.nextElementSibling;
        showAnswer.classList.toggle("showanswer")

    });

})


const darkModeBtn = document.querySelector(`[data-js="dark-mode"]`);
console.log(darkModeBtn)

if(darkModeBtn != null){
    darkModeBtn.addEventListener("click" , ()=> {
        darkModeBtn.classList.toggle("active");
        const body = document.body;
        // body.classList.toggle("light-theme")
        body.classList.toggle("darkmode-theme")

    });
}
