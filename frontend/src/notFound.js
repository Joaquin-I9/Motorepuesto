const homeButton = document.getElementById('go-home-now')

if (homeButton) {
  homeButton.addEventListener('click', () => {
    window.location.replace('/login')
  })
}