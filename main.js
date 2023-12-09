// get element from HTML and use event CLICK 
// to get a anthor element from HTML and make that you want 

document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#box").classList.toggle("hide");
});