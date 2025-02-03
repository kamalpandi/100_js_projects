const month_el = document.getElementById("month-name");
const day_el = document.getElementById("day-name");
const day_number_el = document.getElementById("day-number");
const year_el = document.getElementById("year");

const date = new Date()
const month = date.getMonth()
month_el.innerText = date.toLocaleDateString("en", {
    month: "long"
})
const day = date.getDay()
day_el.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})

const day_number = date.getDate()
day_number_el.innerText = date.getDate()

const year = date.getFullYear()
year_el.innerText = date.getFullYear()