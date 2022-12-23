import './styles.css';
import './reset.css'; 
import _ from 'lodash';
import makeNavbar from './navbar.js'
import setEventListeners from './switch'
import makeHome from './home.js'

let content = document.getElementById('content')

let homeContent = ['hello','goodbye']
let menuItemArray = ['food', 'bread', 'meat']
let contactInfo = ['justin', 19, 'engineer']

function makeMain() {
  let main = document.createElement('div');
  main.setAttribute('id', 'main')
  main.appendChild(makeHome(homeContent))
  return main
}

function init() {
  content.appendChild(makeNavbar())
  content.appendChild(makeMain())
  setEventListeners(homeContent, menuItemArray, contactInfo)  
}

init()