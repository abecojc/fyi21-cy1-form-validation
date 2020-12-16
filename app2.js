//@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

//@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

// Declaring variables
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')

const email = document.getElementById('email')

const password = document.getElementById('password')

const password2 = document.getElementById('password-2')

// Function to execute when 'Register Now' button is clicked
regForm.addEventListener('submit', function (e) {
    e.preventDefault()

    validateEmpty(username)
    validateEmpty(email)
    validateEmpty(password)
    validateEmpty(password2)

})

// This function checks if input was entered and calls for showError or showSuccess and displays relative massages
function validateEmpty(input) {
    console.log(input.value)
    // declares and assign the name value to a new variable
    const inputName = input.name
    //compares the input entered with an empty string
    if (input.value ==='') {
        //calls for the showError function and displays a message
        showError(input,`${inputName} field is empty`)
    } else {
        //calls for the showSuccess function and displays a message
        showSuccess(input,`${inputName} is entered`)
    }
}

// displays a message box next to the empty input field
function showError(input, msg){
    // uses styling from tailwind.css file
    input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
}

// displays a message box next to the completed input field
function showSuccess(input,msg) {
    input.nextElementSibling.innerHTML =`<small class="success">${msg}</small>`
}
