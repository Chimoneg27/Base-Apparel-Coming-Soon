let emailEl = document.getElementById('email');
let submitBtn = document.getElementById('submit')
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const errorMsg = document.getElementById('valid');

submitBtn.addEventListener('click', function() {
    let emailValue = emailEl.value;
    if(emailValue.match(regex)) {
        console.log('Valid email')
        errorMsg.innerHTML = ''
    } else {
        console.log('Invalid email')
        errorMsg.innerHTML = 'Please enter a valid email address.'
    }
    emailEl.value = ''
})