const share = document.getElementsByClassName('share')
const link = document.querySelector('.share-link')

function activeState () {
  link.classList.toggle('active')
}

share[0].addEventListener('click', activeState)
share[1].addEventListener('click', activeState)
