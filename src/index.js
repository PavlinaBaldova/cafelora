import './index.html';
import './style.css';

console.log('funguju!');

/*---------navigace-----------*/

const navigation = () => {
  const navBtn = document.querySelector('nav');
  navBtn.classList.toggle('nav-closed');
};

const nav = document.querySelector('#nav-btn');
nav.addEventListener('click', navigation);

const aClosed = () => {
  const nav2 = document.querySelector('nav');
  nav2.classList.add('nav-closed');
};

const a = document.querySelectorAll('a');
for (let i = 0; i < a.length; i += 1) {
  a[i].addEventListener('click', aClosed);
}

/*-------------objednávání-----------*/

let ordered = false;

const drinkCup = () => {
  const drinkCupElm = document.querySelector('.drink__cup');
  drinkCupElm.classList.toggle('drink__cup--selected');
  const btnCancel = document.querySelector('.order-btn');
  ordered = !ordered;
  if (ordered) {
    btnCancel.textContent = 'Zrušit';
  } else {
    btnCancel.textContent = 'Objednat';
  }
};

const orderButton = document.querySelector('.order-btn');
orderButton.addEventListener('click', drinkCup);

/*------------ingredience jako komponenty------------*/

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916"',
    label: 'espresso',
  },
];

const Layer = (props) => {
  return `
  <div class="layer">
  <div
  class="layer__color"
  style="background-color: ${props.color}">
  </div>
  <div class="layer__label">${props.label}
  </div>
  </div>`;
};

const inbox = document.querySelector('#drink__info');
for (let i = 0; i < layers.length; i += 1) {
  const drink = layers[i];
  inbox.innerHTML += Layer(drink);
  console.log(drink);
}
