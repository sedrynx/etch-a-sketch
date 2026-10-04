const container = document.querySelector('#container');

function createGrid(size) {
  if (size > 100) {
    alert('Please enter a number 100 or less!');
    return;
  }
  container.innerHTML = '';
  for (let i = 0; i < size ** 2; i++) {
    let addSquare = document.createElement('div');
    addSquare.style.width = 100 / size + '%';
    addSquare.style.height = 100 / size + '%';
    addSquare.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = '#908caa';
    });
    container.appendChild(addSquare);
  }
}

createGrid(16);

document.body.appendChild(container);
