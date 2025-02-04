const imageConatinerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
var loadMore = 10

btnEl.addEventListener("click", () => {
    console.log("load more clicked")
    for (let index = 0; index < loadMore; index++) {
        addNewImages()
    }
});

function addNewImages() {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageConatinerEl.appendChild(newImageEl)
};

