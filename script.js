let emailEl = document.getElementById('email');
let submitBtn = document.getElementById('submit')
let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
const errorMsg = document.getElementById('valid');
const errorIcon = document.getElementById('error-icn')

submitBtn.addEventListener('click', function() {
    let emailValue = emailEl.value;
    validateEmail(emailValue)
})

const matchRegex = (email) => {
    return email.match(regex)
}

const validateEmail = (emailVal) => {
    if(matchRegex(emailVal)) {
        errorMsg.innerHTML = ''
        errorIcon.style.display = 'none'
        emailEl.value = ''
    } else {
        errorMsg.innerHTML = 'Please enter a valid email address.'
        errorIcon.style.display = 'block'
    }
}