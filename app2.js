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

// checking if input field is empty or not
function validateEmpty(input) {
    console.log(input.value)
    // declaration
    const inputName = input.name
    //for empty value
    if (input.value ==='') {
        //functions for error or success
        showError(input,`${inputName} field is empty`)
    } else {
        showSuccess(input,`${inputName} is entered`)
    }
    // if(email.value===reg){
    //     return validateEmail
    // } else{
    //     return alert("Not a valid email address!")
    // }
}

// connect js to html code
function showError(input, msg){
    // uses styling from tailwind.css file
    input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
}

//connect js to html cod
function showSuccess(input,msg) {
    input.nextElementSibling.innerHTML =`<small class="success">${msg}</small>`
}

function validatePassMatch (password, password2) {
    if (password.value===password2.value && password.value!==''&& password2.value!==''){
        showSuccess(password2,'Match')
    }else {
        showError(password2,'Error, not a match! Please re-enter the password')
    }
    //@TODO: check if the passwords match
}

function validateIsEmail (email) {
    if (emailValidates(email)) { // return true
        showSuccess(email)
    } else {
        showError(email, 'Email is invalid')
    }
}

// returns boolean
function emailValidates (email) {
    // Regular Expression
    if (email.value===/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(regForm.email.value))
        {
            return true

        }else{

        return false}
    //@TODO:  find implementation on SO

}

// input: HTMLInputElement
function validateMinLength (input) {
    // console.log(input.value.length)
    if (input.value.length < 6) {
        showError(input, 'Username too short')
    } else {
        showSuccess(input)
    }
}



function validateEmail(email)
{

