import { fetchData } from './fetch.js';

const mainButton = document.querySelector('#main-button');
const mainHeader = document.querySelector('#main-header');
const headerDescr = document.querySelector('#header-descr');

const rainbowColor = ['#dd0000', '#fe622b', '#fef701', '#03bd00', '#019cfe', '#000084', '#2d009c'];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
