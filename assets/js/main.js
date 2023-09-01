
const gameTable = document.getElementById("game-table");
const maxSquareNumber = 100;

for (let i = 0; i < maxSquareNumber; i++) {
    const square = `<div class="square">${i + 1}</div>`;
    console.log(square);
    gameTable.innerHTML += square;
}