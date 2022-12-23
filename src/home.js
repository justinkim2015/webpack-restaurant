const infoFactory = (text) => {
  let info = document.createElement('p');
  info.textContent = text;
  info.classList.add('info');
  return info;
}

export default function makeHome(textArray) {
  let body = document.createElement('div');
  body.setAttribute('id', 'body')
  
  textArray.forEach(element => {
    let info = infoFactory(element);
    body.appendChild(info)  
  });

  return body
}
