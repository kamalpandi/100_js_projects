const conatiner_el = document.querySelector(".container");
const careers = ['Backend engineer', 'Data engineer', 'Blue team enthusiast'];

let career_index = 0;
let char_index = 0;
update_text(); //In JavaScript, function declarations are hoisted, so calling before definition works.
function update_text() {
    char_index++
    conatiner_el.innerHTML = `
    <h1>I am ${careers[career_index].slice(0,1)==="I"?"an":"a"} ${careers[career_index].slice(0, char_index)}</h1>
`;
    if (char_index === careers[career_index].length) {// if length of the char index is equal to career index we move to next one 
        career_index++
        char_index = 0
    };
    if (career_index === careers.length) {// to cheeck the array met the last value the index of career is equal to the length of careers array
        career_index = 0
    };
    setTimeout(update_text, 400);
}