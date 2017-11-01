const word = 'heiroll';
const words = ['hello', 'hell', 'hi', 'he', 'her', 'ho', 'roll', 'heir']; // test


let start = 0;
let end = 1;
let combinations = [];


while (end < word.length) {
  let charBaseSearch = word.slice(start,end);
  let i = 0
  while (i < word.length) {
    if (i <= start || i >= end) {
      let b = charBaseSearch + word[i];
      console.log(b)
    }
    i++
  }

  end++;
}



// binary search for each combination of word