const winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 3, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function finalVerdict(moves) {

  winningArray.forEach((wincondition) => {
   const decision = wincondition.every((el) => moves.includes(el));
    if (decision) {
      console.log(`This is the decision: ${decision}`);
      return decision;
    }
  });
}

console.log(finalVerdict([0, 1, 5]));
