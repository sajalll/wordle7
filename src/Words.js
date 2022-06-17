import wordBank from "./common-7-letter-words.txt"

export const boardDefault = [
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      const newwordArr= wordArr.map((word)=> word.toLowerCase())
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      // console.log(todaysWord)
      // console.log(wordArr)
      wordSet = new Set(newwordArr);
      console.log(wordSet);
    });
  return { wordSet, todaysWord };
};
