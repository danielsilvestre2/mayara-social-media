const menu = document.getElementById('menu')
const menuExit = document.getElementById('menu-exit')

menu.addEventListener('click', openMenu)
menuExit.addEventListener('click', closeMenu)

const mobileMenu = document.getElementById('nav-android')

// Clicar no Menu

function openMenu() {
    if (mobileMenu.style.display = 'block') {
    mobileMenu.style.display = 'block'
    menu.style.display = 'none'
    menuExit.style.display = 'block'
    } else {
        mobileMenu.style.display = 'none'
    }
}
function closeMenu() {
    if (mobileMenu.style.display = 'none') {
        mobileMenu.style.display = 'none'
        menu.style.display = 'block'
        menuExit.style.display = 'none'
    }
}

// Bug no Tamanho da Tela

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.style.display = 'none'
    menuExit.style.display = 'none'
    menu.style.display = window.innerWidth < 768 ? 'block' : 'none'
  } else if (window.innerWidth <= 768) {
    menu.style.display = 'block'
  }
})


// Dark Mode Button

const moon = document.getElementById('checkbox')

moon.addEventListener('click', () => {
    document.body.classList.toggle('dark-doc')
})

// Icones Brancos

const logoP = document.getElementById('logo-m')
addEventListener('click', () => {
    if (moon.checked == true) {
        logoP.src = 'images/logo-white.png'
    } else if (moon.checked == false) {
        logoP.src = 'images/logo.png'
    }
})

const menuIcon = document.getElementById('menu')
addEventListener('click', () => {
    if (moon.checked == true) {
        menuIcon.src = '../images/menu-white.svg'
        menuIcon.src = 'images/menu-white.svg'
    } else if (moon.checked == false) {
        menuIcon.src = '../images/menu.svg'
        menuIcon.src = 'images/menu.svg'
    }
})