const button_el = document.querySelector(".btn");
button_el.addEventListener("mouseover", (event) => {
    const x = event.pageX - button_el.offsetLeft;
    const y = event.pageY - button_el.offsetTop;
    button_el.style.setProperty("--xPos", x + "px");
    button_el.style.setProperty("--yPos", y + "px");
});