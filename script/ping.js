const form = document.querySelector('.head form');
const input = document.querySelectorAll('.mail input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  input.forEach((input) => {
    if (input.type === 'email') {
      if (validateEmail(input.value)) {
        input.parentElement.classList.remove('error');
      } else {
        input.parentElement.classList.add('error');
      }
    }
  });
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}