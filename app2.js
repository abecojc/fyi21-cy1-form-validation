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
    validatePassMatch(password,password2)
    validateIsEmail(email)
    validateEmail(email)
    validateMinLength (password)
    validateMinLength (password2)
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
    if (password.value===password2.value && password.value!==''){
        showSuccess(password2,`${password.name} matches ${password2.name}`)
    }else {
        showError(password2,'Error, not a match! Please re-enter the password')
    }
    //@TODO: check if the passwords match
}


function validateIsEmail (email) {
    if (validateEmail(email)===true) { // return true
        showSuccess(email,'valid')
    } else {
        showError(email, 'Email is invalid')
    }
}
//

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase())
    console.log(result)
    return result

}
    //@TODO:  find implementation on SO



//
function validateMinLength (input) {
    console.log(input.value.length)
    const inputName = input.name

    if (input.value.length < 4 && input.value===password.value){
        showError(input, `${inputName} is too short`)
    } else {
        showSuccess(input,`${inputName} is long enough`)
    }
}



