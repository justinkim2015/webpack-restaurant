const buttonFactory = (text, id) => {
  let div = document.createElement('div');

  div.textContent = text
  div.classList.add('tab')
  div.setAttribute('id', `page${id}`)
  
  return div
};

export default function makeNavbar() {
  let navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar')
  navbar.appendChild(buttonFactory('Home', 1))
  navbar.appendChild(buttonFactory('Menu', 2))
  navbar.appendChild(buttonFactory('Contact', 3))
  return navbar
}
