import { fetchData } from './fetch.js';
import { rainbowColor, randomInteger } from './helpers.js';

const mainButton = document.querySelector('#main-button');
const mainHeader = document.querySelector('#main-header');
const headerDescr = document.querySelector('#header-descr');

const changeColor = () => {
  const num = randomInteger(0, 6);
  const color = rainbowColor[num];
  mainButton.style.backgroundColor = color;
};

const chageHeader = async () => {
  const newText = await fetchData();
  mainHeader.innerHTML = newText;
};

const makeTextInvisible = () => {
  headerDescr.classList.add('invisible');
};

mainButton.addEventListener('click', () => {
  changeColor();
  chageHeader();
  makeTextInvisible();
});
