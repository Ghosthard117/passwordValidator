// get DOM elements
const passwordInput = document.querySelector('.input-password input')
const eyeIcon = document.querySelector('.input-password i')
const requirementList = document.querySelectorAll('.requirement-list li')

// an array with the password element requirements 
// and the index of the element of the requirement list
const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
]

passwordInput.addEventListener('keyup', (e) => {
  requirements.forEach(item => {
    // check if the password contains the requirements of the regex
    const isValid = item.regex.test(e.target.value),
    requirementItem = requirementList[item.index]

    // updating class and icon of requirement item if requirement matched or not
    if (isValid) {
      requirementItem.classList.add("valid")
      requirementItem.firstElementChild.className = "fa-solid fa-check"
    } else {
      requirementItem.classList.remove("valid")
      requirementItem.firstElementChild.className = "fa-solid fa-circle"
    }
  })
})

eyeIcon.addEventListener('click', () => {
  // toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === 'password' 
  ? 'text'
  : 'password'

  // update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password'
  ? ''
  : '-slash'}`
})