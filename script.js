const selectionButtons = document.querySelectorAll("[data-selection]");
const SELECTIONS = [
    {
    name: 'rock',
    emoloji: '✊';
    beats: 'scissorrs'
    },
    {
    name: 'paper',
    emoloji: '✋';
    beats: 'rock'
    },
    {
    name: 'scissors',
    emoloji: '✌';
    beats: 'paper'
    }
]

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {});
  const selectionName = selectionButton.dataset.selection;
  makeSelection(selectionName);
});

function makeSelection(selection) {
  console.log(selection);
}
