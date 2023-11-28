// Code your solutions in this file
function writeCards(names, event) {
  const card = [];
  for (let i = 0; i < names.length; i++) {
    card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return card;
}

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }