let emailEl = document.getElementById('email');
let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', function() {
    let emailValue = emailEl.value;
    console.log(emailValue)
})