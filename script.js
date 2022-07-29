let container = document.querySelector('#container');
let input = document.querySelector('.inputfield');
let inputSubmit = document.querySelector('.submit');

function makeSquares(number) {
    for (let i = 0; i < number; i++) {
        let area = Math.floor(Math.sqrt(number));
        let gridSquare = document.createElement('div');
        gridSquare.className = `square grid-square-${i}`;
        container.appendChild(gridSquare);

        if (Number.isInteger(Math.sqrt(number))) {
            container.setAttribute('style', `grid-template-columns: repeat(${area}, minmax(50px, 1fr)); grid-template-rows: repeat(${area}, 1fr);`)
        } else {
            container.setAttribute('style', `grid-template-columns: repeat(${area}, minmax(50px, 1fr)); grid-auto-flow: row;`)
        }
    }
}



inputSubmit.addEventListener('click', (e) => {
    if (Number.isInteger(parseFloat((input.value))) && input.value <= 100 && input.value > 0) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild)
        }
        let num = parseInt(input.value);
        makeSquares(num);
        input.value = '';
    }
})

input.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key === 'Enter') {
        if (Number.isInteger(parseFloat((input.value))) && input.value <= 100 && input.value > 0) {
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild)
            }
            let num = parseInt(input.value);
            makeSquares(num);
            input.value = '';
        }
    }
})
