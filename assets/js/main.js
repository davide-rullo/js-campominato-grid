
const gameTable = document.getElementById("game-table");
const maxSquareNumber = 100;
const playBtn = document.getElementById("start-btn")
playBtn.addEventListener("click", function(){
    createTable(gameTable, 100)
});


function createTable (DOMelement, maxSquareNumber){
    for (let i = 0; i < maxSquareNumber; i++) {
        const square = `<div class="square">${i + 1}</div>`;
        console.log(square);
        DOMelement.innerHTML += square;
        playBtn.classList.add("d-none");
    }
}
