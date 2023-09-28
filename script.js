const input = document.getElementById('input');
const setBtn = document.getElementById('input-button');

setBtn.addEventListener('click', () => {
    const inputVal = input.value;
    console.log(inputVal);

})

function getSize(input) {
    if (input >= 2 && input <= 100) {
        return penSize = input;
    } else {
        alert("Input not accepted, please try again!")
    }
}

