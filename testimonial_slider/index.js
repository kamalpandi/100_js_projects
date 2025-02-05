const testimonials = [
    {
        name: "Kevin",
        photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "makes me more productive and gets the job done in a fraction of the time. I'm glad I found."
    },
    {
        name: "Laren",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I highly recommend . It has been so important for us as we continue to grow our company."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");

const usernameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[index];
    imgEl.src = photoUrl;
    usernameEl.innerText = name;
    textEl.innerText = text;
    index++;
    if (index === testimonials.length){
        index=0
    };
    setTimeout(() => {
        updateTestimonial();
    }, 2000)
}