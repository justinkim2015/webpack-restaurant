import './styles.css';
import './reset.css'; 
import _ from 'lodash';
import makeNavbar from './navbar.js'
import makeBody from './home.js'


let content = document.getElementById('content')
let textArray = ['hello','goodbye']

content.appendChild(makeNavbar())
content.appendChild(makeBody(textArray))
