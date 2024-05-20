const GRIDSIDE = 500;
let squaresPerSide = 16;
let selectedButton = "black";
let mouseDown = false;

const sketchArea = document.querySelector("#sketchPad");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const setBlack = document.querySelector("#black-btn");
const setEraser = document.querySelector("#eraser-btn");

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
        gridCell.addEventListener("mousedown", changeColor);
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

function changeColor(event) {
    if (event.type === 'mouseover' && !mouseDown) return;

    if(selectedButton === "black") {
        this.style.backgroundColor = "black";
    } else if (selectedButton === "eraser") {
        this.style.backgroundColor = "white";
    }
}

function setBlackBtn() {
    selectedButton = "black";
}

function setEraserBtn() {
    selectedButton = "eraser";
}

document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

setBlack.addEventListener("click", setBlackBtn);
setEraser.addEventListener("click", setEraserBtn);


populateSketchArea(16);