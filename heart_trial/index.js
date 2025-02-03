const body_element = document.querySelector("body");

body_element.addEventListener("mousemove", (event) => {
    const x_pos = event.offsetX;
    const y_pos = event.offsetY;
    const span_element = document.createElement("span");
    span_element.style.left = x_pos + "px";
    span_element.style.top = y_pos + "px";
    const size = Math.random() * 100;
    span_element.style.width = size + "px"
    span_element.style.height = size + "px"
    body_element.appendChild(span_element);
    setTimeout(() => {
        span_element.remove();
    }, 3000)
}); 
