function goToHome (e) {
  e.preventDefault()
  location.replace('./')
}

document.getElementById('login').addEventListener('click', goToHome)

