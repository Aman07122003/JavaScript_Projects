const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const color = e.target.id;
        body.style.backgroundColor = color;

        // Reset text color to black for all buttons except 'black', 'blue', and 'purple'
        if (color === 'black' || color === 'blue' || color === 'purple') {
            body.style.color = 'white';
        } else {
            body.style.color = 'black';
        }
    });
});



