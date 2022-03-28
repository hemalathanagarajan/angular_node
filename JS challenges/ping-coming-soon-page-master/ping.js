// const sendbtn = document.querySelector('.button')
// const errorMsg = document.querySelector('.error-msg')

// const input = document.querySelector('.email')
// const emailValidation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/
 
// sendBtn.addEventListener('click', function () {
//     if (input.value.length === 0 || !input.value.match(emailValidation)) {
//       errorMsg.style.display = 'inline'
//       errorMsg.textContent = 'Please provide a valid email address'
//       // return timeoutFunc
//     } 
// } )


const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
      if (input.type === 'email') {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove('error');
        } else {
          input.parentElement.classList.add('error');
        }
      }
    
  });
});

function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

