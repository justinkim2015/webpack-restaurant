import makeHome from './home.js'
import makeMenu from './menu.js'
import makeContact from './contact.js'

function switchHome(arr) {
  let main = document.getElementById('main')
  main.innerHTML = "";
  main.appendChild(makeHome(arr))
}

function switchMenu(arr) {
  let main = document.getElementById('main')
  main.innerHTML = "";
  main.appendChild(makeMenu(arr))
}

function switchContact(arr) {
  let main = document.getElementById('main')
  main.innerHTML = "";
  main.appendChild(makeContact(arr))
}

export default  function setEventListeners(homeInfo, menuInfo, contactInfo) {
  let home = document.getElementById("page1")
  let menu = document.getElementById("page2")
  let contact = document.getElementById("page3")
  home.addEventListener('click', () => switchHome(homeInfo))
  menu.addEventListener('click', () => switchMenu(menuInfo))
  contact.addEventListener('click', () => switchContact(contactInfo))
}
