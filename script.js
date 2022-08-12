
const adviceText = document.querySelector(".advice-text");
const refreshBtn = document.querySelector(".refresh")

// Run the showQuote function when the page is loaded
showQuote();

refreshBtn.addEventListener("click",showQuote)




function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceText.textContent = data.advice;
    })
}