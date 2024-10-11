import { rainbowColor, randomInteger } from './helpers.js';

const dragElements = document.querySelectorAll('.drag');
let draggedItem = null;
const dragSquares = document.querySelectorAll('.feature');

const changeSquaresColor = () => {
  dragSquares.forEach((el) => {
    const num = randomInteger(0, 6);
    const color = rainbowColor[num];
    el.style.backgroundColor = color;
    el.classList.remove('bg-primary');
    el.classList.remove('bg-gradient');
  });
};

dragElements.forEach((el) => {
  el.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    console.log('start');
  });

  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('over');
  });

  el.addEventListener('drop', (e) => {
    e.preventDefault();
    changeSquaresColor();

    const targetBlock = e.target.closest('.drag');
    if (targetBlock && targetBlock !== draggedItem) {
      let draggedIndex = [...dragElements].indexOf(draggedItem);
      let targetIndex = [...dragElements].indexOf(targetBlock);

      [dragElements[draggedIndex].innerHTML, dragElements[targetIndex].innerHTML] = [
        dragElements[targetIndex].innerHTML,
        dragElements[draggedIndex].innerHTML,
      ];
    }
  });
});
