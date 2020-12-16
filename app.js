// 1. get DOM element
const regForm = document.getElementById('submit')
// const regFormError = regFormError.nextElementSibling


const username = document.getElementById('username')
const usernameError = username.nextElementSibling
// const usernameErr = document.getElementById("usernameErr")

const email = document.getElementById('email')
const emailError = email.nextElementSibling

const password = document.getElementById('password')
const passwordError = password.nextElementSibling

const password2 = document.getElementById('password2')
const password2Error = password2.nextElementSibling

// 2. Add event / modification

regForm.addEventListener('click',function (e) {
  e.preventDefault()

  // // 2. Check if the value is empty
  // if (regForm.value === '') {
  //   // 3. If empty, give user some feedback
  //   regFormError.className = 'block bg-red-500 text-white'
  // } else {
  //   console.log('sending to server')
  // }
})

username.addEventListener('click', function (e) {
  e.preventDefault()

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameError.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }
})

email.addEventListener('click', function (e) {
  e.preventDefault()

  //@TODO: add the validation for email
  // 2. Check if the value in variable 'email' is empty
  if (email.value === '') {
    // 3. If empty, give user some feedback
    emailError.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }
})
password.addEventListener('click', function (e) {
  e.preventDefault()

  //@TODO: add the validation for password
  // 2. Check if the value in variable 'password' is empty
  if (password.value === '') {
    // 3. If empty, give user some feedback
    passwordError.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }
})
password2.addEventListener('click', function (e) {
    e.preventDefault()

  //@TODO: add the validation for confirm password
  // 2. Check if the value in variable 'password2' is empty
  if (password.value === '') {
    // 3. If empty, give user some feedback
    password2Error.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }
} )

