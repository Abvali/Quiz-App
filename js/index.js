
const bookmarkElement = document.querySelectorAll ('[data-js="bookmark"]');
console.dir(bookmarkElement)

bookmarkElement.forEach(element => {
    element.addEventListener ('click', () => {
      
        element.classList.toggle('bookmark-select')
    
    });
});

