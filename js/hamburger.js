/* configure */
const menulist = document.querySelector('#menu')
const hamburger = document.querySelector('#hamburger')
/* configure */


hamburger.addEventListener('click', () => {
  menulist.classList.toggle('active')
})