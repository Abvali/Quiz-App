const darkModeBtn = document.querySelector(`[data-js="dark-mode"]`);
console.log(darkModeBtn)

// if(darkModeBtn != null){
    darkModeBtn.addEventListener("click" , ()=> {
        darkModeBtn.classList.toggle("active");
        const body = document.body;
        // body.classList.toggle("light-theme")
        body.classList.toggle("darkmode-theme")

    });
// }