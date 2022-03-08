const sendbtn = document.querySelector('.button')
const errorMsg = document.querySelector('.error-msg')

const input = document.querySelector('.email')
const emailValidation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/
 
sendBtn.addEventListener('click', function () {
    if (input.value.length === 0 || !input.value.match(emailValidation)) {
      errorMsg.style.display = 'inline'
      errorMsg.textContent = 'Please provide a valid email address'
      // return timeoutFunc
    } 
} )


