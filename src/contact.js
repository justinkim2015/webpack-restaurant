const contactFactory = (text) => {
  let info = document.createElement('p');
  info.textContent = text;
  info.classList.add('contact');
  return info;
}

export default function makeContact(textArray) {
  let info = document.createElement('div');
  info.setAttribute('id', 'contact')
  
  textArray.forEach(element => {
    let contact = contactFactory(element);
    info.appendChild(contact)  
  });

  return info
}
