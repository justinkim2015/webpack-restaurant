const foodFactory = (text, price) => {
  let food = document.createElement('li');
  food.classList.add('menuItem')
  food.textContent = text + ' - ' + Math.floor(Math.random() * 10);
  return food;
};

export default function makeMenu(menuItemArray) {
  let menu = document.createElement('ul');
  menu.setAttribute('id', 'menu')
  menu.classList.add('class', 'flex')

  menuItemArray.forEach(element => {
    let food = foodFactory(element);
    menu.appendChild(food)  
  });

  return menu
};

