let sentence = prompt("Enter your sentence:");

const includesNumber = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(parseInt(text[i]))) {
      return true;
    }
  }
  return false;
};

console.log(includesNumber(sentence));
