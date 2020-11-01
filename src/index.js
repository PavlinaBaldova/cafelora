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
  if (ordered === true) {
    btnCancel.textContent = 'Zrušit';
  } else {
    btnCancel.textContent = 'Objednat';
  }
};

const orderButton = document.querySelector('.order-btn');
orderButton.addEventListener('click', drinkCup);
