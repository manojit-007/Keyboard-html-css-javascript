$(document).ready(function () {
    $('.btn').on('click', function () {
        $(this).blur();
    });
    $('.btns').on('click', function () {
        $(this).blur();
    });
});


let checkbox = document.getElementById("toggle");
let btn = document.querySelectorAll(".alphabet")
let checkBtn = document.querySelector(".toggle");
let textarea = document.getElementById("textarea");
function toggleCheckbox() {
    checkbox.checked = !checkbox.checked;
    console.log("clicked");
    if (checkbox.checked) {
        checkBtn.style.color = "black";
        btn.forEach(button => button.style.textTransform = "uppercase"); 
    } else {
        checkBtn.style.color = "gray";
        btn.forEach(button => button.style.textTransform = "lowercase"); 
    }
}

function display(result) {
    if (checkbox.checked) {
        textarea.value += result.toUpperCase(); 
    } else {
        textarea.value += result; 
    }
}

function del() {
    textarea.value = textarea.value.slice(0, -1); 
}
function clean() {
    textarea.value = "";
}

// keyboard input
//  textarea.addEventListener('keydown', function(event) {
//     // Get the pressed key
//     const keyPressed = event.key;
//     textarea.value += keyPressed; // Removed the last character
// });