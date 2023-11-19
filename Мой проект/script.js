let form = document.querySelector(".form");
let button = document.querySelector('.back');
button.addEventListener('click', forma);
function forma() {
    form.style.display = "flex";
}
function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    form.style.display = "none";
}
let button1 = document.querySelector('.btn');
button1.addEventListener('click', handle);