const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "FREELANCER";
    }, 0);
    setTimeout(() => {
        text.textContent = "FRONTEND";
    }, 4000);
    setTimeout(() => {
        text.textContent = "DISEÑADOR";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);