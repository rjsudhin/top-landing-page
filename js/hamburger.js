/* configure */
const menulist = document.querySelector('#menu')
const hamburger = document.querySelector('#hamburger')
/* configure */


hamburger.addEventListener('click', () => {
  menulist.classList.toggle('active')   // to showing navs
  hamburger.classList.toggle('active') // to make hamburger to 'x'
})