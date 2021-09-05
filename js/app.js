const menu = document.querySelector('.header .links .icon')
const menuItem = document.querySelector('.header .links ul')

function toggleMenu () {
   menuItem.style.display === 'none' ?
   menuItem.style.display = 'block' :
   menuItem.style.display = 'none'
}

menu.addEventListener('click', toggleMenu)

