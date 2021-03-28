const closeBtn = document.getElementById('close-btn')

const toggleOpenNavBar = () => {
  let navBar = document.getElementsByClassName('navbar')[0]
  const navbarClosed = navBar.classList.contains('closed')

  if (navbarClosed) {
    navBar.classList.remove('closed')
    navBar.classList.add('opened-nav-bar')
  } else {
    navBar.classList.remove('opened-nav-bar')
    navBar.classList.add('closed')
  }
}

closeBtn.addEventListener('click', toggleOpenNavBar)