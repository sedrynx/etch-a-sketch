const container = document.querySelector('#container');
const colorWhite = '#e0def4';
const colorBlack = '#26233a';
const colorLove = '#eb6f92';
const colorGold = '#f6c177';
const colorRose = '#ebbcba';
const colorPine = '#31748f';
const colorFoam = '#9ccfd8';
const colorIris = '#c4a7e7';

let currentMode = colorWhite;
let currentSize = 16;

const buttons = document.querySelector('#buttons');
let customGridBtn = document.createElement('button');
customGridBtn.textContent = 'Custom Grid';

customGridBtn.addEventListener('click', () => {
  let size = prompt('Enter a number (1-100):');
  if (size) createGrid(Number(size));
});
buttons.appendChild(customGridBtn);

let rgbBtn = document.createElement('button');
rgbBtn.textContent = 'Random Colors OFF';

rgbBtn.addEventListener('click', () => {
  rgbBtn.classList.toggle('active');

  if (rgbBtn.classList.contains('active')) {
    currentMode = 'rgb';
    rgbBtn.textContent = 'Random Colors ON';
  } else {
    currentMode = colorWhite;
    rgbBtn.textContent = 'Random Colors OFF';
  }
});
buttons.appendChild(rgbBtn);

createColorButton(colorLove);
createColorButton(colorGold);
createColorButton(colorRose);
createColorButton(colorPine);
createColorButton(colorFoam);
createColorButton(colorIris);

function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomColor() {
  const r = getRandomNum(0, 255);
  const g = getRandomNum(0, 255);
  const b = getRandomNum(0, 255);

  return `rgb(${r} ${g} ${b} / 80%)`;
}

function createGrid(size) {
  if (size > 100) {
    alert(`${size} is not allowed. Please enter a number 100 or less!`);
    return;
  }

  currentSize = size;
  container.innerHTML = '';

  for (let i = 0; i < size ** 2; i++) {
    let addSquare = document.createElement('div');
    addSquare.style.width = 100 / size + '%';
    addSquare.style.height = 100 / size + '%';
    addSquare.style.opacity = 1;

    addSquare.addEventListener('mouseover', (event) => {
      if (event.target.style.backgroundColor === '') {
        if (currentMode === 'rgb') {
          event.target.style.backgroundColor = getRandomColor();
        } else if (currentMode === colorWhite) {
          event.target.style.backgroundColor = colorBlack;
        } else if (currentMode === colorLove) {
          event.target.style.backgroundColor = colorLove;
        } else if (currentMode === colorGold) {
          event.target.style.backgroundColor = colorGold;
        } else if (currentMode === colorRose) {
          event.target.style.backgroundColor = colorRose;
        } else if (currentMode === colorPine) {
          event.target.style.backgroundColor = colorPine;
        } else if (currentMode === colorFoam) {
          event.target.style.backgroundColor = colorFoam;
        } else if (currentMode === colorIris) {
          event.target.style.backgroundColor = colorIris;
        }
      }
    });
    container.appendChild(addSquare);
  }
}
document.body.appendChild(container);

createGrid(currentSize);

function createColorButton(color) {
  let btn = document.createElement('button');
  btn.setAttribute('id', 'colorBtn');
  btn.style.background = color;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
      currentMode = color;
    } else {
      currentMode = colorWhite;
    }
  });
  buttons.appendChild(btn);
}
