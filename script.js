const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketchPad");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function populateSketchArea(squaresPerSide) {
    const numberOfSquares = squaresPerSide * squaresPerSide;
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide)}px`;

    for (let i = 0; i < numberOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squaresPerSide) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeColor);
    }
}

function removeCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value}`;
    sliderValue.innerHTML = txt;
    removeCells();
    populateSketchArea(this.value);
}

function changeColor() {
    this.style.backgroundColor = "black";
}

populateSketchArea(16);