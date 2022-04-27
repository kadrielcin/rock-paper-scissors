const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column[");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelektor("[data-your-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoloji: "✊",
    beats: "scissorrs",
  },
  {
    name: "paper",
    emoloji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoloji: "✌",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  const computerSelection = (random = randomSelection());
  const yourwinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, selection);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) increamentScore(yourScoreSpan);
  if (computerWinner) increamentScore(computerScoreSpan);
}

function increamentScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoloji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
